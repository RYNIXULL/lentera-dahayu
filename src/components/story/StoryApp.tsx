"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Loader } from "@/components/ui/Loader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { StickyNav } from "@/components/ui/StickyNav";
import { VideoModal } from "@/components/ui/VideoModal";

// Story Sections
import { SectionHero } from "@/components/sections/story/SectionHero";
import { SectionParodyAI } from "@/components/sections/story/SectionParodyAI";
import { SectionLift } from "@/components/sections/story/SectionLift";
import { SectionThermal } from "@/components/sections/story/SectionThermal";
import { SectionGeometry } from "@/components/sections/story/SectionGeometry";
import { SectionToy } from "@/components/sections/story/SectionToy";
import { SectionGrip } from "@/components/sections/story/SectionGrip";
import { SectionSustainability } from "@/components/sections/story/SectionSustainability";
import { SectionTestimonials } from "@/components/sections/story/SectionTestimonials";
import { SectionStickers } from "@/components/sections/story/SectionStickers";
import { SectionVariants } from "@/components/sections/story/SectionVariants";
import { SectionOpenModel } from "@/components/sections/story/SectionOpenModel";
import { SectionFooterCTA } from "@/components/sections/story/SectionFooterCTA";

// Dynamically import the 3D Persistent Scene client-side only
const DynamicScene = dynamic(
  () => import("@/components/3d/Scene").then((mod) => ({ default: mod.Scene })),
  {
    ssr: false,
    loading: () => null,
  }
);

export function StoryApp() {
  // Initialize Lenis + GSAP ScrollTrigger
  useSmoothScroll();

  return (
    <div className="relative bg-[#090D14] text-[#F3F6FA] min-h-screen overflow-x-hidden cursor-default">
      {/* 1. Loader with Percentage & Scale Reveal */}
      <Loader />

      {/* Persistent Fixed 3D Scene behind the DOM */}
      <DynamicScene />

      {/* UI Elements */}
      <CustomCursor />
      <GrainOverlay />
      <StickyNav />
      <VideoModal />

      {/* HTML Scroll Sections that scroll over the 3D Canvas */}
      <main className="relative z-10 flex flex-col">
        {/* 02. Hero Section */}
        <SectionHero />

        {/* 03. "Isn't just a [PRODUCT]" Parody-AI Section */}
        <SectionParodyAI />

        {/* 04. Feature: Lift & Wall Thickness */}
        <SectionLift />

        {/* 05. Feature: Thermal / Stability Shader Gradient */}
        <SectionThermal />

        {/* 06. Feature: Perfect Geometry Wireframe */}
        <SectionGeometry />

        {/* 07. Feature: Interactive Toy Flip & Underside Cipher */}
        <SectionToy />

        {/* 08. Feature: Tactile Grip & Friction Coefficient */}
        <SectionGrip />

        {/* 09. Sustainability & Geological Lifespan */}
        <SectionSustainability />

        {/* 10. Testimonials Carousel */}
        <SectionTestimonials />

        {/* 11. Social-Proof Sticker Collage */}
        <SectionStickers />

        {/* 12. Variants (Base / Pro / Pro Max) & 3D Stack Count */}
        <SectionVariants />

        {/* 13. Open Model / Research Release & BibTeX */}
        <SectionOpenModel />

        {/* 14. CTA & Brand Pitch Footer */}
        <SectionFooterCTA />
      </main>
    </div>
  );
}
