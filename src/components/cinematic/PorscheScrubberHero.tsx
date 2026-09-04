"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TelemetryHUD from "./TelemetryHUD";
import { Calendar, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { useAppControls } from "@/components/providers/SmoothScrollProvider";
import { audioEngine } from "@/lib/audioSynthesizer";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC = "/Porsche_911_rotating_in_studio_202609041644.mp4";

const CHAPTERS = [
  {
    id: "exterior",
    title: "Auto Body Repair Inc.",
    subheadline: "",
    category: "EXTERIOR & COATING",
    description:
      "Factory-certified collision restoration, computerized paint matching, and multi-stage ceramic curing in clean-room downdraft booths.",
    progressRange: [0, 0.15],
    accent: "PORSCHE MIAMI SKY BLUE",
  },
  {
    id: "wheels",
    title: "Laser Chassis & Wheel Geometry",
    subheadline: "Sub-Millimeter Suspension Alignment & Carbon-Ceramic Caliper Restoration",
    category: "CHASSIS & BRAKES",
    description:
      "Celette frame bench alignment calibrated to 0.00° deviation with Porsche Yellow PCCB caliper refinishing and centerlock torque tuning.",
    progressRange: [0.16, 0.32],
    accent: "0.00° CELETTE ALIGNMENT",
  },
  {
    id: "aerodynamics",
    title: "Aerodynamics & Body Panels",
    subheadline: "Lightweight Aluminum & Carbon Composite Seam Precision",
    category: "PANELS & TOLERANCE",
    description:
      "Laser-measured panel gaps under 0.2mm tolerance, restoring factory aerodynamic flow, downforce balance, and OEM crash structure integrity.",
    progressRange: [0.33, 0.50],
    accent: "0.29 Cd DRAG COEFFICIENT",
  },
  {
    id: "engine",
    title: "Twin-Turbo Powertrain & Exhaust",
    subheadline: "Structural Engine Bay Alignment & Active Cooling Louvers",
    category: "ENGINE & TRANSMISSION",
    description:
      "Complete powertrain frame recalibration, active exhaust valving restoration, and 8-speed dual-clutch transmission harmonic alignment.",
    progressRange: [0.51, 0.70],
    accent: "443 HP FLAT-SIX PDK",
  },
  {
    id: "interior",
    title: "Bespoke Cockpit Restoration",
    subheadline: "Hand-Stitched Leather & Micro-Calibrated ADAS Sensors",
    category: "INTERIOR & SENSORS",
    description:
      "Concours upholstery restoration, digital instrument cluster diagnostics, and 360-degree radar sensor realignment for modern driving assist.",
    progressRange: [0.71, 0.85],
    accent: "ADAS & RADAR RECALIBRATED",
  },
  {
    id: "reveal",
    title: "Master Delivery & Concours Finish",
    subheadline: "180-Point Structural Signoff with Transferable Lifetime Warranty",
    category: "FINAL SHOWROOM REVEAL",
    description:
      "The pinnacle of Northwest automotive collision engineering. Ready for street and track at 12902 Hwy 99 Ste 7, Everett / Lynnwood.",
    progressRange: [0.86, 1.0],
    accent: "LIFETIME REPAIR GUARANTEE",
  },
];

export default function PorscheScrubberHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const { openBookingModal } = useAppControls();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          const p = self.progress;
          setProgress(p);

          // Determine current chapter
          let chapIdx = 0;
          for (let i = 0; i < CHAPTERS.length; i++) {
            if (p >= CHAPTERS[i].progressRange[0] && p <= CHAPTERS[i].progressRange[1]) {
              chapIdx = i;
              break;
            }
          }
          setCurrentChapter(chapIdx);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeChap = CHAPTERS[currentChapter];

  const jumpToChapter = (idx: number) => {
    audioEngine.playTick(1500);
    if (!sectionRef.current) return;
    const targetProgress = CHAPTERS[idx].progressRange[0];
    const scrollHeight = sectionRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = sectionRef.current.offsetTop + targetProgress * scrollHeight;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  const handleBookingCTA = () => {
    audioEngine.playEngineRoar();
    openBookingModal();
  };

  return (
    <section
      id="restoration-film"
      ref={sectionRef}
      className="relative w-full h-[450vh] bg-slate-950 text-white"
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,210,255,0.14)_0%,rgba(8,14,26,0.85)_60%,#030712_100%)] pointer-events-none" />

        {/* Video Scrubber Element (Always Plays & Loops) */}
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain max-h-screen select-none pointer-events-none"
          />
        </div>

        {/* Studio Floor & Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none z-10" />
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-slate-950/90 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none z-10" />

        {/* Live Diagnostics Telemetry Overlay */}
        <TelemetryHUD progress={progress} chapterIndex={currentChapter} />

        {/* Chapter Narrative Overlay Cards */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 z-20 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto space-y-4">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/15 border border-brand-accent/40 backdrop-blur-md text-brand-accent text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,210,255,0.3)] animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeChap.category}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-display text-white leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              {activeChap.title}
            </h1>

            {/* Subheadline with Address Callout */}
            <p className="text-base sm:text-xl font-medium text-brand-sky font-sans tracking-wide max-w-2xl drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
              {activeChap.subheadline}
            </p>

            {/* Technical Narrative Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none drop-shadow">
              {activeChap.description}
            </p>

            {/* Single Clean Interactive CTA Button */}
            <div className="pt-2 flex items-center">
              <button
                onClick={handleBookingCTA}
                className="relative group overflow-hidden rounded-xl p-[1px] shadow-[0_0_25px_rgba(0,210,255,0.4)] hover:shadow-[0_0_40px_rgba(0,210,255,0.7)] transition-all"
                data-interactive="true"
                data-cursor-label="BOOK NOW"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-accent via-sky-400 to-blue-600 rounded-xl animate-glow-line" />
                <span className="relative flex items-center gap-2.5 px-6 py-3.5 rounded-[11px] bg-slate-950 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider group-hover:bg-slate-900 transition-all">
                  <Calendar className="w-4 h-4 text-brand-accent" />
                  Schedule Precision Estimate
                  <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Vertical Chapter Bookmarks (Right Edge) */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3">
          {CHAPTERS.map((chap, idx) => (
            <button
              key={chap.id}
              onClick={() => jumpToChapter(idx)}
              className={`group flex items-center justify-end gap-2.5 transition-all text-right ${currentChapter === idx ? "opacity-100 scale-105" : "opacity-40 hover:opacity-80"
                }`}
              data-interactive="true"
              data-cursor-label={`0${idx + 1}`}
            >
              <span
                className={`text-[10px] font-mono tracking-widest uppercase transition-colors hidden lg:inline ${currentChapter === idx ? "text-brand-accent font-bold" : "text-slate-400"
                  }`}
              >
                0{idx + 1} {chap.id}
              </span>
              <span
                className={`w-2.5 h-2.5 rounded-full border transition-all ${currentChapter === idx
                    ? "bg-brand-accent border-brand-accent shadow-[0_0_10px_#00D2FF]"
                    : "border-slate-500 bg-transparent group-hover:border-slate-300"
                  }`}
              />
            </button>
          ))}
        </div>

        {/* Bottom Scroll Cue Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none text-slate-400">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 animate-pulse">
            Scroll to explore precision restoration stages
          </span>
          <ChevronDown className="w-4 h-4 text-brand-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
