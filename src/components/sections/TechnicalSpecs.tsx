"use client";

import { ShieldCheck, Cpu, Gauge, Crosshair, Wrench, Check } from "lucide-react";

const SPECS = [
  { parameter: "Chassis Alignment Tolerance", value: "± 0.00 mm", benchmark: "Celette 3D Computerized Bench", status: "FACTORY OEM" },
  { parameter: "Paint Film Curing Temp", value: "160° F (71° C)", benchmark: "Climate Downdraft Booths", status: "BAKED OEM" },
  { parameter: "Clearcoat Thickness", value: "140 – 160 µm", benchmark: "PosiTector Ultrasonic Gauge", status: "CONCOURS" },
  { parameter: "Structural Aluminum Welding", value: "Pulse MIG / Synergic", benchmark: "Fronius TPS 400i Automated", status: "CERTIFIED" },
  { parameter: "ADAS Radar Target Alignment", value: "0.01° Angular Tolerance", benchmark: "Autel MaxiSys ADAS Calibrator", status: "ACTIVE" },
  { parameter: "Turnaround Priority Option", value: "72 Hours (03 Days)", benchmark: "Rapid Sprint Collision Protocol", status: "EXPEDITED" },
];

export default function TechnicalSpecs() {
  return (
    <section className="relative w-full bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono font-semibold uppercase">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Engineering Tolerance Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              Rigorous Laboratory Standards
            </h2>
          </div>
          <p className="text-sm text-slate-400 font-sans max-w-md">
            Every repair follows strict tolerances verified through multi-point computerized telemetry.
          </p>
        </div>

        {/* Technical Specs Table */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 font-mono text-xs uppercase tracking-wider">
                  <th className="py-4 px-6">Specification Parameter</th>
                  <th className="py-4 px-6">Measured Tolerance</th>
                  <th className="py-4 px-6">Equipment / Protocol</th>
                  <th className="py-4 px-6 text-right">Certification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                {SPECS.map((s, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-800/30 transition-colors group"
                    data-interactive="true"
                  >
                    <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:scale-150 transition-transform" />
                      {s.parameter}
                    </td>
                    <td className="py-4 px-6 text-brand-sky font-bold">
                      {s.value}
                    </td>
                    <td className="py-4 px-6 text-slate-300">
                      {s.benchmark}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 border border-brand-accent/30 text-brand-accent font-bold text-[10px]">
                        <Check className="w-3 h-3" />
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
