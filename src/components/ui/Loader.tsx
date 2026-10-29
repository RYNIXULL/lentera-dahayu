"use client";

import React, { useEffect, useState } from "react";
import { useStoryStore } from "@/store/useStoryStore";
import { Cpu } from "lucide-react";

export function Loader() {
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState("Initializing neural ceramic shaders...");
  const isLoaded = useStoryStore((s) => s.isLoaded);
  const setIsLoaded = useStoryStore((s) => s.setIsLoaded);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        setStatusText("VESSEL-01 online. Ready for thermal inference.");
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 500);
      } else {
        setPercent(current);
        if (current > 30 && current < 65) {
          setStatusText("Compiling slip-cast wall thickness matrices...");
        } else if (current >= 65) {
          setStatusText("Calibrating 37.9% circularity coefficient...");
        }
      }
    }, 45);

    return () => clearInterval(interval);
  }, [setIsLoaded]);

  if (isLoaded) return null;

  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed inset-0 z-50 bg-[#090D14] flex flex-col items-center justify-center p-6 text-[#F3F6FA] select-none"
    >
      <div className="w-full max-w-sm space-y-6 text-center">
        {/* Animated Icon Core */}
        <div className="w-16 h-16 rounded-2xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(139,229,255,0.15)]">
          <Cpu className="w-8 h-8 animate-pulse" />
        </div>

        {/* Counter */}
        <div>
          <div className="text-6xl sm:text-7xl font-mono font-bold tracking-tight text-[#8BE5FF]">
            {percent}%
          </div>
          <p className="mt-2 text-xs font-mono tracking-widest uppercase text-[#A5B0C0]">
            {statusText}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-[#172232] overflow-hidden border border-[#2A3545]">
          <div
            className="h-full bg-gradient-to-r from-[#8BE5FF] to-[#43BFEA] transition-all duration-75"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="text-[11px] font-mono text-[#A5B0C0]/50 uppercase tracking-widest">
          VESSEL-01 // ARCHITECTURAL REVEAL
        </p>
      </div>
    </div>
  );
}
