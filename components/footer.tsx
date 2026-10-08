"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1020] px-6 pt-15 text-white lg:px-10 lg:pt-15">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#7C3AED]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-[-160px] h-[420px] w-[420px] rounded-full bg-[#FACC15]/[0.045] blur-[140px]" />

      {/* Decorative arcs */}
      <div className="pointer-events-none absolute -right-[220px] top-[-250px] h-[600px] w-[600px] rounded-full border border-[#A78BFA]/10" />

      <div className="pointer-events-none absolute -right-[170px] top-[-200px] h-[500px] w-[500px] rounded-full border border-[#FACC15]/10" />

      <div className="pointer-events-none absolute left-[-250px] bottom-[-300px] h-[500px] w-[500px] rounded-full border border-[#7C3AED]/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.65fr_0.8fr_1.25fr] lg:gap-10">
          {/* ================= BRAND ================= */}
          <div>
            <a href="#" className="inline-flex">
              <img
                src="/logo-dark.png"
                alt="Tiny Dream Games"
                className="w-[150px] object-contain"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
              An independent development studio creating games, websites and
              digital experiences with purpose.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/tinydreamgames/"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-[#A78BFA]/40 hover:bg-[#7C3AED]/10"
              >
                <svg
                  className="h-[18px] w-[18px] text-white/45 transition group-hover:text-[#A78BFA]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@TinyDreamGamesStudio"
                aria-label="YouTube"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-red-500/10"
              >
                <svg
                  className="h-[18px] w-[18px] text-white/45 transition group-hover:text-red-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C1.9 8.9 1.9 12 1.9 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8ZM10 15.2V8.8l5.5 3.2L10 15.2Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/tiny-dream-games/"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10"
              >
                <svg
                  className="h-[17px] w-[17px] text-white/45 transition group-hover:text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.5 8.3H3V21h3.5V8.3ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2v-1.8H9V21h3.5v-6.3c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 2 2.1 3.5V21H21v-7.3Z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <svg
                  className="h-[18px] w-[18px] text-white/45 transition group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .7A11.3 11.3 0 0 0 8.4 22.9c.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.2-5.1 5.5.4.3.7 1 .7 2v2.9c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/tinydreamgames"
                aria-label="X"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <svg
                  className="h-[16px] w-[16px] text-white/45 transition group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.4l-5-6.6L6 22H2.8l7.3-8.4L2.4 2H9l4.5 6L18.9 2Zm-1.1 17.9h1.8L8 4H6.1l11.7 15.9Z" />
                </svg>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FACC15]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/25">
                Small Team. Big Dreams.
              </span>
            </div>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#FACC15]" />

              <h3 className="text-[10px] font-medium uppercase tracking-[0.23em] text-[#A78BFA]">
                Explore
              </h3>
            </div>

            <nav className="mt-6 flex flex-col gap-4">
              <a
                href="#"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                Home
              </a>

              <a
                href="#games"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                Games
              </a>

              <a
                href="#services"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                Services
              </a>

              <a
                href="#about"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                About
              </a>

              <a
                href="#process"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                Process
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#FACC15]" />

              <h3 className="text-[10px] font-medium uppercase tracking-[0.23em] text-[#A78BFA]">
                Services
              </h3>
            </div>

            <nav className="mt-6 flex flex-col gap-4">
              <a
                href="/services/game-development"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                Game Development
              </a>

              <a
                href="/services/web-development"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                Web Development
              </a>

              <a
                href="/services/app-development"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                App Development
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-white/45 transition hover:translate-x-1 hover:text-white"
              >
                Start a Project
              </a>
            </nav>
          </div>

          {/* ================= GET IN TOUCH ================= */}
          <div className="border-white/[0.08] lg:border-l lg:pl-9">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#FACC15]" />

              <h3 className="text-[10px] font-medium uppercase tracking-[0.23em] text-[#A78BFA]">
                Get In Touch
              </h3>
            </div>

            <div className="mt-7 space-y-5">
              {/* EMAIL */}
              <a
                href="mailto:tinydreamgamesstudio@gmail.com"
                className="group flex gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7C3AED]/25 bg-[#7C3AED]/10 text-[#A78BFA] transition group-hover:border-[#A78BFA]/40 group-hover:bg-[#7C3AED]/15">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <span>
                  <span className="block text-sm font-medium text-white">
                    Email Us
                  </span>

                  <span className="mt-1 block text-sm text-white/40 transition group-hover:text-white/60">
                    tinydreamgamesstudio@gmail.com
                  </span>
                </span>
              </a>

              {/* PHONE */}
              <a href="tel:+918267093024" className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FACC15]/20 bg-[#FACC15]/10 text-[#FACC15] transition group-hover:border-[#FACC15]/40">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
                  </svg>
                </span>

                <span>
                  <span className="block text-sm font-medium text-white">
                    Call / WhatsApp
                  </span>

                  <span className="mt-1 block text-sm text-white/40 transition group-hover:text-white/60">
                    +91 8267093024
                  </span>
                </span>
              </a>

              {/* ADDRESS */}
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#A78BFA]/20 bg-[#A78BFA]/10 text-[#A78BFA]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <span>
                  <span className="block text-sm font-medium text-white">
                    Our Location
                  </span>

                  <span className="mt-1 block text-sm leading-6 text-white/40">
                    Agra, Uttar Pradesh
                    <br />
                    India
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-12 h-px bg-white/[0.07]" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col gap-5 pb-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/20">
            © {new Date().getFullYear()} Tiny Dream Games. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="/privacy-policy"
              className="text-white/20 transition hover:text-white/50"
            >
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-white/10" />

            <a
              href="/terms-and-conditions"
              className="text-white/20 transition hover:text-white/50"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/918267093024"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tiny Dream Games on WhatsApp"
        className="group fixed bottom-6 right-6 z-[100] flex items-center gap-3"
      >
        {/* Hover label */}
        <span
          className="
      pointer-events-none
      translate-x-2
      rounded-full
      border border-white/[0.08]
      bg-[#151A2B]/95
      px-4
      py-2.5
      text-xs
      font-medium
      text-white/80
      opacity-0
      shadow-[0_10px_40px_rgba(0,0,0,0.3)]
      backdrop-blur-xl
      transition-all
      duration-300
      group-hover:translate-x-0
      group-hover:opacity-100
    "
        >
          Let's Talk
        </span>

        {/* Button */}
        <span
          className="
      relative
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      border
      border-[#25D366]/30
      bg-[#25D366]
      shadow-[0_8px_30px_rgba(37,211,102,0.22)]
      transition-all
      duration-300
      group-hover:-translate-y-1
      group-hover:scale-105
      group-hover:shadow-[0_12px_40px_rgba(37,211,102,0.32)]
    "
        >
          {/* Pulse */}
          <span
            className="
        absolute
        inset-0
        rounded-full
        border
        border-[#25D366]/40
        animate-ping
        opacity-20
      "
          />

          {/* WhatsApp icon */}
          <svg
            className="relative z-10 h-7 w-7 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.43ZM12.08 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.85 9.85 0 0 1-1.51-5.27C2.21 6.47 6.64 2.05 12.07 2.05c2.63 0 5.1 1.03 6.96 2.89a9.82 9.82 0 0 1 2.89 6.97c0 5.43-4.42 9.89-9.84 9.89Zm5.41-7.39c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </span>
      </a>
    </footer>
  );
}
