"use client";

import dynamic from "next/dynamic";
import PorscheScrubberHero from "@/components/cinematic/PorscheScrubberHero";
import StoryManifesto from "@/components/sections/StoryManifesto";
import ServicesMatrix from "@/components/sections/ServicesMatrix";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import InteractiveEstimator from "@/components/sections/InteractiveEstimator";
import TechnicalSpecs from "@/components/sections/TechnicalSpecs";
import LocationHub from "@/components/sections/LocationHub";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import HolographicScanner from "@/components/sections/HolographicScanner";



// Dynamic import for Three.js 3D WebGL Canvas to ensure optimal SSR/CSR hydration performance
const CarScene3D = dynamic(() => import("@/components/3d/CarScene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-slate-950 flex items-center justify-center border-t border-slate-800">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
          Initializing 3D WebGL Studio...
        </span>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950">
      {/* 1. Cinematic 300-Frame Scrubber Hero Section */}
      <PorscheScrubberHero />

      {/* 2. Interactive 3D Holographic Scanner & Laser Inspection Section */}
      <HolographicScanner />

      {/* 3. Craftsmanship Manifesto & 03-Day Rapid Sprint Pillars */}
      <StoryManifesto />

      {/* 4. Interactive 3D WebGL Showroom & Paint Studio */}
      <CarScene3D />

      {/* 4. Complete Engineered Services Catalog */}
      <ServicesMatrix />

      {/* 5. Interactive Before/After Restoration Comparison Slider */}
      <BeforeAfterSlider />

      {/* 6. Real-Time 03-Day Cost & Turnaround Estimator */}
      <InteractiveEstimator />

      {/* 7. Laboratory Engineering Tolerance Matrix */}
      <TechnicalSpecs />

      {/* 8. 12902 Hwy 99 Ste 7 Location Hub & Direct Line */}
      <LocationHub />

      {/* 9. Verified Driver Testimonials Carousel */}
      <ReviewsCarousel />
    </div>
  );
}
