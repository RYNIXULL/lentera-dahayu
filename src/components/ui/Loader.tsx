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
      className="fixed inset-0 z-50 bg-[#F0F5FA] flex flex-col items-center justify-center p-6 text-[#1E293B] select-none"
    >
      <div className="w-full max-w-sm space-y-6 text-center">
        {/* Animated Icon Core */}
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#BAE6FD] text-[#0284C7] flex items-center justify-center mx-auto shadow-[0_12px_24px_rgba(14,165,233,0.15),inset_2px_2px_4px_rgba(255,255,255,1)]">
          <Cpu className="w-8 h-8 animate-pulse" />
        </div>

        {/* Counter */}
        <div>
          <div className="text-6xl sm:text-7xl font-mono font-bold tracking-tight text-[#0284C7]">
            {percent}%
          </div>
          <p className="mt-2 text-xs font-mono tracking-widest uppercase text-[#64748B]">
            {statusText}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-white overflow-hidden border border-[#E2E8F0] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.06)]">
          <div
            className="h-full bg-gradient-to-r from-[#38BDF8] to-[#0284C7] transition-all duration-75 rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="text-[11px] font-mono text-[#64748B]/60 uppercase tracking-widest">
          VESSEL-01 // ARCHITECTURAL REVEAL
        </p>
      </div>
    </div>
  );
}
