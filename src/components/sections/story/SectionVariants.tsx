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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8BE5FF] glass-badge mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>DEPLOYMENT TIERS // 12. VARIANTS & SPEC MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
            Choose your stack.{" "}
            <span className="text-[#8BE5FF]">Watch the 3D model multiply.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
            Clicking between tiers physically spawns interlocking ceramic units in the real-time 3D canvas behind this panel.
          </p>
        </div>

        {/* Tier Tabs */}
        <div className="grid grid-cols-3 gap-2.5 p-1.5 rounded-2xl bg-[#090D14]/80 border border-[#2A3545]">
          {tiers.map((t) => {
            const active = activeVariant === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveVariant(t.id)}
                data-cursor="pointer"
                className={`py-3 px-2 sm:px-4 rounded-xl text-center font-mono transition-all ${
                  active
                    ? "bg-[#8BE5FF] text-[#090D14] font-bold shadow-[0_0_20px_rgba(139,229,255,0.25)]"
                    : "text-[#A5B0C0] hover:text-[#F3F6FA] hover:bg-[#172232]"
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
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#2A3545] space-y-6 animate-slide-up">
              <div className="flex items-center justify-between pb-4 border-b border-[#2A3545]">
                <div>
                  <h3 className="text-xl font-bold text-[#F3F6FA]">{current.name}</h3>
                  <p className="text-xs font-mono text-[#8BE5FF] mt-1">{current.stackDesc}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-mono font-black text-[#F3F6FA]">{current.price}</span>
                  <span className="block text-[10px] font-mono text-[#A5B0C0]">ONE-TIME FABRICATION</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3">
                {current.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#A5B0C0]">
                    <div className="w-5 h-5 rounded-full bg-[#8BE5FF]/15 border border-[#8BE5FF]/30 text-[#8BE5FF] flex items-center justify-center shrink-0 mt-0.5">
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
                className="w-full py-3.5 rounded-xl bg-[#8BE5FF] text-[#090D14] font-mono font-bold text-sm hover:bg-[#43BFEA] transition-all flex items-center justify-center gap-2"
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
