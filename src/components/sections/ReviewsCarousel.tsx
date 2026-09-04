"use client";

import { Star, ShieldCheck, Quote } from "lucide-react";

const REVIEWS = [
  {
    author: "Marcus Vance",
    vehicle: "2023 Porsche 911 Carrera GTS",
    rating: 5,
    location: "Everett, WA",
    comment:
      "After a severe front-quarter impact, Auto Body Repair Inc. restored my 911 Carrera using the Celette frame bench. The Miami Blue Glasurit paint match is indistinguishable from the factory Stuttgart finish. Delivered in 3 days!",
    date: "Verified Customer",
  },
  {
    author: "Elena Rostova",
    vehicle: "2022 Porsche Taycan Turbo S",
    rating: 5,
    location: "Lynnwood, WA",
    comment:
      "High-voltage aluminum structural repair requires true mastery. They handled the entire insurance claim with Chubb and recalibrated all ADAS radars perfectly. Cannot recommend them enough.",
    date: "Verified Customer",
  },
  {
    author: "David K.",
    vehicle: "2024 BMW M4 Competition",
    rating: 5,
    location: "Mukilteo, WA",
    comment:
      "The 03-Day Rapid Sprint is real. Dropped it off on Tuesday with cracked carbon fiber splitter and quarter damage, picked it up Friday morning spotless. Best auto body facility on Hwy 99.",
    date: "Verified Customer",
  },
];

export default function ReviewsCarousel() {
  return (
    <section className="relative w-full bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono font-semibold uppercase">
              <Star className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
              <span>Verified 4.98 / 5.0 Star Ratings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              Driver Testimonials
            </h2>
          </div>
          <p className="text-sm text-slate-400 font-sans max-w-md">
            Over 340+ exotic and luxury vehicles restored to factory perfection at our Hwy 99 facility.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-brand-accent/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between space-y-6 shadow-lg group"
              data-interactive="true"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-brand-accent/40 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white font-display">
                    {r.author}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {r.date}
                  </span>
                </div>
                <div className="text-xs font-mono text-brand-sky">
                  {r.vehicle}
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  {r.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
