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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#8BE5FF] glass-badge mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>PEER REVIEW // 10. CRITICAL ACCLAIM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F3F6FA] leading-[1.05]">
              Praised by academics.{" "}
              <span className="text-[#8BE5FF]">Feared by paper cups.</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Gulir ulasan ke kiri"
              data-cursor="pointer"
              className="p-3 rounded-xl bg-[#111824] hover:bg-[#172232] border border-[#2A3545] text-[#A5B0C0] hover:text-[#F3F6FA] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Gulir ulasan ke kanan"
              data-cursor="pointer"
              className="p-3 rounded-xl bg-[#111824] hover:bg-[#172232] border border-[#2A3545] text-[#A5B0C0] hover:text-[#F3F6FA] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] sm:min-w-[380px] max-w-[400px] glass-card rounded-2xl p-7 border border-[#2A3545] flex flex-col justify-between shrink-0 snap-start space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#8BE5FF] font-bold">{t.rating}</span>
                  <div className="flex items-center text-[#FF9100]">
                    {Array.from({ length: 5 }).map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <Quote className="w-6 h-6 text-[#8BE5FF]/40" />

                <p className="text-sm sm:text-base text-[#F3F6FA] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A3545]">
                <p className="text-sm font-bold text-[#F3F6FA]">{t.author}</p>
                <p className="text-xs font-mono text-[#A5B0C0] mt-0.5">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
