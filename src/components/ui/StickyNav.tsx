"use client";

import React from "react";
import { useStoryStore } from "@/store/useStoryStore";
import { STORY_CONFIG } from "@/config/story";
import { Cpu } from "lucide-react";

export function StickyNav() {
  const activeSectionIndex = useStoryStore((s) => s.activeSectionIndex);
  const scrollProgress = useStoryStore((s) => s.scrollProgress);

  const navItems = [
    { label: "Intro", targetId: "sec-hero" },
    { label: "Intelligence", targetId: "sec-parody-ai" },
    { label: "Lift", targetId: "sec-lift" },
    { label: "Thermal", targetId: "sec-thermal" },
    { label: "Geometry", targetId: "sec-geometry" },
    { label: "Tactile", targetId: "sec-toy" },
    { label: "Variants", targetId: "sec-variants" },
    { label: "Research", targetId: "sec-open-model" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo & Spec Moniker */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#172232] border border-[#2A3545] flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8BE5FF] shadow-[0_0_10px_#8BE5FF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-wider text-sm sm:text-base text-[#F3F6FA] uppercase">
                {STORY_CONFIG.product.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#8BE5FF] uppercase hidden sm:inline-block">
                {STORY_CONFIG.product.modelCode}
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <nav
            aria-label="Story Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#111824]/60 border border-white/5 backdrop-blur-md"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollTo(item.targetId)}
                className="px-3 py-1 rounded-full text-xs font-mono text-[#A5B0C0] hover:text-[#F3F6FA] hover:bg-white/5 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Status Badge */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono glass-badge text-[#8BE5FF]">
              <Cpu className="w-3.5 h-3.5" />
              <span>LATENT COLD RETENTION</span>
            </div>
            <button
              type="button"
              onClick={() => scrollTo("sec-variants")}
              className="px-4 py-2 rounded-xl bg-[#8BE5FF] text-[#090D14] text-xs font-mono font-bold tracking-wider hover:bg-[#43BFEA] transition-all shadow-[0_0_16px_rgba(139,229,255,0.25)]"
            >
              PRE-ORDER
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div
          className="h-[2px] bg-gradient-to-r from-[#8BE5FF] via-[#43BFEA] to-[#FF9100] transition-all duration-75"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
        />
      </header>

      {/* Right Edge Thin Section Index (01 - 14) */}
      <aside
        aria-label="Section Indicator"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-1.5 font-mono text-[10px] select-none"
      >
        {Array.from({ length: 14 }).map((_, idx) => {
          const isActive = activeSectionIndex === idx;
          const numStr = (idx + 1).toString().padStart(2, "0");

          return (
            <div
              key={idx}
              className={`flex items-center gap-2 transition-all ${
                isActive
                  ? "text-[#8BE5FF] font-bold scale-110 translate-x-[-2px]"
                  : "text-[#A5B0C0]/40 hover:text-[#A5B0C0]"
              }`}
            >
              <span
                className={`w-1 h-1 rounded-full transition-all ${
                  isActive ? "bg-[#8BE5FF] w-3" : "bg-[#2A3545]"
                }`}
              />
              <span>{numStr}</span>
            </div>
          );
        })}
      </aside>
    </>
  );
}
