import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#7C3AED]/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-[#FACC15]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <img
              src="/tiny-dream-logo.png"
              alt="Tiny Dream Games"
              className="w-[180px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* 404 */}
        <div className="mb-5">
          <h1 className="text-[100px] sm:text-[140px] leading-none font-black tracking-[-0.06em] bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
          This level doesn&apos;t exist.
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9">
          Looks like you wandered into an unfinished level. The page you&apos;re
          looking for may have moved, been removed, or never existed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white font-semibold shadow-lg shadow-purple-900/30 hover:scale-[1.02] transition-all duration-300"
          >
            Back to Home
          </Link>

          <Link
            href="/services/game-development"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-gray-200 font-semibold hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
          >
            Explore Games
          </Link>
        </div>

        {/* Small Brand Line */}
        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
            Small Team. Big Dreams.
          </p>
        </div>
      </div>
    </main>
  );
}
