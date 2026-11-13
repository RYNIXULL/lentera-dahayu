"use client";

import React, { useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, UserCheck } from "lucide-react";

export function SectionTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      rating: "[5.0/5.0]",
      author: "Dr. Arthur Pendelton",
      title: "Chair of Applied Ceramic Philosophy, Oxford",
      quote:
        "For centuries, Western philosophy debated whether the mug exists independently of the coffee. VESSEL-01 settles this: it exists purely to humiliate other vessels.",
    },
    {
      rating: "[4.9/5.0]",
      author: "Sybilla Vane",
      title: "Lead Latent Barista, Hyper-Scale AI Labs",
      quote:
        "We tested 14 LLMs on holding espresso. They all hallucinated saucers. VESSEL-01 held 420ml with 0% token loss. We decommissioned our kitchen staff.",
    },
    {
      rating: "[5.0/5.0]",
      author: "Klaus M.",
      title: "Competitive Desktop Procrastinator & Senior SWE",
      quote:
        "The anti-slip coefficient μ = 0.842 saved my MacBook during a force-push to production. I now treat this vessel with more respect than my direct reports.",
    },
    {
      rating: "[4.8/5.0]",
      author: "Elena Rostova",
      title: "Principal Kinetic Architect, Zurich",
      quote:
        "The 37.9% circularity makes drinking feel like solving a quadratic equation in your mouth. Absolutely zero oval wobble.",
    },
  ];

  const handleScroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = dir === "left" ? -340 : 340;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      id="sec-testimonials"
      className="min-h-screen relative flex items-center justify-start px-4 sm:px-6 lg:px-12 py-24 select-none"
    >
      <div className="max-w-5xl z-10 w-full space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#0284C7] clay-badge mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>PEER REVIEW // 10. CRITICAL ACCLAIM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.05]">
              Praised by academics.{" "}
              <span className="text-[#0284C7]">Feared by diner mugs.</span>
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Gulir ke kiri"
              className="p-3 rounded-2xl bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0284C7] hover:border-sky-200 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Gulir ke kanan"
              className="p-3 rounded-2xl bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0284C7] hover:border-sky-200 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Tracks */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] sm:min-w-[360px] max-w-[380px] clay-card rounded-3xl p-7 border border-[#E2E8F0] flex flex-col justify-between space-y-6 snap-start shrink-0"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1 text-[#0284C7]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="text-[#64748B] font-bold">{t.rating}</span>
                </div>

                <Quote className="w-8 h-8 text-[#0284C7]/40" />

                <p className="text-sm text-[#64748B] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0]">
                <p className="text-sm font-bold text-[#1E293B]">{t.author}</p>
                <p className="text-xs text-[#64748B] font-mono mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
