import React from "react";

interface SceneFallbackProps {
  className?: string;
}

export function SceneFallback({ className = "" }: SceneFallbackProps) {
  return (
    <div
      role="img"
      aria-label="Light Engine geometric core illustration"
      className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none overflow-hidden ${className}`}
    >
      {/* Background radial gradient glow */}
      <div
        className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#0284C7]/10 blur-[90px]"
        aria-hidden="true"
      />

      {/* Outer subtle orbital ring */}
      <div
        className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full border border-[#0284C7]/25 [transform:rotateX(65deg)_rotateY(20deg)]"
        aria-hidden="true"
      />

      {/* Middle orbital ring */}
      <div
        className="absolute w-48 sm:w-60 h-48 sm:h-60 rounded-full border border-[#38BDF8]/30 [transform:rotateX(55deg)_rotateY(-30deg)]"
        aria-hidden="true"
      />

      {/* Inner geometric core */}
      <div className="relative flex items-center justify-center">
        {/* Diamond cage outer */}
        <div className="w-24 sm:w-28 h-24 sm:h-28 rotate-45 border-2 border-[#0284C7]/40 bg-white shadow-[0_12px_28px_rgba(14,165,233,0.2),inset_2px_2px_4px_rgba(255,255,255,1)] rounded-2xl flex items-center justify-center">
          {/* Inner pulsating light core */}
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] shadow-[0_0_24px_#38BDF8] opacity-90 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
