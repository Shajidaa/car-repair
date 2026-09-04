"use client";

import { useEffect, useRef } from "react";

export default function HolographicScanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => { });
  }, []);

  return (
    <section id="scanner" className="relative w-full h-screen bg-slate-950 overflow-hidden">
      <video
        ref={videoRef}
        src="/Porsche_panel_dent_repair_transi…_202609042259.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}