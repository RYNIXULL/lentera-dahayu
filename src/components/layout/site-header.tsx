"use client";

import React, { useState } from "react";
import Link from "next/link";
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
      <header className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C1F1FF] rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-[#172232] border border-[#2A3545] group-hover:border-[#8BE5FF]/50 flex items-center justify-center transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8BE5FF] shadow-[0_0_10px_#8BE5FF] transition-transform group-hover:scale-125" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-sm sm:text-base text-[#F3F6FA] uppercase">
                {dict.common.brandName}
              </span>
              <span className="text-[10px] tracking-widest text-[#A5B0C0] uppercase font-mono hidden sm:inline-block">
                Software Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#111824]/50 border border-white/5 backdrop-blur-sm"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    active
                      ? "bg-[#8BE5FF]/15 text-[#8BE5FF] font-semibold border border-[#8BE5FF]/30"
                      : "text-[#A5B0C0] hover:text-[#F3F6FA] hover:bg-white/5 border border-transparent"
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
                className="font-medium"
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
              className="md:hidden p-2 rounded-lg text-[#A5B0C0] hover:text-[#F3F6FA] hover:bg-[#172232] border border-[#2A3545] focus:outline-none focus:ring-2 focus:ring-[#8BE5FF]"
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
