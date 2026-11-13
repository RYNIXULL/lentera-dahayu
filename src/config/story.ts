/**
 * STORY CONFIGURATION
 * Single source of truth for 3D Keyframes, Copy, Colors, and Interactive Section parameters.
 */

export interface Keyframe {
  // Object transforms
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  // Visual states
  wireframe: boolean;
  heatIntensity: number; // 0 to 1
  exploded: number; // 0 to 1
  stackCount: number; // 1, 2, or 3
  // Camera & Lights
  cameraPos: [number, number, number];
  cameraFov: number;
  lightIntensity: number;
  bgColor: string;
}

export interface SectionConfig {
  id: string;
  index: string;
  navTitle: string;
  keyframe: Keyframe;
}

export const STORY_CONFIG = {
  product: {
    name: "VESSEL-01",
    tagline: "The World's First Autonomous Ceramic Beverage Inference Device",
    modelCode: "VESSEL-1 (Thinking / 420ml)",
    releaseDate: "OCTOBER 2026",
    fictionalDisclaimer:
      "VESSEL-01 is a satirical creative design experiment exploring over-engineered product storytelling and real-time 3D web craft.",
  },
  theme: {
    bg: "#F0F5FA",
    surface: "#FFFFFF",
    surfaceRaised: "#F0F9FF",
    text: "#1E293B",
    muted: "#64748B",
    accent: "#0284C7",
    accentWarm: "#38BDF8", // Thermal heat accent
    border: "#E2E8F0",
  },
  keyframes: [
    // 0: Loader
    {
      position: [0, -0.4, 0],
      rotation: [0.1, -0.2, 0],
      scale: [0.01, 0.01, 0.01],
      wireframe: false,
      heatIntensity: 0,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5],
      cameraFov: 42,
      lightIntensity: 1.2,
      bgColor: "#F0F5FA",
    },
    // 1: Hero
    {
      position: [1.1, -0.2, 0],
      rotation: [0.25, -0.45, -0.05],
      scale: [1, 1, 1],
      wireframe: false,
      heatIntensity: 0.1,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5.2],
      cameraFov: 42,
      lightIntensity: 1.5,
      bgColor: "#F0F5FA",
    },
    // 2: Parody AI ("Isn't just a mug")
    {
      position: [-1.0, 0, 0.3],
      rotation: [0.1, 0.6, 0.1],
      scale: [1.1, 1.1, 1.1],
      wireframe: false,
      heatIntensity: 0.25,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5.0],
      cameraFov: 42,
      lightIntensity: 1.6,
      bgColor: "#F0F5FA",
    },
    // 3: Feature: Lift (Exploded View & Wall Thickness)
    {
      position: [0, 0.3, 0],
      rotation: [0.4, 0.2, 0],
      scale: [1.15, 1.15, 1.15],
      wireframe: false,
      heatIntensity: 0,
      exploded: 1.0,
      stackCount: 1,
      cameraPos: [0, 0, 6.2],
      cameraFov: 46,
      lightIntensity: 1.8,
      bgColor: "#F0F5FA",
    },
    // 4: Feature: Thermal / Stability (Heat Gradient Shader)
    {
      position: [0.9, -0.1, 0.2],
      rotation: [-0.1, -0.6, 0.05],
      scale: [1.1, 1.1, 1.1],
      wireframe: false,
      heatIntensity: 0.9,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5.0],
      cameraFov: 40,
      lightIntensity: 1.4,
      bgColor: "#F0F5FA",
    },
    // 5: Feature: Perfect Geometry (Wireframe Overlay)
    {
      position: [-0.9, 0, 0],
      rotation: [0.35, 0.8, -0.15],
      scale: [1.15, 1.15, 1.15],
      wireframe: true,
      heatIntensity: 0,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5.0],
      cameraFov: 40,
      lightIntensity: 1.7,
      bgColor: "#F0F5FA",
    },
    // 6: Feature: Interactive Toy (Flip & Underside Secret)
    {
      position: [0, 0, 0.5],
      rotation: [Math.PI * 0.88, 0.2, 0], // Inverted to show underside
      scale: [1.2, 1.2, 1.2],
      wireframe: false,
      heatIntensity: 0.15,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 4.8],
      cameraFov: 44,
      lightIntensity: 1.8,
      bgColor: "#F0F5FA",
    },
    // 7: Feature: Grip / Material (Macro Close-up)
    {
      position: [0.6, -0.4, 1.2],
      rotation: [0.2, -1.1, 0.3],
      scale: [1.6, 1.6, 1.6],
      wireframe: false,
      heatIntensity: 0,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 4.2],
      cameraFov: 38,
      lightIntensity: 1.6,
      bgColor: "#F0F5FA",
    },
    // 8: Sustainability (Stat Counters)
    {
      position: [-1.1, -0.2, 0],
      rotation: [0.15, 0.4, 0],
      scale: [1, 1, 1],
      wireframe: false,
      heatIntensity: 0,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5.2],
      cameraFov: 42,
      lightIntensity: 1.5,
      bgColor: "#F0F5FA",
    },
    // 9: Testimonials (Carousel)
    {
      position: [1.1, 0.1, -0.2],
      rotation: [0.2, -0.3, 0.05],
      scale: [0.95, 0.95, 0.95],
      wireframe: false,
      heatIntensity: 0.1,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5.4],
      cameraFov: 42,
      lightIntensity: 1.4,
      bgColor: "#F0F5FA",
    },
    // 10: Social Proof Sticker Collage
    {
      position: [0, 0, -0.4],
      rotation: [0.1, -0.1, 0],
      scale: [0.9, 0.9, 0.9],
      wireframe: false,
      heatIntensity: 0.2,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5.5],
      cameraFov: 44,
      lightIntensity: 1.5,
      bgColor: "#F0F5FA",
    },
    // 11: Variants (Base / Pro / Pro Max)
    {
      position: [0.8, -0.3, 0],
      rotation: [0.2, -0.4, 0],
      scale: [1.05, 1.05, 1.05],
      wireframe: false,
      heatIntensity: 0,
      exploded: 0,
      stackCount: 1, // Will be overridden by active variant in Zustand
      cameraPos: [0, 0, 5.5],
      cameraFov: 44,
      lightIntensity: 1.6,
      bgColor: "#F0F5FA",
    },
    // 12: Open Model / Paper Download
    {
      position: [-1.0, 0, 0],
      rotation: [0.3, 0.5, -0.1],
      scale: [1, 1, 1],
      wireframe: false,
      heatIntensity: 0.3,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5.2],
      cameraFov: 42,
      lightIntensity: 1.5,
      bgColor: "#F0F5FA",
    },
    // 13: CTA + Footer
    {
      position: [0, -0.1, 0.2],
      rotation: [0.15, -0.2, 0],
      scale: [1.1, 1.1, 1.1],
      wireframe: false,
      heatIntensity: 0.2,
      exploded: 0,
      stackCount: 1,
      cameraPos: [0, 0, 5.0],
      cameraFov: 42,
      lightIntensity: 1.7,
      bgColor: "#F0F5FA",
    },
  ] as Keyframe[],
};
