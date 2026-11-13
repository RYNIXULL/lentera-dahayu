"use client";

import React, { useState } from "react";
import { useStoryStore } from "@/store/useStoryStore";
import { RotateCcw, Key, Lock, Unlock } from "lucide-react";

export function SectionToy() {
  const toyFlipped = useStoryStore((s) => s.toyFlipped);
  const setToyFlipped = useStoryStore((s) => s.setToyFlipped);
  const setToyManualRotation = useStoryStore((s) => s.setToyManualRotation);

  const [sliderRotY, setSliderRotY] = useState(0);

  const handleSlider = (val: number) => {
    setSliderRotY(val);
    setToyManualRotation([0, val]);
  };

  return (
    <section
      id="sec-toy"
      className="min-h-screen relative flex items-center justify-start px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-xl z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge">
          <Key className="w-3.5 h-3.5" />
          <span>INTERACTIVE TOY // 07. UNDERSIDE CIPHER</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
          Inspect the base.{" "}
          <span className="text-[#0284C7]">Decode the secret stamp.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          Every artisanal mug has a maker&apos;s mark. VESSEL-01 carries a cryptic ceramic firmware hash etched into the unglazed porcelain foot ring. Invert the vessel to inspect the base directly.
        </p>

        {/* Flip Action Button */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setToyFlipped(!toyFlipped)}
            data-cursor="pointer"
            className={`clay-btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 font-mono text-xs font-bold transition-all cursor-pointer ${
              toyFlipped
                ? "bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-emerald-500/30"
                : ""
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>{toyFlipped ? "RESTORE UPRIGHT POSE" : "INVERT 180° (REVEAL BASE)"}</span>
          </button>
        </div>

        {/* Manual Y-Rotation Slider */}
        <div className="clay-card rounded-3xl p-5 border border-[#E2E8F0] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#64748B] font-bold">
            <span>MANUAL YAW ADJUSTMENT</span>
            <span className="text-[#0284C7]">
              {(sliderRotY * (180 / Math.PI)).toFixed(0)}°
            </span>
          </div>
          <input
            type="range"
            min={-Math.PI}
            max={Math.PI}
            step={0.05}
            value={sliderRotY}
            onChange={(e) => handleSlider(parseFloat(e.target.value))}
            className="w-full h-2 bg-[#F0F9FF] rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
          />
        </div>

        {/* Decode Gimmick Box */}
        <div
          className={`clay-card rounded-3xl p-6 border transition-all ${
            toyFlipped
              ? "border-emerald-300 bg-white"
              : "border-[#E2E8F0] bg-white"
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono pb-2 mb-2 border-b border-[#E2E8F0]">
            <span className="flex items-center gap-1.5 text-[#64748B] font-semibold">
              {toyFlipped ? (
                <Unlock className="w-3.5 h-3.5 text-[#059669]" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-[#0284C7]" />
              )}
              <span>UNDERSIDE CIPHER STATUS:</span>
            </span>
            <span
              className={`font-bold ${
                toyFlipped ? "text-[#059669]" : "text-[#0284C7]"
              }`}
            >
              {toyFlipped ? "DECRYPTED" : "LOCKED (INVERT TO DECODE)"}
            </span>
          </div>

          <div className="font-mono text-xs space-y-1">
            <p className="text-[#64748B]/60 break-all">
              RAW HASH: 0x4C4154454E545F434552414D49435F32303236
            </p>
            <p
              className={`text-sm font-bold transition-all ${
                toyFlipped ? "text-[#059669]" : "text-[#64748B]/40 blur-xs"
              }`}
            >
              &ldquo;HAND-CRAFTED BY ALGORITHMS IN THE LATENT SPACE. PLEASE RECYCLE IN 10,000 YEARS.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
