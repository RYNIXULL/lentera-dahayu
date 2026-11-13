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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge">
          <CircleDot className="w-3.5 h-3.5" />
          <span>GEOMETRIC AUDIT // 06. WIREFRAME TOPOLOGY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
          Statistically proven to be{" "}
          <span className="text-[#0284C7]">37.9% more circular.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          Standard mugs suffer from artisanal wobble and kiln sag. VESSEL-01 employs non-Euclidean parametric wireframes to maintain absolute radial symmetry across all 360 degrees of rotation.
        </p>

        {/* Big Metric Display Card */}
        <div className="clay-card rounded-3xl p-6 sm:p-8 border border-[#BAE6FD] space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl sm:text-7xl font-mono font-black text-[#0284C7] tracking-tighter">
              +37.9%
            </span>
            <span className="text-sm font-mono text-[#64748B] uppercase font-bold">
              Circularity Index
            </span>
          </div>

          <p className="text-xs font-mono text-[#64748B] leading-relaxed">
            Benchmarked against 1,200 diner mugs, souvenir coffee cups, and uncalibrated stoneware vessels using laser interferometry.
          </p>

          <div className="pt-3 border-t border-[#E2E8F0] grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#059669] font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Zero ovalization</span>
            </div>
            <div className="flex items-center gap-2 text-[#059669] font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Perfect lip contact</span>
            </div>
            <div className="flex items-center gap-2 text-[#0284C7] font-medium">
              <Compass className="w-4 h-4 shrink-0" />
              <span>r = 4.2500 cm</span>
            </div>
            <div className="flex items-center gap-2 text-[#0284C7] font-medium">
              <Cpu className="w-4 h-4 shrink-0" />
              <span>Wireframe: Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
