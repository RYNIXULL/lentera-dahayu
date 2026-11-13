import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale, Dictionary } from "@/types/i18n";

interface SiteFooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function SiteFooter({ locale, dict }: SiteFooterProps) {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#E2E8F0] bg-white text-[#64748B] relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#38BDF8]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-[#E2E8F0]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white border-2 border-white flex items-center justify-center p-1.5 shadow-[0_6px_14px_-2px_rgba(14,165,233,0.16),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(14,165,233,0.06)]">
                <Image
                  src="/logo.svg"
                  alt="R21F"
                  width={32}
                  height={26}
                  style={{ width: "auto", height: "auto" }}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-lg text-[#1E293B] uppercase tracking-wider">
                {dict.common.brandName}
              </span>
            </div>
            <p className="text-sm text-[#64748B] max-w-md leading-relaxed">
              {dict.about.description}
            </p>
            <div className="pt-1">
              <span className="clay-badge text-[#0284C7] font-bold">
                {dict.common.brandDomain}
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#1E293B] font-bold mb-4">
              Navigasi
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="hover:text-[#0284C7] transition-colors"
                >
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="hover:text-[#0284C7] transition-colors"
                >
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/capabilities`}
                  className="hover:text-[#0284C7] transition-colors"
                >
                  {dict.nav.capabilities}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="hover:text-[#0284C7] transition-colors"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="hover:text-[#0284C7] transition-colors"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Privacy Column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#1E293B] font-bold mb-4">
              Legalitas & Etika
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="hover:text-[#0284C7] transition-colors"
                >
                  {dict.common.privacy}
                </Link>
              </li>
              <li className="text-xs text-[#64748B]/80 pt-2 leading-relaxed">
                Platform dibangun dengan prinsip zero credential leak, WCAG 2.2 AA accessibility, dan WebGL graceful fallback.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            © {currentYear} {dict.common.brandName}. {dict.common.allRightsReserved}
          </p>
          <p className="font-mono text-[11px] text-[#64748B]/80">
            {dict.common.brandTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
