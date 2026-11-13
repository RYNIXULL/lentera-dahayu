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
      className="py-20 md:py-28 border-t border-[#E2E8F0] relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dict.contact.eyebrow}
          title={dict.contact.title}
          description={dict.contact.description}
          align="center"
        />

        <div className="max-w-2xl mx-auto clay-card rounded-[36px] p-6 sm:p-10 border-[2.5px] border-white">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-slide-up">
              <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] border-2 border-white text-[#059669] flex items-center justify-center mx-auto shadow-[0_8px_20px_rgba(16,185,129,0.18),inset_2px_2px_4px_#FFFFFF]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B]">
                Permintaan Diterima
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed max-w-md mx-auto">
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
              <div className="pb-3 border-b border-[#E2E8F0]">
                <h3 className="text-lg font-bold text-[#1E293B]">
                  {dict.contact.formTitle}
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  {dict.contact.formDesc}
                </p>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold mb-2"
                >
                  {dict.contact.nameLabel} <span className="text-[#0284C7]">*</span>
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
                  className="w-full px-4 py-3.5 rounded-2xl clay-inset text-sm text-[#1E293B] placeholder-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/40 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold mb-2"
                >
                  {dict.contact.emailLabel} <span className="text-[#0284C7]">*</span>
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
                  className="w-full px-4 py-3.5 rounded-2xl clay-inset text-sm text-[#1E293B] placeholder-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/40 transition-all"
                />
              </div>

              {/* Project Scope */}
              <div>
                <label
                  htmlFor="contact-scope"
                  className="block text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold mb-2"
                >
                  {dict.contact.scopeLabel}
                </label>
                <select
                  id="contact-scope"
                  value={formData.scope}
                  onChange={(e) =>
                    setFormData({ ...formData, scope: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-2xl clay-inset text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/40 transition-all cursor-pointer"
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
                  className="block text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold mb-2"
                >
                  {dict.contact.messageLabel}{" "}
                  <span className="text-[#0284C7]">*</span>
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
                  className="w-full px-4 py-3.5 rounded-2xl clay-inset text-sm text-[#1E293B] placeholder-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/40 transition-all resize-y"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2 text-xs text-[#64748B]">
                <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>{dict.contact.privacyNotice}</span>
              </div>

              {/* Channel Status Info */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] border-2 border-white text-xs text-[#64748B] shadow-[inset_2px_2px_4px_#FFFFFF,0_4px_12px_rgba(14,165,233,0.08)]">
                <Info className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
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
