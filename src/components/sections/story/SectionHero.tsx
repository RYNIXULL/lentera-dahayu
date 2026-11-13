"use client";

import React from "react";
import { useStoryStore } from "@/store/useStoryStore";
import { Play, ArrowDown, Cpu } from "lucide-react";

export function SectionHero() {
  const setVideoModalOpen = useStoryStore((s) => s.setVideoModalOpen);

  return (
    <section
      id="sec-hero"
      className="min-h-screen relative flex items-center justify-start px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-2xl z-10 space-y-6">
        {/* Monospace Issue Kicker */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#0284C7]">
          <span className="px-3 py-1 rounded-full bg-white border border-[#BAE6FD] shadow-[inset_1px_1px_2px_rgba(255,255,255,1),0_2px_4px_rgba(14,165,233,0.06)] font-bold">
            SPEC PAPER NO. 00124
          </span>
          <span className="text-[#64748B]">•</span>
          <span className="flex items-center gap-1.5 text-[#64748B] font-medium">
            <Cpu className="w-3.5 h-3.5 text-[#0284C7]" />
            T = 0.1 (STABLE COLD BIAS)
          </span>
        </div>

        {/* Oversized Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#1E293B] leading-[0.95]">
          VESSEL<span className="text-[#0284C7]">-01</span>
        </h1>

        <p className="text-xl sm:text-2xl text-[#0284C7] font-medium tracking-tight max-w-xl">
          The World&apos;s First Autonomous Ceramic Beverage Inference Device.
        </p>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg font-normal">
          Trained on 40,000 years of slip-cast pottery data to deliver deterministic fluid retention, zero latency sips, and 37.9% higher circularity than uncalibrated mugs.
        </p>

        {/* Dual CTA */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            data-cursor="pointer"
            className="clay-btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 font-mono font-bold text-sm cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>PLAY SPEC FILM</span>
          </button>

          <a
            href="#sec-parody-ai"
            className="clay-btn-secondary inline-flex items-center gap-2 px-5 py-3.5 text-xs font-mono font-bold"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#0284C7]" />
          </a>
        </div>

        {/* Studio Specs Bar */}
        <div className="pt-8 border-t border-[#E2E8F0] grid grid-cols-3 gap-4 font-mono text-xs">
          <div>
            <p className="text-[#64748B] text-[10px] uppercase font-bold">CAPACITY</p>
            <p className="text-sm font-bold text-[#1E293B]">420 ml</p>
          </div>
          <div>
            <p className="text-[#64748B] text-[10px] uppercase font-bold">LATENCY</p>
            <p className="text-sm font-bold text-[#0284C7]">0.0 ms</p>
          </div>
          <div>
            <p className="text-[#64748B] text-[10px] uppercase font-bold">FABRICATION</p>
            <p className="text-sm font-bold text-[#1E293B]">Slip-Cast AI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
