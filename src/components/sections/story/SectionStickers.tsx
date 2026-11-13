"use client";

import React from "react";
import { Award, ShieldAlert, CheckCheck, RefreshCw, ZapOff } from "lucide-react";

export function SectionStickers() {
  const stickers = [
    {
      title: "CERTIFIED CIRCULAR",
      sub: "BY ABSOLUTELY NO REGULATORY BODY",
      rotation: "-rotate-6",
      bg: "bg-[#0284C7] text-white shadow-[0_10px_20px_rgba(14,165,233,0.35),inset_2px_2px_4px_rgba(255,255,255,0.4)]",
      icon: Award,
    },
    {
      title: "100% POST-IRONY PORCELAIN",
      sub: "GENUINE EARTH MINERALS FIRED AT 1280°C",
      rotation: "rotate-3",
      bg: "bg-white text-[#1E293B] border border-[#BAE6FD] shadow-[0_10px_20px_rgba(14,165,233,0.1),inset_2px_2px_4px_rgba(255,255,255,1)]",
      icon: CheckCheck,
    },
    {
      title: "NO BLUETOOTH PAIRING",
      sub: "DOES NOT TRANSMIT SIP METRICS TO SHENZHEN",
      rotation: "-rotate-2",
      bg: "bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-white shadow-[0_10px_20px_rgba(14,165,233,0.35)]",
      icon: ZapOff,
    },
    {
      title: "DO NOT MICROWAVE",
      sub: "UNLESS CONDUCTING UNAPPROVED PLASMA RESEARCH",
      rotation: "rotate-6",
      bg: "bg-[#EF4444] text-white shadow-[0_10px_20px_rgba(239,68,68,0.3)]",
      icon: ShieldAlert,
    },
    {
      title: "HOT LIQUID COMPATIBLE",
      sub: "GUARANTEED NOT TO MELT BELOW 1,200°C",
      rotation: "-rotate-4",
      bg: "bg-[#059669] text-white shadow-[0_10px_20px_rgba(5,150,105,0.3)]",
      icon: RefreshCw,
    },
  ];

  return (
    <section
      id="sec-stickers"
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-4xl z-10 w-full text-center space-y-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS // 11. SOCIAL PROOF COLLAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
            Stickers earned through{" "}
            <span className="text-[#0284C7]">uncompromising ceramic arrogance.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#64748B] max-w-lg mx-auto">
            Hover over any certification sticker to test compliance tension.
          </p>
        </div>

        {/* Sticker Collage Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
          {stickers.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                data-cursor="pointer"
                className={`p-5 rounded-3xl font-mono shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-0 hover:z-20 cursor-grab active:cursor-grabbing ${s.rotation} ${s.bg}`}
              >
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider mb-1">
                  <IconComp className="w-4 h-4 shrink-0" />
                  <span>{s.title}</span>
                </div>
                <p className="text-[10px] font-semibold tracking-tight opacity-90 text-left">
                  {s.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
