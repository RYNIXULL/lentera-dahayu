"use client";

import React from "react";
import { Layers, ArrowUp, Activity } from "lucide-react";

export function SectionLift() {
  return (
    <section
      id="sec-lift"
      className="min-h-screen relative flex items-center justify-start px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-xl z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8BE5FF] glass-badge">
          <Layers className="w-3.5 h-3.5" />
          <span>ARCHITECTURE // 04. EXPLODED LIFT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
          Sub-millimeter wall thickness.{" "}
          <span className="text-[#8BE5FF]">Separated by intent.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
          As the vessel lifts into an exploded state, notice the three decoupled ceramic tiers: the slip-cast outer glaze shell, the inner cryogenic thermal retention core, and the grounding magnetic base disc.
        </p>

        {/* Animated Spec Counter Box */}
        <div className="glass-card rounded-2xl p-6 border border-[#2A3545] space-y-5">
          <div className="flex items-center justify-between text-xs font-mono text-[#A5B0C0] pb-3 border-b border-[#2A3545]">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#8BE5FF]" />
              <span>MEASURED WALL TOLERANCES</span>
            </span>
            <span className="text-[#8BE5FF] font-bold">CALIBRATED</span>
          </div>

          <div className="grid grid-cols-3 gap-4 font-mono">
            <div>
              <p className="text-[11px] text-[#A5B0C0] uppercase">WALL THICKNESS</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#F3F6FA]">4.8<span className="text-sm text-[#8BE5FF]">mm</span></p>
              <p className="text-[10px] text-[#86D6AD] mt-1">±0.002mm variance</p>
            </div>

            <div>
              <p className="text-[11px] text-[#A5B0C0] uppercase">SLIP DENSITY</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#F3F6FA]">2.34<span className="text-sm text-[#8BE5FF]">g/cm³</span></p>
              <p className="text-[10px] text-[#A5B0C0] mt-1">High-fire feldspar</p>
            </div>

            <div>
              <p className="text-[11px] text-[#A5B0C0] uppercase">THERMAL LIFT</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#8BE5FF]">14.8<span className="text-sm text-[#8BE5FF]">hrs</span></p>
              <p className="text-[10px] text-[#A5B0C0] mt-1">Passive retention</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#A5B0C0]/70">
          <ArrowUp className="w-3.5 h-3.5 text-[#8BE5FF]" />
          <span>Visual explosion controlled automatically via real-time scroll elevation.</span>
        </div>
      </div>
    </section>
  );
}
