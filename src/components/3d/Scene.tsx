"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";
import { HeroObject } from "./HeroObject";
import { useStoryStore } from "@/store/useStoryStore";
import { STORY_CONFIG } from "@/config/story";

function CameraController() {
  const scrollProgress = useStoryStore((s) => s.scrollProgress);
  const targetCamPos = useRef(new THREE.Vector3(0, 0, 5));

  useFrame((state, delta) => {
    const keyframes = STORY_CONFIG.keyframes;
    const totalSections = keyframes.length;

    const rawIndex = scrollProgress * (totalSections - 1);
    const currentIndex = Math.floor(rawIndex);
    const nextIndex = Math.min(currentIndex + 1, totalSections - 1);
    const blend = rawIndex - currentIndex;

    const k1 = keyframes[currentIndex] || keyframes[0];
    const k2 = keyframes[nextIndex] || k1;

    targetCamPos.current.x = THREE.MathUtils.lerp(
      k1.cameraPos[0],
      k2.cameraPos[0],
      blend
    );
    targetCamPos.current.y = THREE.MathUtils.lerp(
      k1.cameraPos[1],
      k2.cameraPos[1],
      blend
    );
    targetCamPos.current.z = THREE.MathUtils.lerp(
      k1.cameraPos[2],
      k2.cameraPos[2],
      blend
    );

    const damp = Math.min(delta * 4.0, 1.0);
    state.camera.position.lerp(targetCamPos.current, damp);
  });

  return null;
}

export function Scene() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none select-none w-screen h-screen overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <CameraController />

        {/* Studio Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.8}
          color="#FFFFFF"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-4, -2, -2]} intensity={0.8} color="#8BE5FF" />
        <pointLight position={[3, -4, 2]} intensity={0.5} color="#FF9100" />

        {/* Hero 3D Object with soft float */}
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
          <HeroObject />
        </Float>

        {/* Contact Shadow on Studio Ground */}
        <ContactShadows
          position={[0, -2.1, 0]}
          opacity={0.65}
          scale={7}
          blur={2.4}
          far={4.5}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
