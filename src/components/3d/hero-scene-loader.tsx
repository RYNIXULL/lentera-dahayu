"use client";

import React from "react";
import dynamic from "next/dynamic";
import { SceneFallback } from "./scene-fallback";
import { SceneErrorBoundary } from "./scene-error-boundary";

// Dynamically import Three.js scene client-only to ensure zero impact on initial server FCP
const DynamicLightEngine = dynamic(
  () =>
    import("./light-engine-scene").then((mod) => ({
      default: mod.LightEngineScene,
    })),
  {
    ssr: false,
    loading: () => <SceneFallback />,
  }
);

interface HeroSceneLoaderProps {
  className?: string;
}

export function HeroSceneLoader({ className = "" }: HeroSceneLoaderProps) {
  return (
    <div
      className={`relative w-full h-full min-h-[380px] sm:min-h-[440px] md:min-h-[520px] flex items-center justify-center ${className}`}
    >
      <SceneErrorBoundary>
        <DynamicLightEngine />
      </SceneErrorBoundary>
    </div>
  );
}
