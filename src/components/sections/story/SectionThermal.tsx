"use client";

import React from "react";
import { useStoryStore, TemperatureMode } from "@/store/useStoryStore";
import { Flame, Sliders, AlertTriangle, TrendingUp } from "lucide-react";

export function SectionThermal() {
  const temperatureMode = useStoryStore((s) => s.temperatureMode);
  const setTemperatureMode = useStoryStore((s) => s.setTemperatureMode);

  const modes: Array<{
    id: TemperatureMode;
    label: string;
    tempValue: string;
    desc: string;
  }> = [
    {
      id: "creative",
      label: "Creative (1.0)",
      tempValue: "88.4°C",
      desc: "Hyper-energetic heat gradient. High thermal volatility.",
    },
    {
      id: "balanced",
      label: "Balanced (0.5)",
      tempValue: "64.2°C",
      desc: "Optimal tasting temperature for specialty pour-overs.",
    },
    {
      id: "deterministic",
      label: "Deterministic (0.05)",
      tempValue: "21.0°C",
      desc: "Cryogenic baseline. Zero entropy ambient mode.",
    },
  ];

  return (
    <section
      id="sec-thermal"
      className="min-h-screen relative flex items-center justify-start px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-xl z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge">
          <Flame className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>SIMULATION // 05. THERMAL GRADIENT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
          Real-time thermal shader.{" "}
          <span className="text-[#0284C7]">Adjust the inference temperature.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          The 3D vessel reacts directly to your chosen temperature parameter. Watch the real-time Fresnel heat dissipation shader shift wavelengths across the ceramic body.
        </p>

        {/* Temperature Mode Selector Tabs */}
        <div className="clay-card rounded-3xl p-6 border border-[#E2E8F0] space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#64748B] pb-2 border-b border-[#E2E8F0]">
            <span className="flex items-center gap-1.5 font-bold">
              <Sliders className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>SAMPLING TEMPERATURE PARAMETER</span>
            </span>
            <span className="font-mono text-[#0284C7] font-bold">
              {temperatureMode.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {modes.map((m) => {
              const active = temperatureMode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setTemperatureMode(m.id)}
                  data-cursor="pointer"
                  className={`p-3.5 rounded-2xl text-left font-mono transition-all border cursor-pointer ${
                    active
                      ? "bg-[#F0F9FF] border-[#0284C7] text-[#1E293B] shadow-[0_6px_16px_rgba(14,165,233,0.15),inset_1px_1px_2px_rgba(255,255,255,1)]"
                      : "bg-white border-[#E2E8F0] text-[#64748B] hover:text-[#1E293B] hover:border-sky-200"
                  }`}
                >
                  <p className="text-xs font-bold leading-none mb-1">{m.label}</p>
                  <p className="text-sm font-black text-[#0284C7]">{m.tempValue}</p>
                </button>
              );
            })}
          </div>

          <p className="text-xs text-[#64748B] pt-1">
            {modes.find((m) => m.id === temperatureMode)?.desc}
          </p>
        </div>

        {/* Tiny Chart with Disclaimer */}
        <div className="p-5 rounded-3xl bg-white border border-[#E2E8F0] space-y-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
            <span className="flex items-center gap-1.5 font-bold">
              <TrendingUp className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Thermal Decay Curve (0h - 12h)</span>
            </span>
            <span className="text-[#0284C7] font-bold">ΔT/dt ≈ -0.012</span>
          </div>

          {/* SVG Mini Waveform Chart */}
          <div className="h-12 w-full flex items-end gap-1 pt-2">
            {[40, 39, 38, 38, 37, 36, 36, 35, 35, 34, 34, 33, 33, 32, 32, 31, 31, 30].map(
              (val, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#0284C7] to-[#38BDF8] rounded-t-sm transition-all"
                  style={{
                    height: `${(val / 42) * 100}%`,
                    opacity: 0.3 + (i / 18) * 0.7,
                  }}
                />
              )
            )}
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#64748B]/70 italic pt-1">
            <AlertTriangle className="w-3 h-3 text-[#0284C7] shrink-0" />
            <span>*A visual shader simulation, not an engineering warranty.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
