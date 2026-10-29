import { create } from "zustand";

export type VariantTier = "base" | "pro" | "promax";
export type TemperatureMode = "creative" | "balanced" | "deterministic";

interface StoryState {
  // Loading
  loadingProgress: number;
  isLoaded: boolean;
  setLoadingProgress: (progress: number) => void;
  setIsLoaded: (loaded: boolean) => void;

  // Scroll & Sections
  scrollProgress: number; // 0 to 1 total page
  activeSectionIndex: number; // 0 to 13
  sectionProgress: number; // 0 to 1 within active section
  setScrollState: (
    totalProgress: number,
    sectionIndex: number,
    sectionProgress: number
  ) => void;

  // Interactive features
  activeVariant: VariantTier;
  setActiveVariant: (variant: VariantTier) => void;

  temperatureMode: TemperatureMode;
  setTemperatureMode: (mode: TemperatureMode) => void;

  // Section 7 Toy Flip
  toyFlipped: boolean;
  toyManualRotation: [number, number]; // [x, y]
  setToyFlipped: (flipped: boolean) => void;
  setToyManualRotation: (rot: [number, number]) => void;

  // Modals & Media
  videoModalOpen: boolean;
  setVideoModalOpen: (open: boolean) => void;

  // Mouse / Pointer Proximity
  mousePos: [number, number]; // Normalized [-1, 1]
  setMousePos: (pos: [number, number]) => void;
}

export const useStoryStore = create<StoryState>((set) => ({
  // Loading
  loadingProgress: 0,
  isLoaded: false,
  setLoadingProgress: (loadingProgress) => set({ loadingProgress }),
  setIsLoaded: (isLoaded) => set({ isLoaded }),

  // Scroll
  scrollProgress: 0,
  activeSectionIndex: 0,
  sectionProgress: 0,
  setScrollState: (scrollProgress, activeSectionIndex, sectionProgress) =>
    set({ scrollProgress, activeSectionIndex, sectionProgress }),

  // Variants
  activeVariant: "base",
  setActiveVariant: (activeVariant) => set({ activeVariant }),

  // Temperature
  temperatureMode: "balanced",
  setTemperatureMode: (temperatureMode) => set({ temperatureMode }),

  // Toy
  toyFlipped: false,
  toyManualRotation: [0, 0],
  setToyFlipped: (toyFlipped) => set({ toyFlipped }),
  setToyManualRotation: (toyManualRotation) => set({ toyManualRotation }),

  // Modal
  videoModalOpen: false,
  setVideoModalOpen: (videoModalOpen) => set({ videoModalOpen }),

  // Mouse
  mousePos: [0, 0],
  setMousePos: (mousePos) => set({ mousePos }),
}));
