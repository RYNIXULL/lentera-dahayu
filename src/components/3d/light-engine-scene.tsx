"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SceneFallback } from "./scene-fallback";

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

function LightEngineObjects() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  const reducedMotion = React.useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined" || reducedMotion) return;

    const handlePointerMove = (e: PointerEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotation.current = {
        x: normY * 0.3,
        y: normX * 0.4,
      };
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [reducedMotion]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (reducedMotion) {
      // Stationary pose with zero erratic movement
      groupRef.current.rotation.x = 0.2;
      groupRef.current.rotation.y = 0.4;
      return;
    }

    // Smooth pointer parallax lerping
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotation.current.x,
      0.05
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation.current.y,
      0.05
    );

    // Continuous slow rotations for core & rings
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.25;
      coreRef.current.rotation.x += delta * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.2;
      ring1Ref.current.rotation.x += delta * 0.1;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.25;
      ring2Ref.current.rotation.y += delta * 0.15;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.18;
      ring3Ref.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#8BE5FF" distance={8} />
      <pointLight position={[3, 3, 4]} intensity={1.2} color="#C1F1FF" />
      <pointLight position={[-3, -3, -2]} intensity={0.6} color="#172232" />

      {/* Central Illuminated Crystal Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#8BE5FF"
          emissive="#43BFEA"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe Outer Lattice */}
      <mesh>
        <icosahedronGeometry args={[1.45, 0]} />
        <meshBasicMaterial
          color="#8BE5FF"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Primary Orbital Ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.0, 0.018, 16, 64]} />
        <meshStandardMaterial
          color="#8BE5FF"
          emissive="#8BE5FF"
          emissiveIntensity={0.4}
          roughness={0.3}
        />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.45, 0.014, 16, 64]} />
        <meshStandardMaterial
          color="#43BFEA"
          emissive="#43BFEA"
          emissiveIntensity={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Tertiary Outer Subtle Orbit */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[2.85, 0.01, 16, 64]} />
        <meshStandardMaterial
          color="#2A3545"
          emissive="#8BE5FF"
          emissiveIntensity={0.15}
          roughness={0.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

export function LightEngineScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        fallback={<SceneFallback />}
        className="w-full h-full"
      >
        <LightEngineObjects />
      </Canvas>
    </div>
  );
}
