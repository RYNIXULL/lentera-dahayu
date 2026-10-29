"use client";

import React from "react";
import { Award, ShieldAlert, CheckCheck, RefreshCw, ZapOff } from "lucide-react";

export function SectionStickers() {
  const stickers = [
    {
      title: "CERTIFIED CIRCULAR",
      sub: "BY ABSOLUTELY NO REGULATORY BODY",
      rotation: "-rotate-6",
      bg: "bg-[#8BE5FF] text-[#090D14]",
      icon: Award,
    },
    {
      title: "100% POST-IRONY PORCELAIN",
      sub: "GENUINE EARTH MINERALS FIRED AT 1280°C",
      rotation: "rotate-3",
      bg: "bg-[#172232] text-[#F3F6FA] border border-[#8BE5FF]/40",
      icon: CheckCheck,
    },
    {
      title: "NO BLUETOOTH PAIRING",
      sub: "DOES NOT TRANSMIT SIP METRICS TO SHENZHEN",
      rotation: "-rotate-2",
      bg: "bg-[#FF9100] text-[#090D14]",
      icon: ZapOff,
    },
    {
      title: "DO NOT MICROWAVE",
      sub: "UNLESS CONDUCTING UNAPPROVED PLASMA RESEARCH",
      rotation: "rotate-6",
      bg: "bg-[#FF7777] text-[#090D14]",
      icon: ShieldAlert,
    },
    {
      title: "HOT LIQUID COMPATIBLE",
      sub: "GUARANTEED NOT TO MELT BELOW 1,200°C",
      rotation: "-rotate-4",
      bg: "bg-[#86D6AD] text-[#090D14]",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8BE5FF] glass-badge mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS // 11. SOCIAL PROOF COLLAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
            Stickers earned through{" "}
            <span className="text-[#8BE5FF]">uncompromising ceramic arrogance.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A5B0C0] max-w-lg mx-auto">
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
                className={`p-5 rounded-2xl font-mono shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-0 hover:z-20 cursor-grab active:cursor-grabbing ${s.rotation} ${s.bg}`}
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
