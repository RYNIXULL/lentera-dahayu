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
        className="fixed inset-0 bg-[#1E293B]/40 backdrop-blur-md transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative w-full max-w-3xl clay-modal rounded-[36px] p-6 sm:p-8 border-[3px] border-white z-10 text-[#1E293B] shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0284C7]">
            <Play className="w-4 h-4 fill-current" />
            <span>SPECIFICATION REVEAL FILM // ARCHIVAL CUT</span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup pemutar video"
            className="p-2 rounded-2xl text-[#64748B] hover:text-[#0284C7] hover:bg-[#F0F9FF] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="mt-6 aspect-video rounded-[28px] clay-inset relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0284C7]">
            <span>TC 00:01:24:18</span>
            <span className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5" />
              <span>48kHz BINAURAL HUM</span>
            </span>
          </div>

          <div className="text-center space-y-3 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#0284C7] text-white flex items-center justify-center mx-auto shadow-[0_10px_20px_rgba(14,165,233,0.35),inset_2px_2px_4px_rgba(255,255,255,0.4)]">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
            <p className="text-lg font-bold text-[#1E293B]">
              &ldquo;We spent 4 years training an inference model to hold hot liquid without existential dread.&rdquo;
            </p>
            <p className="text-xs font-mono text-[#64748B]">
              FEATURING: Dr. H. Vance (Chief Ceramic Prompt Engineer)
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#059669]" />
              <span>100% UNEDITED SPEC FOOTAGE</span>
            </span>
            <span>VESSEL-01 LABORATORY ARCHIVES</span>
          </div>
        </div>
      </div>
    </div>
  );
}
