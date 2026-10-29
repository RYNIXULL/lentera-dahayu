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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8BE5FF] glass-badge">
          <Microscope className="w-3.5 h-3.5" />
          <span>TACTILE SCIENCE // 08. GRIP & SURFACE COATING</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
          Acoustically tuned glaze.{" "}
          <span className="text-[#8BE5FF]">Anti-slip porcelain physics.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
          The camera pulls in for a macro inspection of the satin glaze. Microscopic silica pores generate natural capillary adhesion against damp fingertips, preventing catastrophic desktop spills during heated GitHub code reviews.
        </p>

        {/* Dynamic Friction Gauge Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-[#2A3545] space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#A5B0C0] pb-2 border-b border-[#2A3545]">
            <span className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-[#8BE5FF]" />
              <span>COEFFICIENT OF FRICTION MONITOR</span>
            </span>
            <span className="text-[#86D6AD] font-bold">OPTIMAL</span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-mono font-bold text-[#F3F6FA]">
              μ = {friction.toFixed(3)}
            </span>
            <span className="text-xs font-mono text-[#8BE5FF]">STATIC</span>
          </div>

          {/* Meter Bar */}
          <div className="w-full h-2 rounded-full bg-[#090D14] overflow-hidden border border-[#2A3545]">
            <div
              className="h-full bg-gradient-to-r from-[#8BE5FF] to-[#86D6AD] transition-all duration-75"
              style={{ width: `${(friction / 1.0) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#A5B0C0]">
            <div className="p-2.5 rounded-lg bg-[#090D14]/60 border border-[#2A3545]">
              <span className="block text-[10px] text-[#A5B0C0]/60 uppercase">KINETIC GRIP</span>
              <span className="font-bold text-[#F3F6FA]">μ_k = 0.612</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#090D14]/60 border border-[#2A3545]">
              <span className="block text-[10px] text-[#A5B0C0]/60 uppercase">POROSITY</span>
              <span className="font-bold text-[#F3F6FA]">0.04% Non-absorbent</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#86D6AD]">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Dishwasher compatible up to 92°C without glaze degradation.</span>
        </div>
      </div>
    </section>
  );
}
