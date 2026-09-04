"use client";

import { useState, useRef, useCallback } from "react";
import { Sparkles, MoveHorizontal, AlertTriangle, CheckCircle2 } from "lucide-react";

const VIDEO_SRC = "/Porsche_911_rotating_in_studio_202609041644.mp4";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative w-full bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Video Restoration Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              Live Structural Scan vs. Concours Finish
            </h2>
          </div>
          <p className="text-sm text-slate-400 font-sans max-w-md">
            Drag the divider slider to reveal our structural straightening, panel gap realignment, and Glasurit clearcoat depth on the Porsche 911 Carrera.
          </p>
        </div>

        {/* Interactive Slider Stage */}
        <div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          className="relative w-full h-[400px] sm:h-[540px] rounded-3xl overflow-hidden border border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-ew-resize select-none bg-slate-950"
          data-interactive="true"
          data-cursor-label="DRAG"
        >
          {/* AFTER (Restored Showroom State - Right Layer) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
            <video
              src={VIDEO_SRC}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
            <div className="absolute bottom-6 right-6 z-10 px-4 py-2 rounded-xl bg-slate-950/85 border border-emerald-500/40 backdrop-blur-md text-emerald-400 font-mono text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>AFTER: 100% FACTORY CONCOURS RESTORATION</span>
            </div>
          </div>

          {/* BEFORE (Simulated Laser Scan Diagnostics State - Left Layer) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div
              className="absolute inset-0 h-full overflow-hidden flex items-center justify-center filter grayscale-[50%] contrast-125 brightness-90"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
              }}
            >
              <video
                src={VIDEO_SRC}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />

              {/* Laser Measurement Grid Scan Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.2)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              <div className="absolute inset-0 bg-red-950/30 pointer-events-none" />

              <div className="absolute bottom-6 left-6 z-10 px-4 py-2 rounded-xl bg-slate-950/85 border border-rose-500/40 backdrop-blur-md text-rose-400 font-mono text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>BEFORE: STRUCTURAL IMPACT & LASER SCAN DIAGNOSTICS</span>
              </div>
            </div>
          </div>

          {/* Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-brand-accent shadow-[0_0_15px_#00D2FF] z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-brand-accent flex items-center justify-center shadow-[0_0_20px_#00D2FF]">
              <MoveHorizontal className="w-4 h-4 text-brand-accent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
