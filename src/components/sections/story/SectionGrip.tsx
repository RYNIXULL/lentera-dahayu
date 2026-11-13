"use client";

import React, { useState, useEffect } from "react";
import { Gauge, ShieldCheck, Microscope } from "lucide-react";

export function SectionGrip() {
  const [friction, setFriction] = useState(0.5);

  useEffect(() => {
    const timer = setInterval(() => {
      setFriction((prev) => {
        const next = prev + 0.02;
        if (next > 0.842) return 0.842;
        return parseFloat(next.toFixed(3));
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="sec-grip"
      className="min-h-screen relative flex items-center justify-start px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-xl z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge">
          <Microscope className="w-3.5 h-3.5" />
          <span>TACTILE SCIENCE // 08. GRIP & SURFACE COATING</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
          Acoustically tuned glaze.{" "}
          <span className="text-[#0284C7]">Anti-slip porcelain physics.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          The camera pulls in for a macro inspection of the satin glaze. Microscopic silica pores generate natural capillary adhesion against damp fingertips, preventing catastrophic desktop spills during heated GitHub code reviews.
        </p>

        {/* Dynamic Friction Gauge Card */}
        <div className="clay-card rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#64748B] pb-2 border-b border-[#E2E8F0]">
            <span className="flex items-center gap-1.5 font-bold">
              <Gauge className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>COEFFICIENT OF FRICTION MONITOR</span>
            </span>
            <span className="text-[#059669] font-bold">OPTIMAL</span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-mono font-bold text-[#1E293B]">
              μ = {friction.toFixed(3)}
            </span>
            <span className="text-xs font-mono font-bold text-[#0284C7]">STATIC</span>
          </div>

          {/* Meter Bar */}
          <div className="w-full h-2 rounded-full bg-white overflow-hidden border border-[#E2E8F0] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.06)]">
            <div
              className="h-full bg-gradient-to-r from-[#38BDF8] to-[#0284C7] transition-all duration-75 rounded-full"
              style={{ width: `${(friction / 1.0) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#64748B]">
            <div className="p-3 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD]">
              <span className="block text-[10px] text-[#64748B] uppercase font-bold">KINETIC GRIP</span>
              <span className="font-bold text-[#1E293B]">μ_k = 0.612</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD]">
              <span className="block text-[10px] text-[#64748B] uppercase font-bold">POROSITY</span>
              <span className="font-bold text-[#1E293B]">0.04% Non-absorbent</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#059669] font-medium">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Dishwasher compatible up to 92°C without glaze degradation.</span>
        </div>
      </div>
    </section>
  );
}
