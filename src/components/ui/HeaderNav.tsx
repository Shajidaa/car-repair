"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar, MapPin, Wrench, Menu, X } from "lucide-react";
import { useAppControls } from "@/components/providers/SmoothScrollProvider";
import { audioEngine } from "@/lib/audioSynthesizer";

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useAppControls();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookClick = () => {
    audioEngine.playEngineRoar();
    openBookingModal();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Location badge */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 group"
              data-interactive="true"
              data-cursor-label="HOME"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent via-sky-600 to-blue-900 p-[1px] shadow-[0_0_20px_rgba(0,210,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,210,255,0.8)] transition-all">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-brand-accent group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-display leading-tight flex items-center gap-1.5">
                  Auto Body Repair <span className="text-brand-accent text-xs font-mono px-1.5 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/30">INC</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center gap-1 tracking-tight">
                  <MapPin className="w-2.5 h-2.5 text-brand-accent flex-shrink-0" />
                  12902 Hwy 99 Ste 7
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#restoration-film"
              className="text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-brand-accent transition-colors"
              data-interactive="true"
            >
              Porsche 911 Film
            </a>
            <a
              href="#interactive-3d-studio"
              className="text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-brand-accent transition-colors"
              data-interactive="true"
            >
              3D Studio
            </a>
            <a
              href="#services"
              className="text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-brand-accent transition-colors"
              data-interactive="true"
            >
              Services
            </a>
            <a
              href="#damage-estimator"
              className="text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-brand-accent transition-colors"
              data-interactive="true"
            >
              03-Day Estimator
            </a>
            <a
              href="#location"
              className="text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-brand-accent transition-colors"
              data-interactive="true"
            >
              Location
            </a>
          </nav>

          {/* Right Action Stack: Direct Phone & Book CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Direct Phone Dial */}
            <a
              href="tel:14257505164"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-sky-500/30 bg-sky-950/40 text-brand-sky hover:text-white hover:border-brand-accent hover:bg-brand-accent/20 transition-all text-xs font-mono font-bold tracking-wider group"
              data-interactive="true"
              data-cursor-label="CALL"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent group-hover:animate-bounce" />
              <span>1 (425) 750-5164</span>
            </a>

            {/* Book Inspection CTA */}
            <button
              onClick={handleBookClick}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
              data-interactive="true"
              data-cursor-label="ESTIMATE"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-accent via-sky-400 to-blue-600 rounded-full animate-glow-line" />
              <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950 text-white font-mono text-xs font-bold uppercase tracking-wider group-hover:bg-opacity-80 transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)]">
                <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                Book Session
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 backdrop-blur-2xl">
          <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-slate-300">
            <a
              href="#restoration-film"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60"
            >
              Porsche 911 Film
            </a>
            <a
              href="#interactive-3d-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60"
            >
              3D Car Studio
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60"
            >
              Repair Services
            </a>
            <a
              href="#damage-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60"
            >
              03-Day Estimator
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60"
            >
              Location & Directions
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:14257505164"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-brand-accent/40 bg-brand-accent/10 text-brand-accent font-mono text-xs font-bold"
            >
              <Phone className="w-4 h-4" /> 1 (425) 750-5164
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleBookClick();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-accent to-blue-600 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider"
            >
              Book Inspection Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
