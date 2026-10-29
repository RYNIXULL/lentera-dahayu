"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "@/types/i18n";
import { switchLocalePath } from "@/lib/i18n";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale: Locale = currentLocale === "id" ? "en" : "id";
  const targetHref = switchLocalePath(pathname, targetLocale);

  return (
    <Link
      href={targetHref}
      aria-label={`Ganti bahasa ke ${targetLocale === "en" ? "English" : "Bahasa Indonesia"}`}
      className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#A5B0C0] hover:text-[#F3F6FA] border border-[#2A3545] hover:border-[#8BE5FF]/40 bg-[#111824]/60 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C1F1FF]"
    >
      <Globe className="w-3.5 h-3.5 text-[#8BE5FF]" />
      <span className="font-mono uppercase font-semibold">
        {targetLocale}
      </span>
    </Link>
  );
}
