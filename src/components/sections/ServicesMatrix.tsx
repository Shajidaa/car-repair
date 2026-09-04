"use client";

import { Wrench, Shield, Sparkles, Cpu, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import { useAppControls } from "@/components/providers/SmoothScrollProvider";
import { audioEngine } from "@/lib/audioSynthesizer";

const SERVICES = [
  {
    icon: Wrench,
    title: "Structural Collision Repair",
    tagline: "OEM Aluminum & Carbon Fiber Straightening",
    desc: "Certified repairs following strict factory procedures for unibody, subframe, and structural crash rail realignments.",
    specs: ["Celette Bench 3D Laser", "OEM Aluminum Pulse MIG", "Lifetime Warranty"],
  },
  {
    icon: Sparkles,
    title: "Glasurit Waterborne Refinishing",
    tagline: "Downdraft Heated Spray Booths & Ceramic 9H",
    desc: "Spectral color-matching camera analysis guaranteeing 100% factory hue and orange-peel texture replication.",
    specs: ["Spectral Color Scan", "9H Ceramic Topcoat", "Dust-Free Cleanroom"],
  },
  {
    icon: Cpu,
    title: "ADAS Sensor Calibration",
    tagline: "Radar, LiDAR & Camera System Re-indexing",
    desc: "Post-repair electronic calibration of emergency braking, lane keep assist, and adaptive cruise control matrices.",
    specs: ["Dynamic / Static Targets", "OEM Diagnostic Tools", "Full System Scan"],
  },
  {
    icon: Shield,
    title: "Laser Frame Alignment",
    tagline: "Sub-Millimeter Suspension & Chassis Geometry",
    desc: "Restore uncompromised handling, tire wear balance, and structural safety tolerances down to 0.00° precision.",
    specs: ["Computerized Readouts", "Zero Drift Guarantee", "Suspension Geometry"],
  },
  {
    icon: Eye,
    title: "Paintless Dent Repair (PDR)",
    tagline: "Preserve Original Factory Paintwork",
    desc: "Precision micro-tool manipulation to extract door dings, crease dents, and hail storm damage without repainting.",
    specs: ["100% Factory Finish Kept", "Same-Day Turnaround", "Insurance Approved"],
  },
  {
    icon: Sparkles,
    title: "Concours Classic Restoration",
    tagline: "Bespoke Metal Fabrication & Show Car Polish",
    desc: "Full nut-and-bolt body-off restorations for vintage Porsche, European classics, and modern collector exotics.",
    specs: ["Custom Metal Shaping", "Concealed Wiring", "Multi-Stage Polish"],
  },
];

export default function ServicesMatrix() {
  const { openBookingModal } = useAppControls();

  const handleSelectService = () => {
    audioEngine.playTick(1600);
    openBookingModal();
  };

  return (
    <section id="services" className="relative w-full bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono font-semibold uppercase">
              <Wrench className="w-3.5 h-3.5" />
              <span>Full Service Facility Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              Engineered Precision Services
            </h2>
          </div>
          <p className="text-sm text-slate-400 font-sans max-w-md">
            Every vehicle undergoing repair at our 12902 Hwy 99 facility receives rigorous quality control and OEM diagnostic sign-off.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 hover:border-brand-accent/60 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col justify-between"
                data-interactive="true"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-slate-950 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-display tracking-tight group-hover:text-brand-accent transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs font-mono text-brand-sky mt-1">
                      {s.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                    {s.desc}
                  </p>

                  {/* Specs List */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {s.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        <CheckCircle2 className="w-3 h-3 text-brand-accent" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={handleSelectService}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent uppercase tracking-wider group-hover:text-white transition-colors"
                  >
                    <span>Request Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                    OEM COMPLIANT
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
