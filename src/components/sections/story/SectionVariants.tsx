"use client";

import React from "react";
import { useStoryStore, VariantTier } from "@/store/useStoryStore";
import { Layers, Check, ArrowRight } from "lucide-react";

export function SectionVariants() {
  const activeVariant = useStoryStore((s) => s.activeVariant);
  const setActiveVariant = useStoryStore((s) => s.setActiveVariant);

  const tiers: Array<{
    id: VariantTier;
    name: string;
    stackDesc: string;
    price: string;
    features: string[];
  }> = [
    {
      id: "base",
      name: "VESSEL-01 Base",
      stackDesc: "Single Monolith (Stack Count: 1)",
      price: "$48",
      features: [
        "420ml slip-cast ceramic volume",
        "37.9% circularity index",
        "Passive thermal retention",
        "Micro-texture unglazed foot",
      ],
    },
    {
      id: "pro",
      name: "VESSEL-01 Pro",
      stackDesc: "Dual Ensemble (Stack Count: 2)",
      price: "$89",
      features: [
        "Everything in Base tier",
        "Includes Magnetic Thermal Saucer Dock",
        "Interlocking stackable lip chamfer",
        "Decrypted Maker's Mark firmware seal",
      ],
    },
    {
      id: "promax",
      name: "VESSEL-01 Pro Max",
      stackDesc: "Triple Monolith Stack (Stack Count: 3)",
      price: "$149",
      features: [
        "Triple vertical harmonic stack",
        "Simultaneous Espresso + Filter + Tea inference",
        "Numbered archaeological museum certificate",
        "Lifetime exemption from smart mug updates",
      ],
    },
  ];

  return (
    <section
      id="sec-variants"
      className="min-h-screen relative flex items-center justify-start px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-2xl z-10 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>DEPLOYMENT TIERS // 12. VARIANTS & SPEC MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
            Choose your stack.{" "}
            <span className="text-[#0284C7]">Watch the 3D model multiply.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
            Clicking between tiers physically spawns interlocking ceramic units in the real-time 3D canvas behind this panel.
          </p>
        </div>

        {/* Tier Tabs */}
        <div className="grid grid-cols-3 gap-2.5 p-2 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          {tiers.map((t) => {
            const active = activeVariant === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveVariant(t.id)}
                data-cursor="pointer"
                className={`py-3 px-2 sm:px-4 rounded-2xl text-center font-mono transition-all cursor-pointer ${
                  active
                    ? "clay-btn-primary font-bold shadow-md"
                    : "text-[#64748B] hover:text-[#1E293B] hover:bg-[#F0F9FF]"
                }`}
              >
                <span className="block text-xs uppercase">{t.name.replace("VESSEL-01 ", "")}</span>
                <span className="text-sm sm:text-base font-black">{t.price}</span>
              </button>
            );
          })}
        </div>

        {/* Active Variant Specs Card */}
        {(() => {
          const current = tiers.find((t) => t.id === activeVariant) || tiers[0];
          return (
            <div className="clay-card rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] space-y-6 animate-slide-up">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B]">{current.name}</h3>
                  <p className="text-xs font-mono font-bold text-[#0284C7] mt-1">{current.stackDesc}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-mono font-black text-[#1E293B]">{current.price}</span>
                  <span className="block text-[10px] font-mono text-[#64748B] font-bold">ONE-TIME FABRICATION</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3">
                {current.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#64748B]">
                    <div className="w-5 h-5 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Order Button */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("sec-cta");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="clay-btn-primary w-full py-4 text-sm font-mono font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ALLOCATE {current.name.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
