"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { useToast } from "@/lib/toast-context";

export function SectionFooterCTA() {
  const { success, error } = useToast();
  const [email, setEmail] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      error("Email Tidak Valid", "Mohon masukkan alamat email yang benar.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Brand Creative Partner",
          email: email.trim(),
          scope: "Creative 3D Product Storytelling",
          message: projectBrief || "Inquiring about award-winning WebGL product experiences.",
        }),
      });

      if (res.ok) {
        setSent(true);
        success("Kolaborasi Tercatat", "Kami akan menghubungi Anda untuk mendiskusikan visi brand Anda.");
      } else {
        error("Gagal Mengirim", "Terjadi kendala saat memproses permintaan.");
      }
    } catch {
      error("Gagal Mengirim", "Koneksi terganggu. Silakan coba kembali.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="sec-cta"
      className="min-h-screen relative flex flex-col justify-between px-4 sm:px-6 lg:px-12 py-24 border-t border-[#E2E8F0] select-none"
    >
      <div className="max-w-3xl mx-auto z-10 w-full text-center space-y-8 my-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge mx-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
          <span>REALITY CHECK // 14. THE PITCH</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
          We caught your attention with a made-up product.{" "}
          <span className="text-[#0284C7]">Imagine what we can do for your brand.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#64748B] max-w-xl mx-auto leading-relaxed">
          High-performance 3D WebGL, tactile storytelling, and silky smooth interactions turn ordinary products into unforgettable digital experiences.
        </p>

        {/* Consultation Form */}
        <div className="max-w-md mx-auto clay-card rounded-3xl p-6 sm:p-8 border border-[#E2E8F0]">
          {sent ? (
            <div className="py-6 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#059669] mx-auto" />
              <h3 className="text-lg font-bold text-[#1E293B]">Pesan Terkirim</h3>
              <p className="text-xs text-[#64748B]">
                Tim kami siap berkolaborasi untuk mewujudkan storytelling 3D spektakuler berikutnya.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-mono text-[#64748B] uppercase font-bold mb-1">
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@yourbrand.com"
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFFDFB] border border-[#E2E8F0] text-sm text-[#1E293B] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.03),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#64748B] uppercase font-bold mb-1">
                  PROJECT / PRODUCT VISION (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  placeholder="Tell us about the product you want to elevate..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFFDFB] border border-[#E2E8F0] text-sm text-[#1E293B] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.03),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] transition-all font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-cursor="pointer"
                className="clay-btn-primary w-full py-4 font-mono font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <span>START A 3D PROJECT</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Fictional Disclaimer */}
        <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] text-xs font-mono text-[#64748B] max-w-xl mx-auto shadow-xs">
          <p>
            <strong>LEGAL & CREATIVE DISCLAIMER:</strong> VESSEL-01 is a fictional satirical demonstration piece created to showcase state-of-the-art scroll-driven 3D WebGL engineering. No ceramic cups were harmed in the making of this website.
          </p>
        </div>
      </div>

      {/* Footer Bar */}
      <footer className="pt-12 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]/80 z-10 max-w-7xl mx-auto w-full">
        <p>© 2026 VESSEL-01 / CREATIVE 3D STORYTELLING ARCHITECTURE</p>
        <p>BUILT WITH THREE.JS • R3F • GSAP • LENIS • NEXT.JS</p>
      </footer>
    </section>
  );
}
