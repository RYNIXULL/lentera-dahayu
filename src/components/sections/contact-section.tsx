"use client";

import React, { useState } from "react";
import { Dictionary } from "@/types/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/lib/toast-context";
import { Send, CheckCircle2, ShieldCheck, Info } from "lucide-react";

interface ContactSectionProps {
  dict: Dictionary;
}

export function ContactSection({ dict }: ContactSectionProps) {
  const { success, error } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "Web Application Engineering",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scopeOptions = [
    "Web Application Engineering",
    "System Integration & Backend APIs",
    "Technical Prototyping & Architecture",
    "General Architectural Consultation",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      error("Validasi Gagal", "Mohon isi nama lengkap Anda.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      error("Validasi Gagal", "Mohon masukkan alamat email yang valid.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      error(
        "Validasi Gagal",
        "Mohon berikan ringkasan kebutuhan atau pertanyaan minimal 10 karakter."
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        success("Permintaan Terkirim", dict.contact.successMessage);
      } else {
        error("Gagal Mengirim", data.error || dict.contact.errorMessage);
      }
    } catch {
      error("Gagal Mengirim", dict.contact.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 border-t border-[#2A3545]/60 relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dict.contact.eyebrow}
          title={dict.contact.title}
          description={dict.contact.description}
          align="center"
        />

        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-[#2A3545]">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-slide-up">
              <div className="w-14 h-14 rounded-2xl bg-[#86D6AD]/15 border border-[#86D6AD]/30 text-[#86D6AD] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#F3F6FA]">
                Permintaan Diterima
              </h3>
              <p className="text-sm text-[#A5B0C0] leading-relaxed max-w-md mx-auto">
                {dict.contact.successMessage}
              </p>
              <div className="pt-4">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      scope: scopeOptions[0],
                      message: "",
                    });
                  }}
                >
                  Kirim Pesan Lain
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Description */}
              <div className="pb-2 border-b border-[#2A3545]">
                <h3 className="text-lg font-bold text-[#F3F6FA]">
                  {dict.contact.formTitle}
                </h3>
                <p className="text-xs text-[#A5B0C0] mt-1">
                  {dict.contact.formDesc}
                </p>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A5B0C0] mb-2"
                >
                  {dict.contact.nameLabel} <span className="text-[#8BE5FF]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Nama atau institusi Anda"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090D14]/70 border border-[#2A3545] text-sm text-[#F3F6FA] placeholder-[#A5B0C0]/50 focus:outline-none focus:border-[#8BE5FF] focus:ring-1 focus:ring-[#8BE5FF] transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A5B0C0] mb-2"
                >
                  {dict.contact.emailLabel} <span className="text-[#8BE5FF]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@organization.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090D14]/70 border border-[#2A3545] text-sm text-[#F3F6FA] placeholder-[#A5B0C0]/50 focus:outline-none focus:border-[#8BE5FF] focus:ring-1 focus:ring-[#8BE5FF] transition-all"
                />
              </div>

              {/* Project Scope */}
              <div>
                <label
                  htmlFor="contact-scope"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A5B0C0] mb-2"
                >
                  {dict.contact.scopeLabel}
                </label>
                <select
                  id="contact-scope"
                  value={formData.scope}
                  onChange={(e) =>
                    setFormData({ ...formData, scope: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090D14]/70 border border-[#2A3545] text-sm text-[#F3F6FA] focus:outline-none focus:border-[#8BE5FF] focus:ring-1 focus:ring-[#8BE5FF] transition-all"
                >
                  {scopeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A5B0C0] mb-2"
                >
                  {dict.contact.messageLabel}{" "}
                  <span className="text-[#8BE5FF]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Jelaskan gambaran sistem, batasan teknis, atau target produk yang ingin Anda diskusikan..."
                  className="w-full px-4 py-3 rounded-xl bg-[#090D14]/70 border border-[#2A3545] text-sm text-[#F3F6FA] placeholder-[#A5B0C0]/50 focus:outline-none focus:border-[#8BE5FF] focus:ring-1 focus:ring-[#8BE5FF] transition-all resize-y"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2 text-xs text-[#A5B0C0]/80">
                <ShieldCheck className="w-4 h-4 text-[#86D6AD] shrink-0 mt-0.5" />
                <span>{dict.contact.privacyNotice}</span>
              </div>

              {/* Channel Status Info */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-[#172232]/50 border border-[#2A3545] text-xs text-[#A5B0C0]">
                <Info className="w-4 h-4 text-[#8BE5FF] shrink-0 mt-0.5" />
                <span>
                  {dict.contact.channelStatusPending} Formulir ini aktif dan langsung masuk ke antrean triage rekayasa teknis kami.
                </span>
              </div>

              {/* Submit Button */}
              <Button
                variant="primary"
                size="lg"
                type="submit"
                disabled={loading}
                className="w-full justify-center"
              >
                {loading ? (
                  <span>{dict.contact.submitting}</span>
                ) : (
                  <>
                    <span>{dict.contact.submitButton}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
