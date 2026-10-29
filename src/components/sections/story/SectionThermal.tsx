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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#FF9100] glass-badge">
          <Flame className="w-3.5 h-3.5 text-[#FF9100]" />
          <span>SIMULATION // 05. THERMAL GRADIENT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
          Real-time thermal shader.{" "}
          <span className="text-[#FF9100]">Adjust the inference temperature.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
          The 3D vessel reacts directly to your chosen temperature parameter. Watch the real-time Fresnel heat dissipation shader shift wavelengths across the ceramic body.
        </p>

        {/* Temperature Mode Selector Tabs */}
        <div className="glass-card rounded-2xl p-5 border border-[#2A3545] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#A5B0C0] pb-2 border-b border-[#2A3545]">
            <span className="flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#8BE5FF]" />
              <span>SAMPLING TEMPERATURE PARAMETER</span>
            </span>
            <span className="font-mono text-[#FF9100] font-bold">
              {temperatureMode.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {modes.map((m) => {
              const active = temperatureMode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setTemperatureMode(m.id)}
                  data-cursor="pointer"
                  className={`p-3 rounded-xl text-left font-mono transition-all border ${
                    active
                      ? "bg-[#172232] border-[#FF9100] text-[#F3F6FA] shadow-[0_0_16px_rgba(255,145,0,0.2)]"
                      : "bg-[#090D14]/70 border-[#2A3545] text-[#A5B0C0] hover:text-[#F3F6FA] hover:bg-[#111824]"
                  }`}
                >
                  <p className="text-xs font-bold leading-none mb-1">{m.label}</p>
                  <p className="text-sm font-black text-[#FF9100]">{m.tempValue}</p>
                </button>
              );
            })}
          </div>

          <p className="text-xs text-[#A5B0C0] pt-1">
            {modes.find((m) => m.id === temperatureMode)?.desc}
          </p>
        </div>

        {/* Tiny Chart with Disclaimer */}
        <div className="p-4 rounded-xl bg-[#090D14]/80 border border-[#2A3545] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#A5B0C0]">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#FF9100]" />
              <span>Thermal Decay Curve (0h - 12h)</span>
            </span>
            <span className="text-[#8BE5FF]">ΔT/dt ≈ -0.012</span>
          </div>

          {/* SVG Mini Waveform Chart */}
          <div className="h-12 w-full flex items-end gap-1 pt-2">
            {[40, 39, 38, 38, 37, 36, 36, 35, 35, 34, 34, 33, 33, 32, 32, 31, 31, 30].map(
              (val, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#FF9100] to-[#8BE5FF] rounded-t-sm transition-all"
                  style={{
                    height: `${(val / 42) * 100}%`,
                    opacity: 0.3 + (i / 18) * 0.7,
                  }}
                />
              )
            )}
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A5B0C0]/60 italic pt-1">
            <AlertTriangle className="w-3 h-3 text-[#FF9100] shrink-0" />
            <span>*A visual shader simulation, not an engineering warranty.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
