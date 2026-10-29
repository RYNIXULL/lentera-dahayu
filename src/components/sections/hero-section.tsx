import React from "react";
import { Locale, Dictionary } from "@/types/i18n";
import { Button } from "@/components/ui/button";
import { HeroSceneLoader } from "@/components/3d/hero-scene-loader";
import { ArrowRight, Compass } from "lucide-react";

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background depth radial lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8BE5FF]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Editorial Content Column */}
          <div className="lg:col-span-7 z-10 space-y-6 sm:space-y-8 text-left">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-xs font-mono font-medium text-[#8BE5FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8BE5FF] animate-pulse" />
              <span>{dict.hero.badge}</span>
            </div>

            {/* Editorial Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F3F6FA] leading-[1.08]"
            >
              {dict.hero.headline}
            </h1>

            {/* Subheadline & Descriptor */}
            <p className="text-base sm:text-lg md:text-xl text-[#A5B0C0] max-w-2xl leading-relaxed font-normal">
              {dict.hero.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={`/${locale}/products`}
                className="shadow-[0_0_25px_rgba(139,229,255,0.2)]"
              >
                <span>{dict.hero.ctaCatalog}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={`/${locale}/contact`}
              >
                <span>{dict.hero.ctaContact}</span>
              </Button>
            </div>

            {/* Micro descriptor metadata */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#A5B0C0]/80">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#8BE5FF]" />
                {dict.common.brandDomain}
              </span>
              <span className="hidden sm:inline-block text-[#2A3545]">•</span>
              <span className="hidden sm:inline-block">
                {dict.common.brandTagline}
              </span>
            </div>
          </div>

          {/* 3D Light Engine Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-[500px] aspect-square relative">
              <HeroSceneLoader />
              {/* Interactive caption notice */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] font-mono text-[#A5B0C0]/60 whitespace-nowrap pointer-events-none hidden sm:block">
                {dict.hero.interactiveNotice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
