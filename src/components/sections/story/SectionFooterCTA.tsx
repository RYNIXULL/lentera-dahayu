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
      className="min-h-screen relative flex flex-col justify-between px-4 sm:px-6 lg:px-12 py-24 border-t border-[#2A3545]/60 select-none"
    >
      <div className="max-w-3xl mx-auto z-10 w-full text-center space-y-8 my-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8BE5FF] glass-badge mx-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-[#86D6AD]" />
          <span>REALITY CHECK // 14. THE PITCH</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
          We caught your attention with a made-up product.{" "}
          <span className="text-[#8BE5FF]">Imagine what we can do for your brand.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#A5B0C0] max-w-xl mx-auto leading-relaxed">
          High-performance 3D WebGL, tactile storytelling, and silky smooth interactions turn ordinary products into unforgettable digital experiences.
        </p>

        {/* Consultation Form */}
        <div className="max-w-md mx-auto glass-card rounded-2xl p-6 border border-[#2A3545]">
          {sent ? (
            <div className="py-6 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#86D6AD] mx-auto" />
              <h3 className="text-lg font-bold text-[#F3F6FA]">Pesan Terkirim</h3>
              <p className="text-xs text-[#A5B0C0]">
                Tim kami siap berkolaborasi untuk mewujudkan storytelling 3D spektakuler berikutnya.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-mono text-[#A5B0C0] uppercase mb-1">
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@yourbrand.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090D14]/80 border border-[#2A3545] text-sm text-[#F3F6FA] focus:outline-none focus:border-[#8BE5FF] transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A5B0C0] uppercase mb-1">
                  PROJECT / PRODUCT VISION (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  placeholder="Tell us about the product you want to elevate..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090D14]/80 border border-[#2A3545] text-sm text-[#F3F6FA] focus:outline-none focus:border-[#8BE5FF] transition-all font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-cursor="pointer"
                className="w-full py-3.5 rounded-xl bg-[#8BE5FF] text-[#090D14] font-mono font-bold text-sm hover:bg-[#43BFEA] transition-all flex items-center justify-center gap-2"
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
        <div className="p-4 rounded-xl bg-[#111824]/40 border border-[#2A3545] text-xs font-mono text-[#A5B0C0]/70 max-w-xl mx-auto">
          <p>
            <strong>LEGAL & CREATIVE DISCLAIMER:</strong> VESSEL-01 is a fictional satirical demonstration piece created to showcase state-of-the-art scroll-driven 3D WebGL engineering. No ceramic cups were harmed in the making of this website.
          </p>
        </div>
      </div>

      {/* Footer Bar */}
      <footer className="pt-12 border-t border-[#2A3545]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A5B0C0]/60 z-10 max-w-7xl mx-auto w-full">
        <p>© 2026 VESSEL-01 / CREATIVE 3D STORYTELLING ARCHITECTURE</p>
        <p>BUILT WITH THREE.JS • R3F • GSAP • LENIS • NEXT.JS</p>
      </footer>
    </section>
  );
}
