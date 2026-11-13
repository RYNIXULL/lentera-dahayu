import React from "react";
import { Locale, Dictionary } from "@/types/i18n";
import { Button } from "@/components/ui/button";
import { R21FHeroLogo } from "@/components/ui/r21f-hero-logo";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { ArrowRight, Compass } from "lucide-react";

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background depth radial lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Editorial Content Column */}
          <div className="lg:col-span-7 z-10 space-y-6 sm:space-y-8 text-left">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full clay-badge text-xs font-mono font-bold text-[#0284C7] border-2 border-white shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-pulse shadow-[0_0_10px_#38BDF8]" />
              <span>{dict.hero.badge}</span>
            </div>

            {/* Editorial Headline with Typewriter Effect */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1E293B] leading-[1.08] min-h-[3.3em] text-balance"
            >
              <TypewriterText text={dict.hero.headline} />
            </h1>

            {/* Subheadline & Descriptor */}
            <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl leading-relaxed font-normal">
              {dict.hero.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#kontak"
              >
                <span>{dict.hero.ctaContact}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button variant="secondary" size="lg" href="#layanan">
                <span>{dict.hero.ctaCatalog}</span>
              </Button>
            </div>

            {/* Micro descriptor metadata */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#64748B]">
              <span className="flex items-center gap-1.5 font-semibold text-[#0284C7]">
                <Compass className="w-3.5 h-3.5" />
                {dict.common.brandDomain}
              </span>
              <span className="hidden sm:inline-block text-[#E2E8F0]">•</span>
              <span className="hidden sm:inline-block">
                {dict.common.brandTagline}
              </span>
            </div>
          </div>

          {/* Standalone Flowing 3D Vector Logo */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6 lg:py-0">
            <R21FHeroLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
