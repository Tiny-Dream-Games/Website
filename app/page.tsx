import Link from "next/link";

export const metadata = {
  title: "Under Maintenance | Tiny Dream Games",
  description:
    "Tiny Dream Games is currently undergoing maintenance. We'll be back shortly.",
};

export default function MaintenancePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080B18] text-white flex items-center justify-center px-6">
      {/* Ambient Glows */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/15 blur-[140px]" />

      <div className="absolute bottom-[-180px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#FACC15]/5 blur-[120px]" />

      {/* Decorative Orb */}
      <div className="absolute left-[8%] top-[18%] w-2 h-2 rounded-full bg-[#A78BFA] shadow-[0_0_20px_#A78BFA] animate-pulse" />

      <div className="absolute right-[12%] top-[28%] w-1.5 h-1.5 rounded-full bg-[#FACC15] shadow-[0_0_16px_#FACC15] animate-pulse" />

      <div className="absolute left-[18%] bottom-[22%] w-1.5 h-1.5 rounded-full bg-[#FACC15] shadow-[0_0_16px_#FACC15] animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Logo */}
        <Link href="/" className="inline-block mb-10">
          <img
            src="/tiny-dream-logo.png"
            alt="Tiny Dream Games"
            className="w-[170px] sm:w-[200px] h-auto object-contain mx-auto"
          />
        </Link>

        {/* Icon */}
        <div className="relative mx-auto mb-8 w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#7C3AED]/15 blur-xl" />

          <div className="relative w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center shadow-2xl">
            {/* Simple wrench / tools icon */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7 6.3C15.5 5.5 16 4.4 16 3.2C16 2.8 16 2.4 15.9 2L12.8 5.1L10.9 4.6L10.4 2.7L13.5 0.1C13.1 0 12.7 0 12.3 0C11.1 0 10 0.5 9.2 1.3C7.6 2.9 7.4 5.3 8.5 7.1L2 13.6C0.9 14.7 0.9 16.5 2 17.6C3.1 18.7 4.9 18.7 6 17.6L12.5 11.1C14.3 12.2 16.7 12 18.3 10.4C19.1 9.6 19.6 8.5 19.6 7.3C19.6 6.9 19.6 6.5 19.5 6.1L16.4 9.2L14.5 8.7L14 6.8L14.7 6.3Z"
                transform="translate(2 2)"
                stroke="url(#maintenanceGradient)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <defs>
                <linearGradient
                  id="maintenanceGradient"
                  x1="4"
                  y1="4"
                  x2="20"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A78BFA" />
                  <stop offset="1" stopColor="#FACC15" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-5">
          We&apos;re
          <span className="bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
            {" "}
            Dreaming Upgrades.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed">
          Tiny Dream Games is currently undergoing a little maintenance behind
          the scenes. We&apos;re making things better, smoother, and ready for
          what&apos;s next.
        </p>

        {/* Status */}
        <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FACC15] opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FACC15]" />
          </span>

          <span className="text-sm text-gray-300">
            Currently under maintenance
          </span>
        </div>

      </div>
    </main>
  );
}
