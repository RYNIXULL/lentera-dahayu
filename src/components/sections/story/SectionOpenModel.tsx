"use client";

import React, { useState } from "react";
import { FileText, Download, Code2, Copy, Check, BookOpen } from "lucide-react";
import { useToast } from "@/lib/toast-context";

export function SectionOpenModel() {
  const [copied, setCopied] = useState(false);
  const { success } = useToast();

  const bibtexCode = `@article{vance2026vessel,
  title   = {VESSEL-01: Autonomous Beverage Inference via Dense Slip-Cast Feldspar},
  author  = {Vance, H. and Pendelton, A. and Rostova, E.},
  journal = {Journal of Post-Irony Ceramic Computing},
  volume  = {42},
  number  = {1},
  pages   = {1--18},
  year    = {2026},
  publisher = {Monolith Press}
}`;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(bibtexCode);
    setCopied(true);
    success("BibTeX Disalin", "Kutipan sitasi akademik telah disalin ke clipboard.");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="sec-open-model"
      className="min-h-screen relative flex items-center justify-end px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-2xl z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8BE5FF] glass-badge">
          <BookOpen className="w-3.5 h-3.5" />
          <span>OPEN WEIGHTS // 13. RESEARCH RELEASE & BIBTEX</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
          Open access ceramic research.{" "}
          <span className="text-[#8BE5FF]">Inspect our math.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
          We believe in open science. We are making our complete slip-cast CAD topologies, thermal loss shaders, and peer review logs open under the Apache-Porcelain 2.0 license.
        </p>

        {/* Download Links Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-[#111824]/80 border border-[#2A3545] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8BE5FF]">
              <FileText className="w-4 h-4" />
              <span>PAPER (PDF)</span>
            </div>
            <p className="text-xs text-[#A5B0C0]">18-page peer-reviewed specification document.</p>
            <span className="inline-block text-[11px] font-mono text-[#86D6AD]">v1.0.4 [4.2 MB]</span>
          </div>

          <div className="p-4 rounded-xl bg-[#111824]/80 border border-[#2A3545] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8BE5FF]">
              <Download className="w-4 h-4" />
              <span>WEIGHTS (.GLB)</span>
            </div>
            <p className="text-xs text-[#A5B0C0]">Draco-compressed parametric 3D mesh.</p>
            <span className="inline-block text-[11px] font-mono text-[#86D6AD]">KTX2 Textures [1.8 MB]</span>
          </div>

          <div className="p-4 rounded-xl bg-[#111824]/80 border border-[#2A3545] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8BE5FF]">
              <Code2 className="w-4 h-4" />
              <span>SHADERS (GLSL)</span>
            </div>
            <p className="text-xs text-[#A5B0C0]">Complete vertex and fragment thermal code.</p>
            <span className="inline-block text-[11px] font-mono text-[#86D6AD]">GitHub Gist [8 KB]</span>
          </div>
        </div>

        {/* BibTeX Block */}
        <div className="glass-card rounded-2xl p-5 border border-[#2A3545] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#2A3545]">
            <span className="text-xs font-mono text-[#A5B0C0]">CITATION / BIBTEX</span>
            <button
              type="button"
              onClick={handleCopyBibtex}
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-[#8BE5FF] hover:bg-[#172232] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#86D6AD]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "COPIED" : "COPY BIBTEX"}</span>
            </button>
          </div>

          <pre className="text-[11px] font-mono text-[#A5B0C0] overflow-x-auto p-2 bg-[#090D14]/70 rounded-lg leading-relaxed">
            {bibtexCode}
          </pre>
        </div>
      </div>
    </section>
  );
}
