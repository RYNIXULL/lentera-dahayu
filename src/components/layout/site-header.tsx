"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Locale, Dictionary } from "@/types/i18n";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "./mobile-navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface SiteHeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/story`, label: "VESSEL-01 (3D Story)" },
    { href: `/${locale}/capabilities`, label: dict.nav.capabilities },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 clay-nav transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#0284C7] rounded-2xl p-1"
          >
            <div className="w-10 h-10 rounded-2xl bg-white border-2 border-white group-hover:border-[#38BDF8]/60 flex items-center justify-center p-1.5 transition-all shadow-[0_8px_18px_-2px_rgba(14,165,233,0.16),-3px_-3px_8px_rgba(255,255,255,1),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(14,165,233,0.06)]">
              <Image
                src="/logo.svg"
                alt="R21F"
                width={32}
                height={26}
                style={{ width: "auto", height: "auto" }}
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-sm sm:text-base text-[#1E293B] uppercase">
                {dict.common.brandName}
              </span>
              <span className="text-[10px] tracking-widest text-[#64748B] uppercase font-mono font-bold hidden sm:inline-block">
                Software Developer Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3.5 py-2 rounded-full bg-white/90 border-2 border-white shadow-[0_12px_24px_-4px_rgba(14,165,233,0.1),-4px_-4px_14px_rgba(255,255,255,1),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(14,165,233,0.04)] backdrop-blur-md"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs transition-all ${
                    active
                      ? "bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-white font-bold shadow-[0_8px_16px_rgba(14,165,233,0.36),inset_2px_2px_4px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(3,105,161,0.35)] border border-white/50"
                      : "text-[#64748B] hover:text-[#0284C7] hover:bg-[#F0F9FF] font-bold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher currentLocale={locale} />

            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                href={`/${locale}/contact`}
                className="font-semibold"
              >
                <span>{dict.common.discussProject}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-xl text-[#64748B] hover:text-[#0284C7] hover:bg-white bg-white/80 border border-[#E2E8F0] shadow-[0_4px_8px_-2px_rgba(14,165,233,0.06),inset_1px_1px_2px_rgba(255,255,255,1)] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        currentLocale={locale}
        dict={dict}
      />
    </>
  );
}
