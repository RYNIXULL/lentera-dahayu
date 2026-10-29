"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useStoryStore } from "@/store/useStoryStore";
import { STORY_CONFIG } from "@/config/story";

// Custom Thermal Shader Material for Section 5
const ThermalMaterialShader = {
  uniforms: {
    uTime: { value: 0 },
    uHeatIntensity: { value: 0 },
    uHeatColor: { value: new THREE.Color("#FF5722") },
    uBaseColor: { value: new THREE.Color("#182234") },
    uAccentColor: { value: new THREE.Color("#8BE5FF") },
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform float uHeatIntensity;
    uniform vec3 uHeatColor;
    uniform vec3 uBaseColor;
    uniform vec3 uAccentColor;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;

    void main() {
      vec3 viewDir = vec3(0.0, 0.0, 1.0);
      float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 2.5);
      float gradient = smoothstep(-1.0, 1.2, vPosition.y);
      float wave = sin(vPosition.y * 8.0 - uTime * 2.0) * 0.1;
      
      vec3 thermalGlow = mix(uHeatColor, uAccentColor, gradient + wave);
      vec3 finalColor = mix(uBaseColor, thermalGlow, uHeatIntensity * (0.4 + fresnel * 0.8));

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

export function HeroObject() {
  const rootGroupRef = useRef<THREE.Group>(null);
  const innerCoreGroupRef = useRef<THREE.Group>(null);
  const baseDiscGroupRef = useRef<THREE.Group>(null);
  const wireframeMeshRef = useRef<THREE.Mesh>(null);
  const thermalShaderMatRef = useRef<THREE.ShaderMaterial>(null);

  // Stack groups
  const stackGroup2Ref = useRef<THREE.Group>(null);
  const stackGroup3Ref = useRef<THREE.Group>(null);

  // Zustand State
  const activeSectionIndex = useStoryStore((s) => s.activeSectionIndex);
  const scrollProgress = useStoryStore((s) => s.scrollProgress);
  const activeVariant = useStoryStore((s) => s.activeVariant);
  const temperatureMode = useStoryStore((s) => s.temperatureMode);
  const toyFlipped = useStoryStore((s) => s.toyFlipped);
  const toyManualRotation = useStoryStore((s) => s.toyManualRotation);
  const mousePos = useStoryStore((s) => s.mousePos);

  // Current interpolated keyframe state
  const currentPos = useRef(new THREE.Vector3());
  const currentRot = useRef(new THREE.Euler());
  const currentScale = useRef(new THREE.Vector3(1, 1, 1));
  const currentExploded = useRef(0);
  const currentHeat = useRef(0);

  // Heat color based on Temperature Mode
  const heatColor = useMemo(() => {
    switch (temperatureMode) {
      case "creative":
        return "#FF3D00";
      case "deterministic":
        return "#8BE5FF";
      case "balanced":
      default:
        return "#FF9100";
    }
  }, [temperatureMode]);

  // Variant stack count calculation
  const stackCount = useMemo(() => {
    if (activeSectionIndex === 11) {
      if (activeVariant === "promax") return 3;
      if (activeVariant === "pro") return 2;
      return 1;
    }
    return 1;
  }, [activeSectionIndex, activeVariant]);

  useFrame((state, delta) => {
    if (!rootGroupRef.current) return;

    const keyframes = STORY_CONFIG.keyframes;
    const totalSections = keyframes.length;

    // Continuous float index based on scrollProgress
    const rawIndex = scrollProgress * (totalSections - 1);
    const currentIndex = Math.floor(rawIndex);
    const nextIndex = Math.min(currentIndex + 1, totalSections - 1);
    const blend = rawIndex - currentIndex;

    const k1 = keyframes[currentIndex] || keyframes[0];
    const k2 = keyframes[nextIndex] || k1;

    // Interpolate target transforms
    const targetX = THREE.MathUtils.lerp(k1.position[0], k2.position[0], blend);
    const targetY = THREE.MathUtils.lerp(k1.position[1], k2.position[1], blend);
    const targetZ = THREE.MathUtils.lerp(k1.position[2], k2.position[2], blend);

    let targetRotX = THREE.MathUtils.lerp(k1.rotation[0], k2.rotation[0], blend);
    let targetRotY = THREE.MathUtils.lerp(k1.rotation[1], k2.rotation[1], blend);
    const targetRotZ = THREE.MathUtils.lerp(k1.rotation[2], k2.rotation[2], blend);

    const targetScaleX = THREE.MathUtils.lerp(k1.scale[0], k2.scale[0], blend);
    const targetScaleY = THREE.MathUtils.lerp(k1.scale[1], k2.scale[1], blend);
    const targetScaleZ = THREE.MathUtils.lerp(k1.scale[2], k2.scale[2], blend);

    const targetExploded = THREE.MathUtils.lerp(k1.exploded, k2.exploded, blend);
    let targetHeat = THREE.MathUtils.lerp(k1.heatIntensity, k2.heatIntensity, blend);

    // Apply Temperature slider multiplier when in Thermal section (index 4)
    if (currentIndex === 4 || nextIndex === 4) {
      const multiplier =
        temperatureMode === "creative"
          ? 1.2
          : temperatureMode === "deterministic"
          ? 0.3
          : 0.8;
      targetHeat *= multiplier;
    }

    // Interactive Proximity Reaction in Section 2 ("Parody AI")
    if (activeSectionIndex === 2) {
      targetRotY += mousePos[0] * 0.45;
      targetRotX -= mousePos[1] * 0.35;
    }

    // Interactive Toy Flip in Section 6
    if (activeSectionIndex === 6) {
      if (toyFlipped) {
        targetRotX = Math.PI * 0.95 + toyManualRotation[0];
        targetRotY = toyManualRotation[1];
      } else {
        targetRotX = 0.2 + toyManualRotation[0];
        targetRotY = toyManualRotation[1];
      }
    }

    // Idle floating micro-motion
    const idleTime = state.clock.getElapsedTime();
    const idleY = Math.sin(idleTime * 1.5) * 0.05;
    const idleRotY = Math.cos(idleTime * 0.8) * 0.04;

    const dampFactor = Math.min(delta * 5.0, 1.0);

    currentPos.current.x = THREE.MathUtils.lerp(
      currentPos.current.x,
      targetX,
      dampFactor
    );
    currentPos.current.y = THREE.MathUtils.lerp(
      currentPos.current.y,
      targetY + idleY,
      dampFactor
    );
    currentPos.current.z = THREE.MathUtils.lerp(
      currentPos.current.z,
      targetZ,
      dampFactor
    );

    currentRot.current.x = THREE.MathUtils.lerp(
      currentRot.current.x,
      targetRotX,
      dampFactor
    );
    currentRot.current.y = THREE.MathUtils.lerp(
      currentRot.current.y,
      targetRotY + idleRotY,
      dampFactor
    );
    currentRot.current.z = THREE.MathUtils.lerp(
      currentRot.current.z,
      targetRotZ,
      dampFactor
    );

    currentScale.current.x = THREE.MathUtils.lerp(
      currentScale.current.x,
      targetScaleX,
      dampFactor
    );
    currentScale.current.y = THREE.MathUtils.lerp(
      currentScale.current.y,
      targetScaleY,
      dampFactor
    );
    currentScale.current.z = THREE.MathUtils.lerp(
      currentScale.current.z,
      targetScaleZ,
      dampFactor
    );

    currentExploded.current = THREE.MathUtils.lerp(
      currentExploded.current,
      targetExploded,
      dampFactor
    );
    currentHeat.current = THREE.MathUtils.lerp(
      currentHeat.current,
      targetHeat,
      dampFactor
    );

    // Apply directly to Three.js Object hierarchy
    rootGroupRef.current.position.copy(currentPos.current);
    rootGroupRef.current.rotation.copy(currentRot.current);
    rootGroupRef.current.scale.copy(currentScale.current);

    // Exploded View group offsets
    if (innerCoreGroupRef.current) {
      innerCoreGroupRef.current.position.y = currentExploded.current * 0.9;
    }
    if (baseDiscGroupRef.current) {
      baseDiscGroupRef.current.position.y = -1.1 - currentExploded.current * 0.7;
    }

    // Wireframe visibility
    const showWireframe = k1.wireframe || (blend > 0.5 && k2.wireframe);
    if (wireframeMeshRef.current) {
      wireframeMeshRef.current.visible = showWireframe;
    }

    // Thermal Shader Uniforms
    if (thermalShaderMatRef.current) {
      thermalShaderMatRef.current.uniforms.uTime.value = idleTime;
      thermalShaderMatRef.current.uniforms.uHeatIntensity.value = currentHeat.current;
      thermalShaderMatRef.current.uniforms.uHeatColor.value.set(heatColor);
    }

    // Stack visibility
    if (stackGroup2Ref.current) {
      stackGroup2Ref.current.visible = stackCount >= 2;
    }
    if (stackGroup3Ref.current) {
      stackGroup3Ref.current.visible = stackCount >= 3;
    }
  });

  return (
    <group ref={rootGroupRef}>
      {/* 1. Main Outer Ceramic Body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.0, 0.85, 2.2, 48, 1, true]} />
        <shaderMaterial
          ref={thermalShaderMatRef}
          args={[ThermalMaterialShader]}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 2. Inner Core Group */}
      <group ref={innerCoreGroupRef} position={[0, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.88, 0.74, 2.0, 36]} />
          <meshStandardMaterial color="#8BE5FF" roughness={0.2} metalness={0.7} />
        </mesh>
        <mesh position={[0, 1.05, 0]}>
          <torusGeometry args={[0.92, 0.03, 16, 48]} />
          <meshBasicMaterial color="#8BE5FF" />
        </mesh>
      </group>

      {/* 3. Ergonomic Handle */}
      <mesh position={[1.05, 0.05, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.62, 0.15, 24, 36, Math.PI * 1.15]} />
        <meshStandardMaterial color="#1E2838" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* 4. Base Disc Group (Underside Inspection) */}
      <group ref={baseDiscGroupRef} position={[0, -1.1, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[0.84, 48]} />
          <meshStandardMaterial color="#131B27" roughness={0.4} metalness={0.3} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
          <ringGeometry args={[0.45, 0.48, 36]} />
          <meshBasicMaterial color="#8BE5FF" />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
          <ringGeometry args={[0.65, 0.67, 36]} />
          <meshBasicMaterial color="#43BFEA" />
        </mesh>
      </group>

      {/* 5. Rim Chamfer */}
      <mesh position={[0, 1.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.94, 0.06, 16, 48]} />
        <meshStandardMaterial color="#2E3C52" roughness={0.2} metalness={0.3} />
      </mesh>

      {/* 6. Wireframe Blueprint Overlay */}
      <mesh ref={wireframeMeshRef} visible={false} scale={[1.06, 1.04, 1.06]}>
        <cylinderGeometry args={[1.02, 0.88, 2.25, 24, 8, true]} />
        <meshBasicMaterial color="#8BE5FF" wireframe transparent opacity={0.7} />
      </mesh>

      {/* Stack 2: Pro Tier */}
      <group ref={stackGroup2Ref} position={[0, -2.4, 0]} scale={[0.92, 0.92, 0.92]} visible={false}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1.0, 0.85, 2.2, 48, 1, true]} />
          <meshStandardMaterial color="#1A2333" roughness={0.3} metalness={0.2} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Stack 3: Pro Max Tier */}
      <group ref={stackGroup3Ref} position={[0, 2.3, 0]} scale={[0.88, 0.88, 0.88]} visible={false}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1.0, 0.85, 2.2, 48, 1, true]} />
          <meshStandardMaterial color="#1A2333" roughness={0.3} metalness={0.2} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}
