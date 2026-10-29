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
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#8BE5FF]">
          <span className="px-2.5 py-1 rounded-md bg-[#111824] border border-[#2A3545]">
            SPEC PAPER NO. 00124
          </span>
          <span className="text-[#A5B0C0]">•</span>
          <span className="flex items-center gap-1.5 text-[#A5B0C0]">
            <Cpu className="w-3.5 h-3.5 text-[#8BE5FF]" />
            T = 0.1 (STABLE COLD BIAS)
          </span>
        </div>

        {/* Oversized Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#F3F6FA] leading-[0.95]">
          VESSEL<span className="text-[#8BE5FF]">-01</span>
        </h1>

        <p className="text-xl sm:text-2xl text-[#8BE5FF] font-light tracking-tight max-w-xl">
          The World&apos;s First Autonomous Ceramic Beverage Inference Device.
        </p>

        <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed max-w-lg font-normal">
          Trained on 40,000 years of slip-cast pottery data to deliver deterministic fluid retention, zero latency sips, and 37.9% higher circularity than uncalibrated mugs.
        </p>

        {/* Dual CTA */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            data-cursor="pointer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#8BE5FF] text-[#090D14] font-mono font-bold text-sm hover:bg-[#43BFEA] transition-all shadow-[0_0_24px_rgba(139,229,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>PLAY SPEC FILM</span>
          </button>

          <a
            href="#sec-parody-ai"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#172232]/80 hover:bg-[#1E2D42] border border-[#2A3545] text-xs font-mono text-[#F3F6FA] transition-all"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#8BE5FF]" />
          </a>
        </div>

        {/* Studio Specs Bar */}
        <div className="pt-8 border-t border-[#2A3545]/60 grid grid-cols-3 gap-4 font-mono text-xs">
          <div>
            <p className="text-[#A5B0C0] text-[10px] uppercase">CAPACITY</p>
            <p className="text-sm font-bold text-[#F3F6FA]">420 ml</p>
          </div>
          <div>
            <p className="text-[#A5B0C0] text-[10px] uppercase">LATENCY</p>
            <p className="text-sm font-bold text-[#8BE5FF]">0.0 ms</p>
          </div>
          <div>
            <p className="text-[#A5B0C0] text-[10px] uppercase">FABRICATION</p>
            <p className="text-sm font-bold text-[#F3F6FA]">Slip-Cast AI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
