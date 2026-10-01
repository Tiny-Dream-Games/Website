"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      const removeTimer = setTimeout(() => {
        setMounted(false);
      }, 800);

      return () => clearTimeout(removeTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] overflow-hidden bg-[#080B18] transition-all duration-700 ${
        visible ? "opacity-100" : "opacity-0 scale-[1.02] pointer-events-none"
      }`}
    >
      {/* Main ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[120px]" />

      {/* Gold secondary glow */}
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FACC15]/5 blur-[90px]" />

      {/* Stars */}
      <span className="absolute left-[20%] top-[28%] h-1 w-1 rounded-full bg-[#A78BFA] animate-star-1" />
      <span className="absolute left-[75%] top-[30%] h-[3px] w-[3px] rounded-full bg-[#FACC15] animate-star-2" />
      <span className="absolute left-[27%] top-[68%] h-[3px] w-[3px] rounded-full bg-[#FACC15] animate-star-3" />
      <span className="absolute left-[72%] top-[70%] h-1 w-1 rounded-full bg-[#A78BFA] animate-star-4" />

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        {/* Outer orbital ring */}
        <div className="absolute h-[270px] w-[270px] rounded-full border border-white/[0.06] animate-orbit-slow" />

        {/* Inner orbital ring */}
        <div className="absolute h-[220px] w-[220px] rounded-full border border-[#7C3AED]/20 border-t-[#A78BFA]/70 animate-orbit" />

        {/* Gold orbit */}
        <div className="absolute h-[190px] w-[190px] rounded-full border border-transparent border-r-[#FACC15]/50 animate-orbit-reverse" />

        {/* Orbiting dot */}
        <div className="absolute h-[220px] w-[220px] animate-orbit">
          <span className="absolute left-1/2 top-[-3px] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#A78BFA] shadow-[0_0_18px_#A78BFA]" />
        </div>

        {/* Logo glow */}
        <div className="absolute h-[150px] w-[150px] rounded-full bg-[#7C3AED]/20 blur-[45px] animate-logo-glow" />

        {/* Logo */}
        <div className="relative z-10 animate-logo-premium">
          <img
            src="/tiny-dream-logo.png"
            alt="Tiny Dream Games"
            className="w-[155px] sm:w-[190px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom brand text */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center animate-brand">
        <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/40">
          Tiny Dream Games
        </p>

        <div className="mx-auto mt-4 h-[1px] w-24 overflow-hidden bg-white/10">
          <div className="loader-progress h-full bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent" />
        </div>
      </div>
    </div>
  );
}
