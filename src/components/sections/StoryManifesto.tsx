"use client";

import { ShieldCheck, Zap, Gauge, Award, CheckCircle2, Clock } from "lucide-react";

export default function StoryManifesto() {
  return (
    <section className="relative w-full bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 overflow-hidden">
      {/* Background Lighting Blobs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-accent/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Tag & Manifesto Statement */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono font-semibold uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Master Craftsmanship & Structural Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display leading-tight">
            We Don’t Just Repair Damage. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-sky-300 to-blue-500">
              We Restore Factory Engineering Integrity.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Located on Hwy 99, <strong>Auto Body Repair Inc.</strong> combines computerized Celette bench laser measurement, OEM aluminum structural welding, and automated down-draft spray booths. From high-impact collisions to exotic concours refinishing, we deliver flawless results on a rapid <strong>03-Day Sprint</strong> schedule with a lifetime transferable warranty.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Clock,
              title: "03-Day Rapid Sprint",
              badge: "EXPEDITED DISPATCH",
              desc: "Dedicated master technician teams prioritized to return your vehicle within 72 hours without compromising single-stage cure times.",
            },
            {
              icon: Gauge,
              title: "0.00° Laser Alignment",
              badge: "CELETTE BENCH 3D",
              desc: "Computerized ultrasonic and laser frame diagnostics restore crumple zones and suspension geometry back to exact factory blueprints.",
            },
            {
              icon: ShieldCheck,
              title: "Glasurit 90-Line Paints",
              badge: "SPECTRAL COLOR MATCH",
              desc: "Climate-controlled downdraft booths utilizing OEM waterborne formulas for depth, gloss, and 9H ceramic protective clearcoats.",
            },
            {
              icon: Zap,
              title: "Direct Insurance Concierge",
              badge: "ZERO FRICTION CLAIMS",
              desc: "We work directly with all premier insurance carriers (State Farm, Geico, Progressive, Chubb, Hagerty) handling all adjuster negotiations.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-brand-accent/50 transition-all duration-300 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                data-interactive="true"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-brand-sky text-xs font-mono font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Certified OEM Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
