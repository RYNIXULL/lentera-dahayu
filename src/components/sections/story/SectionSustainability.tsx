"use client";

import React from "react";
import { Leaf } from "lucide-react";

export function SectionSustainability() {
  const stats = [
    {
      value: "10,000+",
      unit: "YEARS",
      label: "Estimated lifespan in archaeological geological strata",
      desc: "Will easily outlive all cloud providers and git repositories.",
    },
    {
      value: "0.00%",
      unit: "BATTERY DRAIN",
      label: "Zero rechargeable batteries or charging docks needed",
      desc: "Operates 100% on ambient Newtonian physics and gravity.",
    },
    {
      value: "0",
      unit: "FIRMWARE UPDATES",
      label: "No mandatory Bluetooth OTA updates to take a drink",
      desc: "Immune to broken APIs, deprecation notices, and cloud outages.",
    },
    {
      value: "100%",
      unit: "REPAIRABLE BY ARCHAEOLOGISTS",
      label: "Ceramic shards can be reassembled with golden Kintsugi",
      desc: "Designed to look even more sophisticated when broken and mended.",
    },
  ];

  return (
    <section
      id="sec-sustainability"
      className="min-h-screen relative flex items-center justify-start px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-3xl z-10 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#86D6AD] glass-badge mb-4">
            <Leaf className="w-3.5 h-3.5 text-[#86D6AD]" />
            <span>ECOSYSTEM // 09. GEOLOGICAL SUSTAINABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
            Built to outlast{" "}
            <span className="text-[#86D6AD]">civilization&apos;s Wi-Fi.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A5B0C0] leading-relaxed max-w-xl">
            Consumer hardware ends up in e-waste within 24 months. VESSEL-01 is composed purely of earthen minerals fired at 1,280°C, ensuring complete obsolescence-proof utility until the heat death of the universe.
          </p>
        </div>

        {/* Big Stat Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {stats.map((st) => (
            <div
              key={st.value}
              className="glass-card rounded-2xl p-6 border border-[#2A3545] space-y-2 hover:border-[#86D6AD]/40 transition-colors"
            >
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-4xl sm:text-5xl font-black text-[#F3F6FA]">
                  {st.value}
                </span>
                <span className="text-xs text-[#86D6AD] font-bold">
                  {st.unit}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#F3F6FA]">{st.label}</h3>
              <p className="text-xs text-[#A5B0C0] leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
