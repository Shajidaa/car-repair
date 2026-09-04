"use client";

import { MapPin, Phone, Clock, Navigation, ShieldCheck, Car, ExternalLink } from "lucide-react";
import { audioEngine } from "@/lib/audioSynthesizer";

export default function LocationHub() {
  const handlePhoneClick = () => {
    audioEngine.playTick(1600);
  };

  return (
    <section id="location" className="relative w-full bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono font-semibold uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Facility Hub & Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
            Visit Our Premier Hwy 99 Facility
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Conveniently located along the Highway 99 corridor, serving Everett, Lynnwood, Mukilteo, Edmonds, and Snohomish County.
          </p>
        </div>

        {/* Location Grid: Details Card & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Pod */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              {/* Address */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Facility Address
                </span>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Auto Body Repair Inc.
                    </h3>
                    <p className="text-sm text-brand-sky font-mono font-semibold">
                      12902 Hwy 99 Ste 7
                    </p>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">
                      Everett / Lynnwood Corridor, WA 98204
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Direct Contact */}
              <div className="space-y-2 border-t border-slate-800/80 pt-4">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Direct Line & Dispatch
                </span>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href="tel:14257505164"
                      onClick={handlePhoneClick}
                      className="text-xl font-mono font-bold text-white hover:text-brand-accent transition-colors"
                      data-interactive="true"
                      data-cursor-label="CALL"
                    >
                      1 (425) 750-5164
                    </a>
                    <p className="text-[11px] text-slate-400 font-mono">
                      24/7 Accident & Towing Dispatch
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-2 border-t border-slate-800/80 pt-4">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Operating Hours
                </span>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-brand-sky flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono space-y-1 text-slate-300">
                    <div className="flex justify-between gap-6">
                      <span>Mon – Fri:</span>
                      <span className="text-white font-bold">7:30 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Saturday:</span>
                      <span className="text-white font-bold">8:30 AM – 3:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Sunday:</span>
                      <span className="text-rose-400">Closed (Emergency Towing Available)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Directions Action Button */}
            <a
              href="https://maps.google.com/?q=12902+Hwy+99+Ste+7+Everett+WA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-slate-950 border border-slate-700 hover:border-brand-accent/60 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-md group"
              data-interactive="true"
              data-cursor-label="MAPS"
            >
              <Navigation className="w-4 h-4 text-brand-accent group-hover:rotate-45 transition-transform" />
              Open Live GPS Driving Directions
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Right Custom Dark Map Graphic Card */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-800 overflow-hidden relative min-h-[420px] bg-slate-900 flex items-center justify-center p-8 shadow-2xl">
            {/* Stylized Dark Grid Map Canvas */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/80 to-transparent" />

            {/* Glowing Corridor Highway 99 Line */}
            <div className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-sky-950/60 border-y border-sky-500/20 flex items-center justify-center">
              <span className="text-[10px] font-mono text-brand-sky/60 font-black tracking-widest uppercase">
                ───── PACIFIC HIGHWAY 99 CORRIDOR ─────
              </span>
            </div>

            {/* Pulse Center Pin */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-sm p-6 rounded-2xl bg-slate-950/90 border border-brand-accent/50 backdrop-blur-xl shadow-[0_0_30px_rgba(0,210,255,0.25)] animate-float">
              <div className="relative">
                <span className="w-12 h-12 rounded-full bg-brand-accent/20 absolute -inset-2 animate-ping" />
                <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center shadow-[0_0_20px_#00D2FF]">
                  <Car className="w-4 h-4 text-slate-950" />
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white font-display">
                  AUTO BODY REPAIR INC.
                </h4>
                <p className="text-xs font-mono text-brand-sky font-bold">
                  12902 Hwy 99 Ste 7
                </p>
                <p className="text-[11px] font-sans text-slate-400 mt-1">
                  18,000 Sq. Ft. Climate-Controlled Restoration Bay with Downdraft Spray Booths
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SECURE VEHICLE STORAGE FACILITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
