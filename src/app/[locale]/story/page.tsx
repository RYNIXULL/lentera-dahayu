import { Metadata } from "next";
import { StoryApp } from "@/components/story/StoryApp";

export const metadata: Metadata = {
  title: "VESSEL-01 | The Autonomous Ceramic Beverage Inference Device",
  description:
    "Scroll-driven 3D product storytelling experience for VESSEL-01. Persistent WebGL hero object, real-time shaders, tactile micro-interactions, and satirical spec sheets.",
};

export default function StoryPage() {
  return <StoryApp />;
}
