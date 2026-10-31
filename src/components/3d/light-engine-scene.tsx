"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { SceneFallback } from "./scene-fallback";

const CAMERA_Z = 5.8;
const CAMERA_FOV = 42;
// Half of the visible world height at z=0 for the base (non-extended) frame.
const FRAME_HALF_HEIGHT = CAMERA_Z * Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2));
const LANTERN_SCALE = 0.7;
const LANTERN_Y = 0.2;
const DROP_START_Y = FRAME_HALF_HEIGHT + 0.4;
// Rope length (world units) that the swing and tilt angles were originally tuned for.
const REF_ROPE_LENGTH = 2.1;
const ROPE_RADIUS = 0.0112;
const DROP_DURATION = 1.3;
const HOVER_SCALE = 1.05;
const COLOR_CYAN = "#8BE5FF";
const COLOR_AMBER = "#FF8A65";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

// White gradient so the sprite material's color can tint it smoothly.
function createGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D canvas context unavailable");
  const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(255,255,255,0.35)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(canvas);
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}

interface LightEngineObjectsProps {
  baseRef: React.RefObject<HTMLDivElement | null>;
}

function LightEngineObjects({ baseRef }: LightEngineObjectsProps) {
  const reducedMotion = React.useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [isHovered, setIsHovered] = useState(false);
  const [isAmber, setIsAmber] = useState(false);

  const rootRef = useRef<THREE.Group>(null);
  const pivotRef = useRef<THREE.Group>(null);
  const ropeRef = useRef<THREE.Mesh>(null);
  const lanternRef = useRef<THREE.Group>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);
  const bulbMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const ringMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const cageMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const glowMatRef = useRef<THREE.SpriteMaterial>(null);
  const haloMatRef = useRef<THREE.SpriteMaterial>(null);

  const smoothed = useRef({ x: 0, y: 0 });
  const hoverAmount = useRef(0);
  const targetColor = useRef(new THREE.Color(COLOR_CYAN));
  const currentColor = useRef(new THREE.Color(COLOR_CYAN));
  // h0: height in px of the base frame; extra: px the canvas extends above it.
  const layout = useRef({ h0: 0, extra: 0 });

  const glow = useMemo(() => createGlowTexture(), []);
  const size = useThree((s) => s.size);

  useEffect(() => {
    const base = baseRef.current;
    const h0 = base ? base.clientHeight : size.height;
    layout.current = { h0, extra: Math.max(size.height - h0, 0) };
  }, [baseRef, size.width, size.height]);

  useEffect(() => {
    return () => {
      glow.dispose();
      if (typeof document !== "undefined") document.body.style.cursor = "";
    };
  }, [glow]);

  useFrame((state, delta) => {
    const root = rootRef.current;
    const pivot = pivotRef.current;
    const rope = ropeRef.current;
    const lantern = lanternRef.current;
    const light = pointLightRef.current;
    const bulbMat = bulbMatRef.current;
    const ringMat = ringMatRef.current;
    const cageMat = cageMatRef.current;
    const glowMat = glowMatRef.current;
    const haloMat = haloMatRef.current;
    if (!root || !pivot || !rope || !lantern || !light || !bulbMat || !ringMat || !cageMat || !glowMat || !haloMat) return;

    const dt = Math.min(delta, 1 / 30);
    const t = state.clock.elapsedTime;
    const { width, height } = state.size;
    const h0 = layout.current.h0 || height;
    const extra = layout.current.extra;

    // Keep the base frame framed exactly as before while the canvas grows upward.
    const cam = state.camera as THREE.PerspectiveCamera;
    cam.aspect = width / h0;
    cam.setViewOffset(width, h0, 0, -extra, width, height);

    // The rope is anchored just above the top edge of the (extended) canvas.
    const worldPerPx = (2 * FRAME_HALF_HEIGHT) / h0;
    const pivotY = FRAME_HALF_HEIGHT + extra * worldPerPx + 0.1;
    root.position.y = pivotY;

    // Angles were tuned for a short rope; scale them so lateral motion stays the same.
    const angleScale = REF_ROPE_LENGTH / (pivotY - LANTERN_Y);

    let lanternY = LANTERN_Y;
    let targetRotZ = 0;
    if (!reducedMotion) {
      if (t < DROP_DURATION) {
        const startY = Math.min(DROP_START_Y, pivotY);
        lanternY = startY + (LANTERN_Y - startY) * easeOutCubic(t / DROP_DURATION);
      } else {
        const t2 = t - DROP_DURATION;
        const decay = Math.exp(-t2 / 2.5);
        const swing = Math.sin(t2 * 1.6) * 0.28 * decay;
        const microSway = Math.sin(t * 1.2) * 0.06 + Math.cos(t * 0.8) * 0.04;
        targetRotZ = (swing + microSway) * angleScale;
      }
    }
    pivot.rotation.z = targetRotZ;

    const ropeLen = Math.max(pivotY - lanternY, 0.001);
    rope.scale.y = ropeLen;
    rope.position.y = -ropeLen / 2;
    lantern.position.y = lanternY - pivotY;

    hoverAmount.current +=
      ((isHovered ? 1 : 0) - hoverAmount.current) * (1 - Math.exp(-8 * dt));
    const h = hoverAmount.current;
    lantern.scale.setScalar(LANTERN_SCALE * (1 + (HOVER_SCALE - 1) * h));

    currentColor.current.lerp(targetColor.current, 1 - Math.exp(-6 * dt));
    const c = currentColor.current;
    const breath = reducedMotion ? 1 : 1 + Math.sin(t * 1.6) * 0.04;

    light.color.copy(c);
    light.intensity = (3.2 + 0.6 * h) * breath;

    bulbMat.color.copy(c);
    bulbMat.emissive.copy(c);
    bulbMat.emissiveIntensity = (1.2 + 0.6 * h) * breath;

    ringMat.color.copy(c);
    ringMat.emissive.copy(c);

    cageMat.color.copy(c);
    cageMat.emissive.copy(c);

    glowMat.color.copy(c);
    glowMat.opacity = 0.85 + 0.15 * h;

    haloMat.color.copy(c);
    haloMat.opacity = 0.14 + 0.08 * h;

    // Normalize the pointer to the base frame so tilt stays consistent with the extended canvas.
    const pointerX = reducedMotion ? 0 : state.pointer.x;
    const pointerY = reducedMotion
      ? 0
      : THREE.MathUtils.clamp(
          (state.pointer.y - (h0 / height - 1)) * (height / h0),
          -1,
          1
        );
    const ease = 1 - Math.exp(-6 * dt);
    smoothed.current.x += (pointerY - smoothed.current.x) * ease;
    smoothed.current.y += (pointerX - smoothed.current.y) * ease;
    root.rotation.x = smoothed.current.x * -0.3 * angleScale;
    root.rotation.y = smoothed.current.y * 0.45;
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsHovered(true);
    if (typeof document !== "undefined") document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    if (typeof document !== "undefined") document.body.style.cursor = "";
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const next = !isAmber;
    setIsAmber(next);
    targetColor.current.set(next ? COLOR_AMBER : COLOR_CYAN);
  };

  return (
    <group ref={rootRef}>
      <group ref={pivotRef}>
        <mesh ref={ropeRef}>
          <cylinderGeometry args={[ROPE_RADIUS, ROPE_RADIUS, 1, 16]} />
          <meshStandardMaterial color="#2E3A4E" roughness={0.7} metalness={0.3} />
        </mesh>

        <group
          ref={lanternRef}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <pointLight ref={pointLightRef} position={[0, 0, 0]} color={COLOR_CYAN} intensity={3.2} distance={7} />

          {/* Wire cage: the metal frame that defines the lantern silhouette */}
          <mesh>
            <cylinderGeometry args={[0.56, 0.49, 1.05, 32, 1, true]} />
            <meshStandardMaterial
              ref={cageMatRef}
              color={COLOR_CYAN}
              emissive={COLOR_CYAN}
              emissiveIntensity={0.15}
              roughness={0.35}
              metalness={0.8}
              wireframe
              transparent
              opacity={0.6}
            />
          </mesh>

          {/* Glass body: faint so the bulb reads through it */}
          <mesh>
            <cylinderGeometry args={[0.52, 0.45, 1.0, 32, 1, true]} />
            <meshStandardMaterial
              color="#111824"
              roughness={0.1}
              metalness={0}
              transparent
              opacity={0.18}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>

          <mesh position={[0, 0.65, 0]}>
            <coneGeometry args={[0.42, 0.32, 32]} />
            <meshStandardMaterial color="#1E2838" roughness={0.25} metalness={0.7} />
          </mesh>

          <mesh position={[0, 0.85, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.08, 0.025, 16, 32]} />
            <meshStandardMaterial ref={ringMatRef} color={COLOR_CYAN} roughness={0.2} metalness={0.9} />
          </mesh>

          <mesh position={[0, -0.58, 0]}>
            <cylinderGeometry args={[0.41, 0.31, 0.18, 32]} />
            <meshStandardMaterial color="#1A2333" roughness={0.3} metalness={0.6} />
          </mesh>

          <mesh>
            <sphereGeometry args={[0.18, 24, 24]} />
            <meshStandardMaterial
              ref={bulbMatRef}
              color={COLOR_CYAN}
              emissive={COLOR_CYAN}
              emissiveIntensity={1.2}
              roughness={0.1}
            />
          </mesh>

          <sprite scale={[1.6, 1.6, 1]}>
            <spriteMaterial
              ref={glowMatRef}
              map={glow}
              color={COLOR_CYAN}
              transparent
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </sprite>

          <sprite scale={[3.2, 3.2, 1]} position={[0, -0.1, 0]}>
            <spriteMaterial
              ref={haloMatRef}
              map={glow}
              color={COLOR_CYAN}
              transparent
              opacity={0.14}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </sprite>
        </group>
      </group>
    </group>
  );
}

export function LightEngineScene() {
  const baseRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={baseRef}
      className="w-full h-full relative"
      role="img"
      aria-label="Interactive 3D lantern"
    >
      {/* The canvas grows upward on large screens so the rope can reach the top of the page. */}
      <div
        className="absolute inset-x-0 bottom-0 [--rope-extra:0px] lg:[--rope-extra:70vh]"
        style={{ height: "calc(100% + var(--rope-extra))" }}
      >
        <Canvas
          camera={{ position: [0, 0, CAMERA_Z], fov: CAMERA_FOV }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          fallback={
            <div className="w-full h-full" style={{ paddingTop: "var(--rope-extra)" }}>
              <SceneFallback />
            </div>
          }
          className="w-full h-full"
        >
          <LightEngineObjects baseRef={baseRef} />
        </Canvas>
      </div>
    </div>
  );
}
