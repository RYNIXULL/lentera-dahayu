import React from "react";
import Link from "next/link";
import { Locale, Dictionary } from "@/types/i18n";

interface SiteFooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function SiteFooter({ locale, dict }: SiteFooterProps) {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#2A3545] bg-[#090D14] text-[#A5B0C0] relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#8BE5FF]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-[#2A3545]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#172232] border border-[#2A3545] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#8BE5FF]" />
              </div>
              <span className="font-bold text-lg text-[#F3F6FA] uppercase tracking-wider">
                {dict.common.brandName}
              </span>
            </div>
            <p className="text-sm text-[#A5B0C0] max-w-md leading-relaxed">
              {dict.about.description}
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono text-[#8BE5FF] bg-[#111824] border border-[#2A3545]">
                {dict.common.brandDomain}
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#F3F6FA] mb-4">
              Navigasi
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="hover:text-[#F3F6FA] transition-colors"
                >
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="hover:text-[#F3F6FA] transition-colors"
                >
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/capabilities`}
                  className="hover:text-[#F3F6FA] transition-colors"
                >
                  {dict.nav.capabilities}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="hover:text-[#F3F6FA] transition-colors"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="hover:text-[#F3F6FA] transition-colors"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Privacy Column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#F3F6FA] mb-4">
              Legalitas & Etika
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="hover:text-[#F3F6FA] transition-colors"
                >
                  {dict.common.privacy}
                </Link>
              </li>
              <li className="text-xs text-[#A5B0C0]/70 pt-2 leading-relaxed">
                Platform dibangun dengan prinsip zero credential leak, WCAG 2.2 AA accessibility, dan WebGL graceful fallback.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5B0C0]">
          <p>
            © {currentYear} {dict.common.brandName}. {dict.common.allRightsReserved}
          </p>
          <p className="font-mono text-[11px] text-[#A5B0C0]/70">
            {dict.common.brandTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
