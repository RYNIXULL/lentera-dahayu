"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface R21FHeroLogoProps {
  className?: string;
}

export function R21FHeroLogo({ className = "" }: R21FHeroLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // Smooth kinetic physics (Euler integration + damped lerp)
  const current = useRef({
    rotX: 0,
    rotY: 0,
    rotZ: 0,
    transY: 0,
    scale: 1,
    lightX: 50,
    lightY: 35,
  });

  const target = useRef({
    rotX: 0,
    rotY: 0,
    rotZ: 0,
    transY: 0,
    scale: 1,
    lightX: 50,
    lightY: 35,
  });

  const isInteracting = useRef(false);

  // Smooth pointer interaction tracker
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    isInteracting.current = true;

    // Fluid responsive angles: gentle pitch (-12° to +12°) & yaw (-15° to +15°)
    target.current.rotX = (0.5 - ny) * 22;
    target.current.rotY = (nx - 0.5) * 26;
    target.current.rotZ = (nx - 0.5) * -3;
    target.current.transY = (ny - 0.5) * 10;
    target.current.scale = 1.04;

    target.current.lightX = Math.max(15, Math.min(85, nx * 100));
    target.current.lightY = Math.max(15, Math.min(85, ny * 100));
  }, []);

  const handlePointerLeave = useCallback(() => {
    isInteracting.current = false;
    target.current.scale = 1;
  }, []);

  const handlePointerDown = useCallback(() => {
    target.current.scale = 0.97;
  }, []);

  const handlePointerUp = useCallback(() => {
    target.current.scale = isInteracting.current ? 1.04 : 1;
  }, []);

  // Continuous animation loop (fluid organic wave levitation + 60/120fps lerp)
  useEffect(() => {
    let startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - startTime) * 0.001;

      // When idle, apply multi-harmonic fluid wave floating
      if (!isInteracting.current) {
        const wave1 = Math.sin(elapsed * 1.1);
        const wave2 = Math.cos(elapsed * 0.75);

        target.current.transY = wave1 * 8 + wave2 * 3;
        target.current.rotX = wave1 * 3.0;
        target.current.rotY = wave2 * 4.5;
        target.current.rotZ = Math.sin(elapsed * 0.55) * 1.8;

        target.current.lightX = 50 + Math.cos(elapsed * 0.7) * 28;
        target.current.lightY = 38 + Math.sin(elapsed * 0.9) * 20;
      }

      // Smooth damped lerp interpolation
      const lerp = 0.08;
      current.current.rotX += (target.current.rotX - current.current.rotX) * lerp;
      current.current.rotY += (target.current.rotY - current.current.rotY) * lerp;
      current.current.rotZ += (target.current.rotZ - current.current.rotZ) * lerp;
      current.current.transY += (target.current.transY - current.current.transY) * lerp;
      current.current.scale += (target.current.scale - current.current.scale) * lerp;
      current.current.lightX += (target.current.lightX - current.current.lightX) * lerp;
      current.current.lightY += (target.current.lightY - current.current.lightY) * lerp;

      const stage = stageRef.current;
      const shadow = shadowRef.current;
      const aura = auraRef.current;

      if (stage) {
        stage.style.transform = `perspective(1200px) translate3d(0, ${current.current.transY}px, 0) rotateX(${current.current.rotX}deg) rotateY(${current.current.rotY}deg) rotateZ(${current.current.rotZ}deg) scale3d(${current.current.scale}, ${current.current.scale}, 1)`;
      }

      if (shadow) {
        const sX = -current.current.rotY * 1.5;
        const sY = 28 - current.current.transY * 0.35 + current.current.rotX * 1.1;
        const sScale = 1 - current.current.transY * 0.012;
        shadow.style.transform = `translate3d(${sX}px, ${sY}px, 0) scale(${sScale})`;
      }

      if (aura) {
        aura.style.background = `radial-gradient(circle at ${current.current.lightX}% ${current.current.lightY}%, rgba(56, 189, 248, 0.35) 0%, rgba(2, 132, 199, 0.18) 35%, rgba(220, 38, 38, 0.12) 65%, transparent 80%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className={`relative w-full max-w-[460px] lg:max-w-[500px] aspect-[56336/45740] mx-auto select-none touch-none cursor-grab active:cursor-grabbing flex items-center justify-center p-2 sm:p-4 ${className}`}
    >
      {/* 1. VOLUMETRIC ATMOSPHERIC LIGHTING (Zero heavy SVG filters, 100% GPU accelerated) */}
      <div
        ref={auraRef}
        className="absolute -inset-8 sm:-inset-16 rounded-full blur-3xl pointer-events-none opacity-80"
        style={{
          willChange: "background",
          background:
            "radial-gradient(circle at 50% 35%, rgba(56, 189, 248, 0.35) 0%, rgba(2, 132, 199, 0.18) 35%, rgba(220, 38, 38, 0.12) 65%, transparent 80%)",
        }}
      />

      {/* Secondary accent lighting: Soft crimson glow under the red wing */}
      <div
        className="absolute bottom-4 right-4 w-64 h-48 bg-gradient-to-br from-[#FF0000]/22 via-[#DC2626]/18 to-transparent rounded-full blur-2xl pointer-events-none animate-pulse"
        style={{ animationDuration: "5s" }}
      />

      {/* Tertiary accent lighting: Deep electric blue under the main loop */}
      <div className="absolute top-4 left-6 w-72 h-56 bg-gradient-to-tr from-[#000066]/25 via-[#0284C7]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 2. REALTIME VOLUMETRIC DROP SHADOW (Suspended in Space) */}
      <div
        ref={shadowRef}
        className="absolute bottom-0 w-[78%] h-[26%] rounded-full bg-gradient-to-r from-[#000066]/35 via-[#0284C7]/25 to-[#FF0000]/25 blur-3xl pointer-events-none opacity-45"
        style={{ willChange: "transform" }}
      />

      {/* 3. STANDALONE 3D SUSPENDED SVG LOGO WITH FLUID FLOWING GRADIENTS */}
      <div
        ref={stageRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      >
        <svg
          viewBox="0 0 56335.96 45739.46"
          className="w-full h-full overflow-visible drop-shadow-[0_22px_32px_rgba(0,0,102,0.22)]"
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }}
          aria-label="R21F Master Flowing Logo"
        >
          <defs>
            {/* FLOWING NAVY GRADIENT (Continuous 360° Rotational Wave through the Infinity Loop) */}
            <linearGradient id="flowNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00004D" />
              <stop offset="25%" stopColor="#000066" />
              <stop offset="48%" stopColor="#0A1D85" />
              <stop offset="65%" stopColor="#1E40AF" />
              <stop offset="78%" stopColor="#38BDF8" />
              <stop offset="88%" stopColor="#0A1D85" />
              <stop offset="100%" stopColor="#00004D" />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 28168 22870"
                to="360 28168 22870"
                dur="9s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* FLOWING RED SWOOP GRADIENT (Dynamic Outward Wave into the Wing) */}
            <linearGradient id="flowRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#990000" />
              <stop offset="30%" stopColor="#DC2626" />
              <stop offset="60%" stopColor="#FF0000" />
              <stop offset="82%" stopColor="#FF4D4D" />
              <stop offset="95%" stopColor="#FF8585" />
              <stop offset="100%" stopColor="#DC2626" />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 45000 35000"
                to="360 45000 35000"
                dur="6s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* TRAVELLING SPECULAR SHEEN WAVE */}
            <linearGradient id="flowingSheen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="35%" stopColor="white" stopOpacity="0.04" />
              <stop offset="48%" stopColor="white" stopOpacity="0.4" />
              <stop offset="52%" stopColor="white" stopOpacity="0.65" />
              <stop offset="56%" stopColor="white" stopOpacity="0.4" />
              <stop offset="68%" stopColor="white" stopOpacity="0.04" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
              <animate
                attributeName="x1"
                from="-120%"
                to="220%"
                dur="3.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                from="-20%"
                to="320%"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* SECONDARY AMBIENT LIGHT SURGE */}
            <linearGradient id="ambientSurge" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              <animate
                attributeName="x1"
                from="200%"
                to="-100%"
                dur="5.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                from="300%"
                to="0%"
                dur="5.5s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* CONTINUOUS LIQUID STREAM TRACER */}
            <linearGradient id="laserStream" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* MASTER FLOWING SOLID BODIES (Always Visible Immediately, Zero Blink) */}
          <g id="Master_Flowing_Shapes">
            {/* PATH 1: Dynamic Red Swoop */}
            <path
              id="flowing-red-tail"
              d="M38891.43 29959.58c18.81,-49.71 36.29,-96.72 56.43,-138.38 411.13,-878.66 806.13,-1735.85 1230.69,-2599.75 -57.79,137.05 -115.55,274.08 -173.31,412.46 2634.67,3507.98 5554.19,6123.87 8739.71,7811.35 2304.17,1234.72 4836.74,2022.02 7591.01,2363.29 0,2644.08 0,5288.16 0,7930.91 -4498.19,-491.73 -8300.39,-2574.22 -11420.1,-6236.7 -1555.82,-1839.32 -3526.79,-5062.46 -5934.41,-9725.89 -29.57,61.81 -59.12,122.26 -90.02,182.72z"
              fill="url(#flowRedGrad)"
              stroke="rgba(255, 180, 180, 0.4)"
              strokeWidth="110"
              strokeLinejoin="round"
            />

            {/* PATH 2: Sovereign Infinity Ribbon */}
            <path
              id="flowing-navy-loop"
              d="M38505.83 29467.86c2.69,-10.76 4.05,-21.5 6.74,-32.24 401.7,-861.21 788.66,-1696.89 1203.81,-2540.65 2551.36,-6037.86 5212.92,-10470.2 7964.5,-13297.02 2419.72,-2481.51 5157.85,-4150.18 8217.08,-5003.32 0,-2864.44 0,-5730.21 0,-8594.63 -4878.39,255.27 -9128,2024.71 -12747.5,5294.9 -1441.6,1288.46 -2767.68,2767.68 -4001.06,4398.74 -1213.22,1648.53 -2615.87,3904.32 -4170.35,6748.59 -2615.87,-4132.71 -4740,-6976.98 -6369.71,-8531.47 -3299.74,-3165.38 -7205.41,-4758.81 -11717.01,-4758.81 -4854.22,0 -8835.11,1839.3 -11944.08,5497.76 -1554.46,1858.11 -2767.68,4057.49 -3640.98,6635.73 -871.95,2578.27 -1307.27,5233.09 -1307.27,7981.98 0,3071.33 530.7,5953.22 1610.91,8626.87 1081.55,2692.46 2597.06,4985.87 4550.55,6862.79 3487.83,3337.36 7697.14,5004.7 12664.22,5004.7 4588.19,0 8702.11,-1496.7 12322.95,-4474 2809.32,-2261.17 5259.94,-5535.38 7357.2,-9819.92zm-20855.75 -17897.3c3412.59,0 6483.92,624.75 9213.98,1856.78 2730.08,1233.38 5062.46,3071.33 7034.79,5536.73 -1858.13,4910.63 -3735.05,8569.09 -5611.97,10995.52 -3489.17,4494.14 -7887.93,6749.95 -13196.25,6749.95 -4037.32,0 -7355.87,-1156.79 -9952.92,-3450.21 -2597.08,-2313.57 -3886.87,-5251.9 -3886.87,-8816.3 0,-3753.84 1535.67,-6843.98 4607,-9251.62 3090.14,-2407.62 7014.62,-3620.84 11792.25,-3620.84z"
              fill="url(#flowNavyGrad)"
              stroke="rgba(186, 230, 253, 0.4)"
              strokeWidth="130"
              strokeLinejoin="round"
            />
          </g>

          {/* TRAVELLING LIQUID SPECULAR SHEEN */}
          <g style={{ mixBlendMode: "screen", pointerEvents: "none" }}>
            <path
              d="M38891.43 29959.58c18.81,-49.71 36.29,-96.72 56.43,-138.38 411.13,-878.66 806.13,-1735.85 1230.69,-2599.75 -57.79,137.05 -115.55,274.08 -173.31,412.46 2634.67,3507.98 5554.19,6123.87 8739.71,7811.35 2304.17,1234.72 4836.74,2022.02 7591.01,2363.29 0,2644.08 0,5288.16 0,7930.91 -4498.19,-491.73 -8300.39,-2574.22 -11420.1,-6236.7 -1555.82,-1839.32 -3526.79,-5062.46 -5934.41,-9725.89 -29.57,61.81 -59.12,122.26 -90.02,182.72z"
              fill="url(#flowingSheen)"
              opacity="0.85"
            />
            <path
              d="M38505.83 29467.86c2.69,-10.76 4.05,-21.5 6.74,-32.24 401.7,-861.21 788.66,-1696.89 1203.81,-2540.65 2551.36,-6037.86 5212.92,-10470.2 7964.5,-13297.02 2419.72,-2481.51 5157.85,-4150.18 8217.08,-5003.32 0,-2864.44 0,-5730.21 0,-8594.63 -4878.39,255.27 -9128,2024.71 -12747.5,5294.9 -1441.6,1288.46 -2767.68,2767.68 -4001.06,4398.74 -1213.22,1648.53 -2615.87,3904.32 -4170.35,6748.59 -2615.87,-4132.71 -4740,-6976.98 -6369.71,-8531.47 -3299.74,-3165.38 -7205.41,-4758.81 -11717.01,-4758.81 -4854.22,0 -8835.11,1839.3 -11944.08,5497.76 -1554.46,1858.11 -2767.68,4057.49 -3640.98,6635.73 -871.95,2578.27 -1307.27,5233.09 -1307.27,7981.98 0,3071.33 530.7,5953.22 1610.91,8626.87 1081.55,2692.46 2597.06,4985.87 4550.55,6862.79 3487.83,3337.36 7697.14,5004.7 12664.22,5004.7 4588.19,0 8702.11,-1496.7 12322.95,-4474 2809.32,-2261.17 5259.94,-5535.38 7357.2,-9819.92zm-20855.75 -17897.3c3412.59,0 6483.92,624.75 9213.98,1856.78 2730.08,1233.38 5062.46,3071.33 7034.79,5536.73 -1858.13,4910.63 -3735.05,8569.09 -5611.97,10995.52 -3489.17,4494.14 -7887.93,6749.95 -13196.25,6749.95 -4037.32,0 -7355.87,-1156.79 -9952.92,-3450.21 -2597.08,-2313.57 -3886.87,-5251.9 -3886.87,-8816.3 0,-3753.84 1535.67,-6843.98 4607,-9251.62 3090.14,-2407.62 7014.62,-3620.84 11792.25,-3620.84z"
              fill="url(#flowingSheen)"
              opacity="0.9"
            />
            <path
              d="M38505.83 29467.86c2.69,-10.76 4.05,-21.5 6.74,-32.24 401.7,-861.21 788.66,-1696.89 1203.81,-2540.65 2551.36,-6037.86 5212.92,-10470.2 7964.5,-13297.02 2419.72,-2481.51 5157.85,-4150.18 8217.08,-5003.32 0,-2864.44 0,-5730.21 0,-8594.63 -4878.39,255.27 -9128,2024.71 -12747.5,5294.9 -1441.6,1288.46 -2767.68,2767.68 -4001.06,4398.74 -1213.22,1648.53 -2615.87,3904.32 -4170.35,6748.59 -2615.87,-4132.71 -4740,-6976.98 -6369.71,-8531.47 -3299.74,-3165.38 -7205.41,-4758.81 -11717.01,-4758.81 -4854.22,0 -8835.11,1839.3 -11944.08,5497.76 -1554.46,1858.11 -2767.68,4057.49 -3640.98,6635.73 -871.95,2578.27 -1307.27,5233.09 -1307.27,7981.98 0,3071.33 530.7,5953.22 1610.91,8626.87 1081.55,2692.46 2597.06,4985.87 4550.55,6862.79 3487.83,3337.36 7697.14,5004.7 12664.22,5004.7 4588.19,0 8702.11,-1496.7 12322.95,-4474 2809.32,-2261.17 5259.94,-5535.38 7357.2,-9819.92zm-20855.75 -17897.3c3412.59,0 6483.92,624.75 9213.98,1856.78 2730.08,1233.38 5062.46,3071.33 7034.79,5536.73 -1858.13,4910.63 -3735.05,8569.09 -5611.97,10995.52 -3489.17,4494.14 -7887.93,6749.95 -13196.25,6749.95 -4037.32,0 -7355.87,-1156.79 -9952.92,-3450.21 -2597.08,-2313.57 -3886.87,-5251.9 -3886.87,-8816.3 0,-3753.84 1535.67,-6843.98 4607,-9251.62 3090.14,-2407.62 7014.62,-3620.84 11792.25,-3620.84z"
              fill="url(#ambientSurge)"
              opacity="0.6"
            />
          </g>

          {/* CONTINUOUS OPTICAL FLUID ENERGY STREAM */}
          <path
            d="M38505.83 29467.86c2.69,-10.76 4.05,-21.5 6.74,-32.24 401.7,-861.21 788.66,-1696.89 1203.81,-2540.65 2551.36,-6037.86 5212.92,-10470.2 7964.5,-13297.02 2419.72,-2481.51 5157.85,-4150.18 8217.08,-5003.32 0,-2864.44 0,-5730.21 0,-8594.63 -4878.39,255.27 -9128,2024.71 -12747.5,5294.9 -1441.6,1288.46 -2767.68,2767.68 -4001.06,4398.74 -1213.22,1648.53 -2615.87,3904.32 -4170.35,6748.59 -2615.87,-4132.71 -4740,-6976.98 -6369.71,-8531.47 -3299.74,-3165.38 -7205.41,-4758.81 -11717.01,-4758.81 -4854.22,0 -8835.11,1839.3 -11944.08,5497.76 -1554.46,1858.11 -2767.68,4057.49 -3640.98,6635.73 -871.95,2578.27 -1307.27,5233.09 -1307.27,7981.98 0,3071.33 530.7,5953.22 1610.91,8626.87 1081.55,2692.46 2597.06,4985.87 4550.55,6862.79 3487.83,3337.36 7697.14,5004.7 12664.22,5004.7 4588.19,0 8702.11,-1496.7 12322.95,-4474 2809.32,-2261.17 5259.94,-5535.38 7357.2,-9819.92zm-20855.75 -17897.3c3412.59,0 6483.92,624.75 9213.98,1856.78 2730.08,1233.38 5062.46,3071.33 7034.79,5536.73 -1858.13,4910.63 -3735.05,8569.09 -5611.97,10995.52 -3489.17,4494.14 -7887.93,6749.95 -13196.25,6749.95 -4037.32,0 -7355.87,-1156.79 -9952.92,-3450.21 -2597.08,-2313.57 -3886.87,-5251.9 -3886.87,-8816.3 0,-3753.84 1535.67,-6843.98 4607,-9251.62 3090.14,-2407.62 7014.62,-3620.84 11792.25,-3620.84z"
            fill="none"
            stroke="url(#laserStream)"
            strokeWidth="240"
            strokeDasharray="5000 15000"
            strokeLinecap="round"
            className="animate-[dash_5.5s_linear_infinite]"
          />
        </svg>
      </div>
    </div>
  );
}
