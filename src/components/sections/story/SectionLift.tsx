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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge">
          <Layers className="w-3.5 h-3.5" />
          <span>ARCHITECTURE // 04. EXPLODED LIFT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
          Sub-millimeter wall thickness.{" "}
          <span className="text-[#0284C7]">Separated by intent.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          As the vessel lifts into an exploded state, notice the three decoupled ceramic tiers: the slip-cast outer glaze shell, the inner cryogenic thermal retention core, and the grounding magnetic base disc.
        </p>

        {/* Animated Spec Counter Box */}
        <div className="clay-card rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] space-y-5">
          <div className="flex items-center justify-between text-xs font-mono text-[#64748B] pb-3 border-b border-[#E2E8F0]">
            <span className="flex items-center gap-1.5 font-bold">
              <Activity className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>MEASURED WALL TOLERANCES</span>
            </span>
            <span className="text-[#0284C7] font-bold">CALIBRATED</span>
          </div>

          <div className="grid grid-cols-3 gap-4 font-mono">
            <div>
              <p className="text-[11px] text-[#64748B] uppercase font-bold">WALL THICKNESS</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#1E293B]">4.8<span className="text-sm text-[#0284C7]">mm</span></p>
              <p className="text-[10px] text-[#059669] mt-1 font-semibold">±0.002mm variance</p>
            </div>

            <div>
              <p className="text-[11px] text-[#64748B] uppercase font-bold">SLIP DENSITY</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#1E293B]">2.34<span className="text-sm text-[#0284C7]">g/cm³</span></p>
              <p className="text-[10px] text-[#64748B] mt-1">High-fire feldspar</p>
            </div>

            <div>
              <p className="text-[11px] text-[#64748B] uppercase font-bold">THERMAL LIFT</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#0284C7]">14.8<span className="text-sm text-[#0284C7]">hrs</span></p>
              <p className="text-[10px] text-[#64748B] mt-1">Passive retention</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
          <ArrowUp className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Visual explosion controlled automatically via real-time scroll elevation.</span>
        </div>
      </div>
    </section>
  );
}
