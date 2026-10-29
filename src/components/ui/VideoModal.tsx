"use client";

import React, { useEffect } from "react";
import { useStoryStore } from "@/store/useStoryStore";
import { X, Play, Volume2, Shield } from "lucide-react";

export function VideoModal() {
  const isOpen = useStoryStore((s) => s.videoModalOpen);
  const setIsOpen = useStoryStore((s) => s.setVideoModalOpen);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="VESSEL-01 Spec Film"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="fixed inset-0 bg-[#090D14]/85 backdrop-blur-xl transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative w-full max-w-3xl glass-modal rounded-3xl p-6 sm:p-8 border border-white/10 z-10 text-[#F3F6FA] shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2A3545]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8BE5FF]">
            <Play className="w-4 h-4 fill-current" />
            <span>SPECIFICATION REVEAL FILM // ARCHIVAL CUT</span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup pemutar video"
            className="p-1.5 rounded-lg text-[#A5B0C0] hover:text-[#F3F6FA] hover:bg-[#172232] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="mt-6 aspect-video rounded-2xl bg-gradient-to-br from-[#111824] via-[#172232] to-[#090D14] border border-[#2A3545] relative overflow-hidden flex flex-col justify-between p-6">
          <div className="flex items-center justify-between text-xs font-mono text-[#8BE5FF]/80">
            <span>TC 00:01:24:18</span>
            <span className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5" />
              <span>48kHz BINAURAL HUM</span>
            </span>
          </div>

          <div className="text-center space-y-3 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#8BE5FF]/10 border border-[#8BE5FF]/40 text-[#8BE5FF] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(139,229,255,0.2)]">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
            <p className="text-lg font-bold text-[#F3F6FA]">
              &ldquo;We spent 4 years training an inference model to hold hot liquid without existential dread.&rdquo;
            </p>
            <p className="text-xs font-mono text-[#A5B0C0]">
              FEATURING: Dr. H. Vance (Chief Ceramic Prompt Engineer)
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#A5B0C0]/60">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#86D6AD]" />
              <span>100% UNEDITED SPEC FOOTAGE</span>
            </span>
            <span>VESSEL-01 LABORATORY ARCHIVES</span>
          </div>
        </div>
      </div>
    </div>
  );
}
