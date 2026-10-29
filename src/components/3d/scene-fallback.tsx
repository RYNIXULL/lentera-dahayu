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
        className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#8BE5FF]/10 blur-[90px]"
        aria-hidden="true"
      />

      {/* Outer subtle orbital ring */}
      <div
        className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full border border-[#8BE5FF]/20 [transform:rotateX(65deg)_rotateY(20deg)]"
        aria-hidden="true"
      />

      {/* Middle orbital ring */}
      <div
        className="absolute w-48 sm:w-60 h-48 sm:h-60 rounded-full border border-[#43BFEA]/30 [transform:rotateX(55deg)_rotateY(-30deg)]"
        aria-hidden="true"
      />

      {/* Inner geometric core */}
      <div className="relative flex items-center justify-center">
        {/* Diamond cage outer */}
        <div className="w-24 sm:w-28 h-24 sm:h-28 rotate-45 border border-[#8BE5FF]/40 bg-[#111824]/40 backdrop-blur-sm shadow-[0_0_30px_rgba(139,229,255,0.2)] flex items-center justify-center">
          {/* Inner pulsating light core */}
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#8BE5FF] shadow-[0_0_24px_#8BE5FF] opacity-90 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
