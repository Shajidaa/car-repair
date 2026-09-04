"use client";

import { Wrench, MapPin, Phone, ShieldCheck, Mail, ArrowUp } from "lucide-react";
import { audioEngine } from "@/lib/audioSynthesizer";

export default function Footer() {
  const scrollToTop = () => {
    audioEngine.playWhoosh();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="text-base font-black text-white uppercase font-display">
                Auto Body Repair Inc.
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Premier collision restoration, computerized Celette laser frame alignment, and Glasurit factory refinishing facility.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Lifetime Transferable Warranty</span>
            </div>
          </div>

          {/* Location & Direct Phone */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-white font-display font-bold uppercase tracking-wider text-xs">
              Facility Address
            </h4>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
              <span>
                12902 Hwy 99 Ste 7<br />
                Everett / Lynnwood, WA 98204
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 pt-1">
              <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
              <a
                href="tel:14257505164"
                className="hover:text-brand-accent transition-colors font-bold text-white"
                data-interactive="true"
              >
                1 (425) 750-5164
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="w-4 h-4 text-brand-sky flex-shrink-0" />
              <span>service@autobodyrepairinc.com</span>
            </div>
          </div>

          {/* Services & OEM Certifications */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-white font-display font-bold uppercase tracking-wider text-xs">
              OEM Certifications
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Porsche Approved Body Procedures</li>
              <li>• Celette Bench 3D Laser Alignment</li>
              <li>• Glasurit 90-Line Waterborne System</li>
              <li>• OEM Aluminum Synergic Pulse MIG</li>
              <li>• ADAS LiDAR / Radar Recalibration</li>
            </ul>
          </div>

          {/* Regional Service Areas */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-white font-display font-bold uppercase tracking-wider text-xs">
              Service Area Corridor
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Serving Highway 99 corridor, Everett, Lynnwood, Mukilteo, Edmonds, Mill Creek, Bothell, and Greater Snohomish County.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-brand-accent hover:border-brand-accent transition-all text-[11px] font-bold"
                data-interactive="true"
                data-cursor-label="TOP"
              >
                <ArrowUp className="w-3 h-3" /> Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Auto Body Repair Inc. • 12902 Hwy 99 Ste 7 • All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>03-Day Rapid Sprint™</span>
            <span>•</span>
            <span>Licensed & Insured Facility #ABR-99-WA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
