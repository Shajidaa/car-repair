"use client";

import { useEffect, useRef, useState } from "react";
import { audioEngine } from "@/lib/audioSynthesizer";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clickableText, setClickableText] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("button, a, input, select, [data-interactive], [role='button']");
      if (interactive) {
        setHovered(true);
        audioEngine.playTick(1400);
        const label = interactive.getAttribute("data-cursor-label");
        setClickableText(label || null);
      } else {
        setHovered(false);
        setClickableText(null);
      }
    };

    const animate = () => {
      // Smooth spring follow for outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"} hidden md:block`}>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-brand-accent shadow-[0_0_8px_#00D2FF]"
      />

      {/* Spring outer ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center -ml-5 -mt-5 rounded-full border transition-[width,height,border-color,background-color] duration-200 ${
          hovered
            ? "w-16 h-16 -ml-8 -mt-8 border-brand-accent/80 bg-brand-accent/10 backdrop-blur-[1px]"
            : "w-10 h-10 border-sky-400/40 bg-transparent"
        }`}
      >
        {clickableText && (
          <span className="text-[9px] font-mono tracking-widest text-brand-accent uppercase font-bold px-1 animate-pulse">
            {clickableText}
          </span>
        )}
      </div>
    </div>
  );
}
