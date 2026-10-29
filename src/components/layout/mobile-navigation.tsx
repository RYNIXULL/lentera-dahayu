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
      className="fixed inset-0 top-20 z-40 md:hidden bg-[#090D14]/95 backdrop-blur-xl border-t border-[#2A3545] p-6 flex flex-col justify-between overflow-y-auto animate-slide-up"
    >
      <nav className="flex flex-col gap-2 pt-2">
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
              className={`flex items-center justify-between p-3.5 rounded-xl text-base font-medium transition-all ${
                active
                  ? "bg-[#172232] text-[#8BE5FF] border border-[#8BE5FF]/30 font-semibold"
                  : "text-[#A5B0C0] hover:text-[#F3F6FA] hover:bg-[#111824]"
              }`}
            >
              <span>{link.label}</span>
              {active && <span className="w-2 h-2 rounded-full bg-[#8BE5FF]" />}
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-[#2A3545] mt-6 flex flex-col gap-3">
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
