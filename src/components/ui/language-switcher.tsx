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
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl text-xs font-bold text-[#64748B] hover:text-[#0284C7] border-2 border-white bg-white shadow-[0_6px_14px_-2px_rgba(14,165,233,0.12),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(14,165,233,0.06)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.08)] transition-all focus:outline-none focus:ring-2 focus:ring-[#0284C7] hover:-translate-y-0.5"
    >
      <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
      <span className="font-mono uppercase font-bold">
        {targetLocale}
      </span>
    </Link>
  );
}
