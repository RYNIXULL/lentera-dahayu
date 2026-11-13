"use client";

import React from "react";
import Image from "next/image";
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
      <header className="fixed top-0 left-0 right-0 z-40 clay-nav transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo & Spec Moniker */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border-2 border-white flex items-center justify-center p-1.5 shadow-[0_6px_14px_-2px_rgba(14,165,233,0.16),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(14,165,233,0.08)]">
              <Image
                src="/logo.svg"
                alt="R21F"
                width={32}
                height={26}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-wider text-sm sm:text-base text-[#1E293B] uppercase">
                {STORY_CONFIG.product.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#0284C7] font-bold uppercase hidden sm:inline-block">
                {STORY_CONFIG.product.modelCode}
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <nav
            aria-label="Story Navigation"
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border-2 border-white shadow-[0_6px_16px_rgba(14,165,233,0.08),inset_2px_2px_4px_#FFFFFF]"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollTo(item.targetId)}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#64748B] hover:text-[#0284C7] hover:bg-[#F0F9FF] transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Status Badge */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono clay-badge text-[#0284C7]">
              <Cpu className="w-3.5 h-3.5" />
              <span>LATENT COLD RETENTION</span>
            </div>
            <button
              type="button"
              onClick={() => scrollTo("sec-variants")}
              className="clay-btn-primary px-4 py-2 text-xs font-mono font-bold tracking-wider cursor-pointer"
            >
              PRE-ORDER
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div
          className="h-[3px] bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#0284C7] transition-all duration-75 shadow-sm"
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
                  ? "text-[#0284C7] font-bold scale-110 translate-x-[-2px]"
                  : "text-[#64748B]/40 hover:text-[#64748B]"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive ? "bg-[#0284C7] w-3 shadow-[0_0_6px_#38BDF8]" : "bg-[#E2E8F0]"
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
