"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-6 lg:px-10">
        {" "}
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo-dark.png"
            alt="Tiny Dream Games"
            width={210}
            height={80}
            priority
            className="h-auto w-[120px] sm:w-[100px]"
          />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          <a
            href="#games"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Games
          </a>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              Services
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Mega Menu */}
            <div className="invisible absolute right-0 top-full z-50 w-[720px] translate-y-3 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101526]/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                <div className="mb-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                    What We Build
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Digital experiences, built with purpose.
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                    From original games to modern websites and custom
                    applications, we turn ideas into polished digital products.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {/* Games */}
                  <a
                    href="#games"
                    className="group/card rounded-2xl border border-white/5 bg-white/[0.035] p-5 transition duration-300 hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/10"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#7C3AED]/15 text-[#A78BFA]">
                      <svg
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7.5 8h9a4.5 4.5 0 0 1 4.35 5.65l-1.05 4.1a2.5 2.5 0 0 1-4.55.65L14 16H10l-1.25 2.4a2.5 2.5 0 0 1-4.55-.65l-1.05-4.1A4.5 4.5 0 0 1 7.5 8Z" />
                        <path d="M8 11v4" />
                        <path d="M6 13h4" />
                        <circle
                          cx="16.5"
                          cy="12"
                          r=".75"
                          fill="currentColor"
                          stroke="none"
                        />
                        <circle
                          cx="18.5"
                          cy="14"
                          r=".75"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    </div>

                    <h4 className="font-semibold text-white">
                      Game Development
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-white/45">
                      Engaging 2D & 3D games, prototypes and interactive
                      experiences.
                    </p>

                    <span className="mt-4 inline-block text-xs font-medium text-[#A78BFA] transition group-hover/card:translate-x-1">
                      Explore →
                    </span>
                  </a>

                  {/* Web */}
                  <a
                    href="#services"
                    className="group/card rounded-2xl border border-white/5 bg-white/[0.035] p-5 transition duration-300 hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/10"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#A78BFA]/15 text-[#A78BFA]">
                      <svg
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M3 8h18" />
                        <path d="M7 6h.01" />
                        <path d="M10 6h.01" />
                        <path d="M13 6h.01" />
                      </svg>
                    </div>

                    <h4 className="font-semibold text-white">
                      Web Development
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-white/45">
                      Fast, responsive and modern websites for businesses and
                      brands.
                    </p>

                    <span className="mt-4 inline-block text-xs font-medium text-[#A78BFA] transition group-hover/card:translate-x-1">
                      Explore →
                    </span>
                  </a>

                  {/* Apps */}
                  <a
                    href="#services"
                    className="group/card rounded-2xl border border-white/5 bg-white/[0.035] p-5 transition duration-300 hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/10"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FACC15]/10 text-[#FACC15]">
                      <svg
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="6" y="3" width="12" height="18" rx="2.5" />
                        <path d="M10 6h4" />
                        <path d="M10.5 18h3" />
                      </svg>
                    </div>

                    <h4 className="font-semibold text-white">
                      App Development
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-white/45">
                      Custom mobile and web applications designed around your
                      needs.
                    </p>

                    <span className="mt-4 inline-block text-xs font-medium text-[#FACC15] transition group-hover/card:translate-x-1">
                      Explore →
                    </span>
                  </a>
                </div>

                {/* Bottom CTA */}
                <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#A78BFA]/10 bg-gradient-to-r from-[#7C3AED]/10 to-transparent px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Have an idea in mind?
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Let's turn it into something real.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#111827] transition hover:bg-[#A78BFA] hover:text-white"
                  >
                    Start a Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="text-sm text-white/70 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#A78BFA]/50 hover:bg-[#7C3AED]/20"
          >
            Let's Talk
          </a>
        </nav>
        {/* Mobile Menu */}
        <details className="relative md:hidden">
          <summary
            aria-label="Open menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/[0.05] [&::-webkit-details-marker]:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-3 bg-[#A78BFA]" />
            </span>
          </summary>

          <div className="absolute right-0 top-14 w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#151A2E]/95 p-2 shadow-2xl backdrop-blur-xl">
            <a
              href="#games"
              className="block rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              Games
            </a>

            <details className="group/services">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white [&::-webkit-details-marker]:hidden">
                Services
                <svg
                  className="h-5 w-5 shrink-0 text-white/70 transition-transform duration-200 group-open/services:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>

              <div className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                <a
                  href="#games"
                  className="block rounded-lg px-3 py-2.5 text-xs text-white/50 hover:bg-white/5 hover:text-white"
                >
                  Game Development
                </a>

                <a
                  href="#services"
                  className="block rounded-lg px-3 py-2.5 text-xs text-white/50 hover:bg-white/5 hover:text-white"
                >
                  Web Development
                </a>

                <a
                  href="#services"
                  className="block rounded-lg px-3 py-2.5 text-xs text-white/50 hover:bg-white/5 hover:text-white"
                >
                  App Development
                </a>
              </div>
            </details>

            <a
              href="#about"
              className="block rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="mt-1 block rounded-xl bg-[#7C3AED]/20 px-4 py-3 text-sm font-medium text-white transition hover:bg-[#7C3AED]/30"
            >
              Let's Talk
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
