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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8BE5FF] glass-badge">
          <Key className="w-3.5 h-3.5" />
          <span>INTERACTIVE TOY // 07. UNDERSIDE CIPHER</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
          Inspect the base.{" "}
          <span className="text-[#8BE5FF]">Decode the secret stamp.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
          Every artisanal mug has a maker&apos;s mark. VESSEL-01 carries a cryptic ceramic firmware hash etched into the unglazed porcelain foot ring. Invert the vessel to inspect the base directly.
        </p>

        {/* Flip Action Button */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setToyFlipped(!toyFlipped)}
            data-cursor="pointer"
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-mono text-xs font-bold transition-all shadow-md active:scale-95 ${
              toyFlipped
                ? "bg-[#86D6AD] text-[#090D14] shadow-[0_0_20px_rgba(134,214,173,0.3)]"
                : "bg-[#8BE5FF] text-[#090D14] shadow-[0_0_20px_rgba(139,229,255,0.25)]"
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>{toyFlipped ? "RESTORE UPRIGHT POSE" : "INVERT 180° (REVEAL BASE)"}</span>
          </button>
        </div>

        {/* Manual Y-Rotation Slider */}
        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-[#2A3545] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#A5B0C0]">
            <span>MANUAL YAW ADJUSTMENT</span>
            <span className="text-[#8BE5FF]">
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
            className="w-full h-1.5 bg-[#090D14] rounded-lg appearance-none cursor-pointer accent-[#8BE5FF]"
          />
        </div>

        {/* Decode Gimmick Box */}
        <div
          className={`glass-card rounded-2xl p-5 border transition-all ${
            toyFlipped
              ? "border-[#86D6AD]/50 bg-[#111824]/90"
              : "border-[#2A3545] bg-[#090D14]/70"
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono pb-2 mb-2 border-b border-[#2A3545]">
            <span className="flex items-center gap-1.5 text-[#A5B0C0]">
              {toyFlipped ? (
                <Unlock className="w-3.5 h-3.5 text-[#86D6AD]" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-[#FF9100]" />
              )}
              <span>UNDERSIDE CIPHER STATUS:</span>
            </span>
            <span
              className={`font-bold ${
                toyFlipped ? "text-[#86D6AD]" : "text-[#FF9100]"
              }`}
            >
              {toyFlipped ? "DECRYPTED" : "LOCKED (INVERT TO DECODE)"}
            </span>
          </div>

          <div className="font-mono text-xs space-y-1">
            <p className="text-[#A5B0C0]/50 break-all">
              RAW HASH: 0x4C4154454E545F434552414D49435F32303236
            </p>
            <p
              className={`text-sm font-bold transition-all ${
                toyFlipped ? "text-[#86D6AD]" : "text-[#A5B0C0]/40 blur-xs"
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
