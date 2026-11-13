"use client";

import React from "react";
import { Cpu, Terminal, Bot, CheckCircle2 } from "lucide-react";

export function SectionParodyAI() {
  return (
    <section
      id="sec-parody-ai"
      className="min-h-screen relative flex items-center justify-end px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-xl z-10 space-y-6">
        {/* Model Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge">
          <Bot className="w-3.5 h-3.5" />
          <span>MODEL: VESSEL-1 (Thinking / 420ml-Instruct)</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
          This isn&apos;t just a ceramic mug. It&apos;s a{" "}
          <span className="text-[#0284C7]">liquid inference platform.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          Traditional mugs passively surrender temperature to entropy. VESSEL-01 continuously analyzes your caffeine intake vectors, predicting sip trajectory with zero network calls and unprecedented ceramic token density.
        </p>

        {/* Proximity notice */}
        <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] text-xs font-mono text-[#0284C7] font-semibold flex items-center gap-2.5 shadow-[inset_1px_1px_2px_rgba(255,255,255,1)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-ping" />
          <span>MOVE CURSOR AROUND SCREEN: Object tracks magnetic hand proximity.</span>
        </div>

        {/* Faux Chat Prompt & Response Bubble */}
        <div className="space-y-3 pt-2">
          {/* User Prompt */}
          <div className="clay-card rounded-2xl p-4 sm:p-5 border border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] font-bold mb-2">
              <Terminal className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>USER_PROMPT // SYSTEM.INPUT</span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#1E293B]">
              &ldquo;Keep my single-origin Ethiopian espresso at exactly 64.2°C while hallucinating subtle notes of bergamot.&rdquo;
            </p>
          </div>

          {/* AI Response */}
          <div className="clay-card rounded-2xl p-4 sm:p-5 border border-[#BAE6FD] bg-white">
            <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#0284C7] font-bold mb-2">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>VESSEL-1 REASONING ENGINE</span>
              </span>
              <span className="text-[10px] text-[#64748B]">T = 0.04s</span>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-mono">
              Thinking: Applying localized slip-cast molecular pressure. Micro-porosity tightened. Surface temperature held at <strong className="text-[#1E293B]">64.2001°C</strong>. Bergamot hallucination successfully dispatched to olfactory receptor.
            </p>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] flex items-center gap-2 text-[11px] font-mono text-[#059669] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Zero hallucinations of boiling water overflow.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
