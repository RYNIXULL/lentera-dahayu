"use client";

import React from "react";
import { CircleDot, Compass, Cpu, CheckCircle2 } from "lucide-react";

export function SectionGeometry() {
  return (
    <section
      id="sec-geometry"
      className="min-h-screen relative flex items-center justify-end px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-xl z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8BE5FF] glass-badge">
          <CircleDot className="w-3.5 h-3.5" />
          <span>GEOMETRIC AUDIT // 06. WIREFRAME TOPOLOGY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
          Statistically proven to be{" "}
          <span className="text-[#8BE5FF]">37.9% more circular.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
          Standard mugs suffer from artisanal wobble and kiln sag. VESSEL-01 employs non-Euclidean parametric wireframes to maintain absolute radial symmetry across all 360 degrees of rotation.
        </p>

        {/* Big Metric Display Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#8BE5FF]/30 space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl sm:text-7xl font-mono font-black text-[#8BE5FF] tracking-tighter">
              +37.9%
            </span>
            <span className="text-sm font-mono text-[#A5B0C0] uppercase">
              Circularity Index
            </span>
          </div>

          <p className="text-xs font-mono text-[#A5B0C0] leading-relaxed">
            Benchmarked against 1,200 diner mugs, souvenir coffee cups, and uncalibrated stoneware vessels using laser interferometry.
          </p>

          <div className="pt-3 border-t border-[#2A3545] grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#86D6AD]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Zero ovalization</span>
            </div>
            <div className="flex items-center gap-2 text-[#86D6AD]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Perfect lip contact</span>
            </div>
            <div className="flex items-center gap-2 text-[#8BE5FF]">
              <Compass className="w-4 h-4 shrink-0" />
              <span>r = 4.2500 cm</span>
            </div>
            <div className="flex items-center gap-2 text-[#8BE5FF]">
              <Cpu className="w-4 h-4 shrink-0" />
              <span>Wireframe: Active</span>
            </div>
          </div>
        </div>

        <p className="text-xs font-mono text-[#A5B0C0]/60">
          The 3D model above has transitioned into wireframe mode to reveal its underlying tessellation.
        </p>
      </div>
    </section>
  );
}
