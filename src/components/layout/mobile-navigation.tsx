"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, Dictionary } from "@/types/i18n";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
  currentLocale: Locale;
  dict: Dictionary;
}

export function MobileNavigation({
  isOpen,
  onClose,
  links,
  currentLocale,
  dict,
}: MobileNavigationProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigasi Seluler"
      className="fixed inset-0 top-20 z-40 md:hidden bg-[#F0F5FA]/95 backdrop-blur-xl border-t border-[#E2E8F0] p-6 flex flex-col justify-between overflow-y-auto animate-slide-up shadow-2xl"
    >
      <nav className="flex flex-col gap-2.5 pt-2">
        {links.map((link) => {
          const active =
            link.href === `/${currentLocale}`
              ? pathname === link.href
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between p-4 rounded-2xl text-base transition-all ${
                active
                  ? "bg-white text-[#0284C7] border-2 border-white font-bold shadow-[0_8px_18px_rgba(14,165,233,0.16),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(14,165,233,0.06)]"
                  : "text-[#64748B] hover:text-[#1E293B] hover:bg-white/80 font-semibold"
              }`}
            >
              <span>{link.label}</span>
              {active && <span className="w-3 h-3 rounded-full bg-[#0284C7] shadow-[0_0_10px_#38BDF8]" />}
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-[#E2E8F0] mt-6 flex flex-col gap-3">
        <Button
          variant="primary"
          size="lg"
          href={`/${currentLocale}/contact`}
          onClick={onClose}
          className="w-full justify-between"
        >
          <span>{dict.common.discussProject}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
