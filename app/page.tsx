import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/reviews";
const faqs = [
  {
    question: "What kind of games can you develop?",
    answer:
      "We develop custom 2D and 3D games for mobile and digital platforms. Projects can range from casual and action games to adventure, endless runner and other custom gameplay concepts.",
  },
  {
    question: "Can you turn my game idea into a playable product?",
    answer:
      "Yes. We can work with an existing game concept or help shape an early idea into a playable product. We can define the core gameplay, mechanics, features and development requirements based on your vision.",
  },
  {
    question: "Do you develop both 2D and 3D games?",
    answer:
      "Yes. We work on both 2D and 3D game projects. The development approach, assets, gameplay systems and technology are planned according to the requirements of each game.",
  },
  {
    question: "Do you develop games for mobile?",
    answer:
      "Yes. Mobile game development is one of our core areas. We focus on responsive touch controls, smooth gameplay and performance considerations for mobile devices.",
  },
  {
    question: "What does your game development process look like?",
    answer:
      "Our process typically starts with understanding the idea, followed by planning the gameplay and features, building the game, testing and polishing the experience, and finally preparing the product for launch.",
  },
  {
    question: "Can you create a prototype before developing the complete game?",
    answer:
      "Yes. We can create a playable prototype to test the core gameplay concept before moving into full development. This helps validate the game idea and refine the experience at an early stage.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Depending on the project, our development stack can include Unity, C#, Blender, Firebase, Android and iOS technologies.",
  },
  {
    question: "Do you also handle game UI and UX?",
    answer:
      "Yes. Game UI and UX can include menus, HUDs, buttons, navigation and other interfaces that are part of the player experience.",
  },
  {
    question: "Can you optimize my game for better performance?",
    answer:
      "Yes. Game optimization can include performance improvements, asset optimization, bug fixing and platform-specific adjustments.",
  },
  {
    question: "How long does game development take?",
    answer:
      "The timeline depends on the game's scope, gameplay mechanics, features, art requirements, platforms and overall complexity.",
  },
  {
    question: "How much does game development cost?",
    answer:
      "The cost depends on the game's scope, gameplay systems, art, animation, platforms and development time. We can discuss your requirements first and then define the appropriate project scope.",
  },
  {
    question: "Do you provide support after the game is launched?",
    answer:
      "Yes. Post-launch support can include bug fixes, updates, optimization and additional improvements depending on the project requirements.",
  },
];
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111827] text-white">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#7C3AED]/20 blur-[140px]" />

          <div className="absolute right-[-120px] top-[10%] h-[550px] w-[550px] rounded-full bg-[#A78BFA]/10 blur-[150px]" />

          <div className="absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-[#FACC15]/5 blur-[150px]" />
        </div>

        {/* Stars */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <span className="absolute left-[12%] top-[28%] text-2xl text-[#A78BFA]">
            ✦
          </span>

          <span className="absolute right-[17%] top-[30%] text-xl text-[#FACC15]">
            ✦
          </span>

          <span className="absolute left-[45%] top-[18%] text-sm text-white/50">
            ✦
          </span>

          <span className="absolute bottom-[25%] right-[32%] text-sm text-[#A78BFA]/60">
            ✦
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-28">
          {/* LEFT */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/20 bg-[#7C3AED]/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-[#C4B5FD] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15] shadow-[0_0_12px_#FACC15]" />
              Independent Development Studio
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Small Team.
              <br />
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                Big Dreams.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              We create games, websites and digital experiences that turn ideas
              into something people can see, play and remember.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#games"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(124,58,237,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(124,58,237,0.4)]"
              >
                Explore Our Games
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-[#A78BFA]/40 hover:bg-white/[0.08]"
              >
                Start a Project
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-xl font-semibold">Games</p>
                <p className="mt-1 text-xs text-white/40">
                  Original experiences
                </p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="text-xl font-semibold">Web</p>
                <p className="mt-1 text-xs text-white/40">Modern websites</p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="text-xl font-semibold">Apps</p>
                <p className="mt-1 text-xs text-white/40">Digital products</p>
              </div>
            </div>
          </div>

          {/* RIGHT — BRAND VISUAL */}
          <div className="relative hidden min-h-[460px] items-center justify-center md:flex lg:min-h-[600px]">
            {/* Outer glow */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-[#7C3AED]/20 blur-[90px] sm:h-[400px] sm:w-[400px]" />

            {/* Orbital ring */}
            <div className="absolute h-[320px] w-[320px] rounded-full border border-[#A78BFA]/10 sm:h-[470px] sm:w-[470px]" />

            <div className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-[#A78BFA]/10 sm:h-[390px] sm:w-[390px]" />

            {/* Logo card */}
            <div className="relative z-10 flex h-[270px] w-[270px] items-center justify-center rounded-[42px] border border-white/10 bg-white/[0.045] shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-[350px] sm:w-[350px]">
              <div className="absolute inset-5 rounded-[34px] bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#FACC15]/5" />

              <Image
                src="/logo-dark.png"
                alt="Tiny Dream Games logo"
                width={420}
                height={420}
                priority
                className="relative z-10 w-[82%] object-contain"
              />
            </div>

            {/* Floating stars */}
            <div className="absolute left-[8%] top-[17%] text-3xl text-[#A78BFA]">
              ✦
            </div>

            <div className="absolute right-[7%] top-[22%] text-2xl text-[#FACC15]">
              ✦
            </div>

            <div className="absolute bottom-[17%] left-[14%] text-lg text-white/30">
              ✦
            </div>

            {/* Floating label */}
            <div className="absolute bottom-[7%] right-[2%] hidden rounded-2xl border border-white/10 bg-[#111827]/80 px-5 py-3 backdrop-blur-xl sm:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Building
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Ideas into experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#111827] to-transparent" />
      </section>

      {/* ================= OUR GAMES ================= */}
      <section
        id="games"
        className="relative overflow-hidden bg-[#111827] px-6 py-20 lg:px-10 lg:py-20"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[750px] -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ================= SECTION HEADER ================= */}
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#FACC15]" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                  Our Games
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Games we've
                <br />
                <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                  dreamed up.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                Original games, imaginative worlds and experiences we're
                building from the ground up.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white/55 transition hover:text-white"
            >
              Have a game idea?
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* ================= GAME GRID ================= */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* ================================================= */}
            {/* GAME 1 */}
            {/* ================================================= */}

            <article className="group overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-white/[0.055] to-white/[0.02] shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A78BFA]/25 hover:shadow-[0_25px_80px_rgba(124,58,237,0.12)]">
              {/* Video */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1020]">
                <video
                  src="/games/game-1/gameplay.mp4"
                  poster="/games/game-1/cover.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/85 via-[#0B1020]/10 to-transparent" />

                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#FACC15]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Status */}
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#111827]/75 px-3 py-1.5 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15] shadow-[0_0_10px_#FACC15]" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/70">
                      In Development
                    </span>
                  </div>
                </div>

                {/* Video indicator */}
                <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-md">
                  <svg
                    className="ml-0.5 h-3.5 w-3.5 text-white/80"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A78BFA]">
                      Action • Adventure
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                      Game One
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/45 transition duration-300 group-hover:border-[#A78BFA]/20 group-hover:text-[#A78BFA]">
                    →
                  </div>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/45">
                  A short description about the game, its world and what makes
                  the gameplay unique.
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <span className="text-xs text-white/35">Android</span>

                  <a
                    href="#"
                    className="text-xs font-medium text-[#A78BFA] transition hover:text-white"
                  >
                    View Game →
                  </a>
                </div>
              </div>
            </article>

            {/* ================================================= */}
            {/* GAME 2 */}
            {/* ================================================= */}

            <article className="group overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-white/[0.055] to-white/[0.02] shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A78BFA]/25 hover:shadow-[0_25px_80px_rgba(124,58,237,0.12)]">
              {/* Video */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1020]">
                <video
                  src="/games/game-2/gameplay.mp4"
                  poster="/games/game-2/cover.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/85 via-[#0B1020]/10 to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#FACC15]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Status */}
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#111827]/75 px-3 py-1.5 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA] shadow-[0_0_10px_#A78BFA]" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/70">
                      Prototype
                    </span>
                  </div>
                </div>

                {/* Video indicator */}
                <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-md">
                  <svg
                    className="ml-0.5 h-3.5 w-3.5 text-white/80"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A78BFA]">
                      Arcade • Casual
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                      Game Two
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/45 transition duration-300 group-hover:border-[#A78BFA]/20 group-hover:text-[#A78BFA]">
                    →
                  </div>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/45">
                  A fast and engaging experience designed around simple controls
                  and satisfying gameplay.
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <span className="text-xs text-white/35">Mobile</span>

                  <a
                    href="#"
                    className="text-xs font-medium text-[#A78BFA] transition hover:text-white"
                  >
                    View Game →
                  </a>
                </div>
              </div>
            </article>

            {/* ================================================= */}
            {/* GAME 3 */}
            {/* ================================================= */}

            <article className="group overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-white/[0.055] to-white/[0.02] shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A78BFA]/25 hover:shadow-[0_25px_80px_rgba(124,58,237,0.12)]">
              {/* Video */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1020]">
                <video
                  src="/games/game-3/gameplay.mp4"
                  poster="/games/game-3/cover.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/85 via-[#0B1020]/10 to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#FACC15]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Status */}
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#111827]/75 px-3 py-1.5 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/70">
                      Coming Soon
                    </span>
                  </div>
                </div>

                {/* Video indicator */}
                <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-md">
                  <svg
                    className="ml-0.5 h-3.5 w-3.5 text-white/80"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A78BFA]">
                      Adventure • Story
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                      Game Three
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/45 transition duration-300 group-hover:border-[#A78BFA]/20 group-hover:text-[#A78BFA]">
                    →
                  </div>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/45">
                  A new world is taking shape. More details about this project
                  will be revealed soon.
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <span className="text-xs text-white/35">TBA</span>

                  <a
                    href="#"
                    className="text-xs font-medium text-[#A78BFA] transition hover:text-white"
                  >
                    Coming Soon →
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* ================= VIEW ALL ================= */}
          <div className="mt-9 flex justify-center">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/55 transition-all duration-300 hover:border-[#A78BFA]/30 hover:bg-[#7C3AED]/10 hover:text-white"
            >
              View all games
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#111827] px-6 py-20 text-white lg:px-10 lg:py-18"
      >
        {/* Background glows */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-[140px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#A78BFA]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ================= HEADER ================= */}
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FACC15]" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                What We Do
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Ideas into
              <br />
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              From games and websites to custom applications, we build digital
              experiences designed around your ideas and goals.
            </p>
          </div>

          {/* ================= SERVICE CARDS ================= */}
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {/* ================================================= */}
            {/* GAME DEVELOPMENT */}
            {/* ================================================= */}

            <article className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#7C3AED]/30 hover:bg-white/[0.05] hover:shadow-[0_25px_80px_rgba(124,58,237,0.12)]">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7C3AED]/10 blur-[60px] transition duration-500 group-hover:bg-[#7C3AED]/20" />

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#A78BFA]">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
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

              <div className="relative mt-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                  01 / Games
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Game Development
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  From gameplay concepts to complete interactive experiences, we
                  create games designed to be engaging, polished and memorable.
                </p>

                {/* Capabilities */}
                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                    2D & 3D Game Development
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                    Unity Development
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                    Gameplay & Mechanics
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                    Mobile Game Development
                  </div>
                </div>

                <a
                  href="#contact"
                  className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#A78BFA]"
                >
                  Explore Game Development
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>

            {/* ================================================= */}
            {/* WEB DEVELOPMENT */}
            {/* ================================================= */}

            <article className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A78BFA]/30 hover:bg-white/[0.05] hover:shadow-[0_25px_80px_rgba(124,58,237,0.10)]">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#A78BFA]/10 blur-[60px] transition duration-500 group-hover:bg-[#A78BFA]/20" />

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#A78BFA]/20 bg-[#A78BFA]/10 text-[#A78BFA]">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
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

              <div className="relative mt-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                  02 / Web
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Web Development
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  Modern websites and digital platforms built for businesses,
                  brands, creators and startups.
                </p>

                {/* Capabilities */}
                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
                    Business Websites
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
                    Next.js & Modern Frontend
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
                    E-commerce Solutions
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
                    SEO & Performance
                  </div>
                </div>

                <a
                  href="#contact"
                  className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#A78BFA]"
                >
                  Explore Web Development
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>

            {/* ================================================= */}
            {/* APP DEVELOPMENT */}
            {/* ================================================= */}

            <article className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#FACC15]/25 hover:bg-white/[0.05] hover:shadow-[0_25px_80px_rgba(245,158,11,0.08)]">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FACC15]/8 blur-[60px] transition duration-500 group-hover:bg-[#FACC15]/15" />

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FACC15]/20 bg-[#FACC15]/10 text-[#FACC15]">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="3" width="12" height="18" rx="2.5" />
                  <path d="M10 6h4" />
                  <path d="M10.5 18h3" />
                </svg>
              </div>

              <div className="relative mt-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#FACC15]">
                  03 / Apps
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                  App Development
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  Custom mobile and web applications designed around real
                  business needs and user experiences.
                </p>

                {/* Capabilities */}
                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
                    Android Applications
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
                    Web Applications
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
                    Custom Business Apps
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
                    APIs & Integrations
                  </div>
                </div>

                <a
                  href="#contact"
                  className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#FACC15]"
                >
                  Explore App Development
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          </div>

          {/* ================= BOTTOM CTA ================= */}
          <div className="relative mt-6 overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-r from-[#17132D] via-[#171B35] to-[#141A2C] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-9">
            {/* CTA glow */}
            <div className="pointer-events-none absolute -right-20 -top-32 h-64 w-64 rounded-full bg-[#7C3AED]/15 blur-[90px]" />

            <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                  Have something in mind?
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  Let's build something worth remembering.
                </h3>
              </div>

              <a
                href="#contact"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(124,58,237,0.3)]"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#111827] px-6 py-20 text-white lg:px-10 lg:py-18"
      >
        {/* Background glows */}
        <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[140px]" />

        <div className="pointer-events-none absolute left-[-180px] bottom-[-100px] h-[400px] w-[400px] rounded-full bg-[#A78BFA]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ================= HEADER ================= */}
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FACC15]" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                About Tiny Dream Games
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Small team.
              <br />
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                Big dreams.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              Tiny Dream Games is an independent development studio creating
              games and digital experiences that turn ideas into something
              people can see, use and remember.
            </p>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            {/* ================= STORY CARD ================= */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.02] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.2)] sm:p-9">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-[90px]" />

              <div className="relative">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                  The Studio
                </span>

                <h3 className="mt-4 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  Building ideas from the first sketch to the final experience.
                </h3>

                <div className="mt-6 space-y-5 text-sm leading-7 text-white/45">
                  <p>
                    We believe good digital products start with a simple idea
                    and become meaningful through thoughtful design, technology
                    and attention to detail.
                  </p>

                  <p>
                    Our focus is split across three areas: creating original
                    games, building modern websites and developing custom
                    applications for businesses and creators.
                  </p>

                  <p>
                    Whether we're building our own game or bringing someone
                    else's idea to life, the goal stays the same — create
                    something useful, engaging and worth experiencing.
                  </p>
                </div>

                {/* Brand statement */}
                <div className="mt-8 border-l border-[#7C3AED]/40 pl-5">
                  <p className="text-lg font-medium leading-8 text-white/80">
                    "Every big idea starts small."
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/25">
                    Tiny Dream Games
                  </p>
                </div>
              </div>
            </div>

            {/* ================= VALUES ================= */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* Value 1 */}
              <div className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-6 transition-all duration-400 hover:border-[#7C3AED]/25 hover:bg-white/[0.05]">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#A78BFA]">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3l2.8 5.7L21 9.6l-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3z" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Built with purpose
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      Every feature and design decision should contribute to the
                      experience rather than simply adding complexity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 2 */}
              <div className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-6 transition-all duration-400 hover:border-[#A78BFA]/25 hover:bg-white/[0.05]">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#A78BFA]/20 bg-[#A78BFA]/10 text-[#A78BFA]">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3v18" />
                      <path d="M3 12h18" />
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Creative + Technical
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      We bring design thinking and development together to
                      create experiences that look good and work well.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 3 */}
              <div className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-6 transition-all duration-400 hover:border-[#FACC15]/20 hover:bg-white/[0.05]">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FACC15]/20 bg-[#FACC15]/10 text-[#FACC15]">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12h16" />
                      <path d="M12 4v16" />
                      <path d="m7 7 10 10" />
                      <path d="m17 7-10 10" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Always learning
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      We keep experimenting with new ideas, tools and
                      technologies to make every project better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= STUDIO FOCUS ================= */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-6">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#A78BFA]">
                Focus 01
              </span>

              <h4 className="mt-3 text-lg font-semibold text-white">
                Original Games
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/35">
                Building our own worlds, mechanics and interactive experiences.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-6">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#A78BFA]">
                Focus 02
              </span>

              <h4 className="mt-3 text-lg font-semibold text-white">
                Digital Products
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/35">
                Modern websites and applications designed around real needs.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-6">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#FACC15]">
                Focus 03
              </span>

              <h4 className="mt-3 text-lg font-semibold text-white">
                Client Solutions
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/35">
                Turning business ideas into polished digital experiences.
              </p>
            </div>
          </div>

          {/* ================= CTA ================= */}
          <div className="mt-6 flex flex-col justify-between gap-6 rounded-[28px] border border-white/[0.08] bg-gradient-to-r from-[#17132D] via-[#171B35] to-[#141A2C] p-7 sm:p-9 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                Let's create
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Have an idea worth building?
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(124,58,237,0.3)]"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#111827] px-6 py-24 text-white lg:px-10 lg:py-18"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#7C3AED]/[0.06] blur-[150px]" />

        <div className="pointer-events-none absolute left-[-200px] bottom-[-200px] h-[450px] w-[450px] rounded-full bg-[#A78BFA]/[0.035] blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ================= TOP ================= */}
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#FACC15]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#A78BFA]">
                  How We Work
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-[60px]">
                From first idea
                <br />
                <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                  to final product.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                We keep the process simple, transparent and focused — so every
                idea has room to become something meaningful.
              </p>

              {/* Small philosophy */}
              <div className="mt-10 hidden border-l border-[#7C3AED]/30 pl-5 lg:block">
                <p className="text-sm leading-6 text-white/50">
                  Good work doesn't need unnecessary complexity.
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/20">
                  Tiny Dream Games
                </p>
              </div>
            </div>

            {/* ================= RIGHT PROCESS ================= */}
            <div className="relative">
              {/* STEP 01 */}
              <div className="group relative border-t border-white/[0.08] py-7 transition-all duration-500 hover:border-[#7C3AED]/30 sm:py-8">
                <div className="grid gap-5 sm:grid-cols-[80px_1fr_auto] sm:items-start">
                  {/* Number */}
                  <div className="flex items-center gap-3 sm:block">
                    <span className="text-sm font-medium text-[#A78BFA]">
                      01
                    </span>

                    <span className="h-px w-6 bg-[#7C3AED]/30 sm:mt-3 sm:block" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA] shadow-[0_0_10px_rgba(167,139,250,0.5)]" />

                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                        Discover
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                      Let's talk.
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/35">
                      We understand your idea, goals, audience and what you want
                      the final product to achieve.
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/20 transition-all duration-300 group-hover:border-[#7C3AED]/30 group-hover:bg-[#7C3AED]/10 group-hover:text-[#A78BFA] sm:flex">
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* STEP 02 */}
              <div className="group relative border-t border-white/[0.08] py-7 transition-all duration-500 hover:border-[#A78BFA]/30 sm:py-8">
                <div className="grid gap-5 sm:grid-cols-[80px_1fr_auto] sm:items-start">
                  <div className="flex items-center gap-3 sm:block">
                    <span className="text-sm font-medium text-[#C084FC]">
                      02
                    </span>

                    <span className="h-px w-6 bg-[#A78BFA]/30 sm:mt-3 sm:block" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C084FC] shadow-[0_0_10px_rgba(192,132,252,0.5)]" />

                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#C084FC]">
                        Plan
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                      Shape the idea.
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/35">
                      We define the scope, features, technology and direction
                      before development begins.
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/20 transition-all duration-300 group-hover:border-[#A78BFA]/30 group-hover:bg-[#A78BFA]/10 group-hover:text-[#C084FC] sm:flex">
                    →
                  </div>
                </div>
              </div>

              {/* STEP 03 */}
              <div className="group relative border-t border-white/[0.08] py-7 transition-all duration-500 hover:border-[#C084FC]/30 sm:py-8">
                <div className="grid gap-5 sm:grid-cols-[80px_1fr_auto] sm:items-start">
                  <div className="flex items-center gap-3 sm:block">
                    <span className="text-sm font-medium text-[#D8B4FE]">
                      03
                    </span>

                    <span className="h-px w-6 bg-[#C084FC]/30 sm:mt-3 sm:block" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D8B4FE] shadow-[0_0_10px_rgba(216,180,254,0.5)]" />

                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D8B4FE]">
                        Build
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                      Make it real.
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/35">
                      Design and development come together as we turn the plan
                      into a working digital experience.
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/20 transition-all duration-300 group-hover:border-[#C084FC]/30 group-hover:bg-[#C084FC]/10 group-hover:text-[#D8B4FE] sm:flex">
                    →
                  </div>
                </div>
              </div>

              {/* STEP 04 */}
              <div className="group relative border-y border-white/[0.08] py-7 transition-all duration-500 hover:border-[#FACC15]/30 sm:py-8">
                <div className="grid gap-5 sm:grid-cols-[80px_1fr_auto] sm:items-start">
                  <div className="flex items-center gap-3 sm:block">
                    <span className="text-sm font-medium text-[#FACC15]">
                      04
                    </span>

                    <span className="h-px w-6 bg-[#FACC15]/30 sm:mt-3 sm:block" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15] shadow-[0_0_10px_rgba(250,204,21,0.5)]" />

                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#FACC15]">
                        Launch
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                      Ship & grow.
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/35">
                      We test, refine and prepare the final product for launch,
                      delivery and future improvements.
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/20 transition-all duration-300 group-hover:border-[#FACC15]/30 group-hover:bg-[#FACC15]/10 group-hover:text-[#FACC15] sm:flex">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM STRIP ================= */}
          <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15] shadow-[0_0_10px_rgba(250,204,21,0.5)]" />

              <p className="text-xs text-white/30">
                Clear communication. Thoughtful development.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#A78BFA] transition hover:text-white"
            >
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
              <Reviews />
      
              {/* FAQ */}
              <section className="mx-auto max-w-4xl px-6 py-18 lg:px-8">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                    FAQ
                  </p>
      
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Frequently asked questions.
                  </h2>
      
                  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
                    Everything you need to know before starting your game development
                    project.
                  </p>
                </div>
      
                <div className="mt-12">
                  <FAQ faqs={faqs} />
                </div>
      </section>
      
      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#111827] px-6 py-24 text-white lg:px-10 lg:py-18"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#7C3AED]/[0.06] blur-[150px]" />

        <div className="pointer-events-none absolute right-[-180px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#FACC15]/[0.025] blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ================= HEADER ================= */}
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#FACC15]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#A78BFA]">
                Start a Project
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-5xl lg:text-[62px]">
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                Let's build it.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              Tell us a little about what you're building. Whether it's a game,
              website or application, we'll start from there.
            </p>
          </div>

          {/* ================= CONTACT AREA ================= */}
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            {/* ================= LEFT INFO ================= */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-br from-[#17142D] via-[#161A30] to-[#121827] p-7 sm:p-9">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-[90px]" />

              <div className="relative flex h-full flex-col">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                    Let's create
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    From a tiny idea
                    <br />
                    to something real.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/35">
                    You don't need to have everything figured out before
                    reaching out. Give us the idea and we'll take it from there.
                  </p>
                </div>

                {/* Services */}
                <div className="mt-10 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/55">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#A78BFA]">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7.5 8h9a4.5 4.5 0 0 1 4.35 5.65l-1.05 4.1a2.5 2.5 0 0 1-4.55.65L14 16H10l-1.25 2.4a2.5 2.5 0 0 1-4.55-.65l-1.05-4.1A4.5 4.5 0 0 1 7.5 8Z" />
                      </svg>
                    </span>
                    Game Development
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/55">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#A78BFA]/20 bg-[#A78BFA]/10 text-[#A78BFA]">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M3 8h18" />
                      </svg>
                    </span>
                    Web Development
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/55">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#FACC15]/20 bg-[#FACC15]/10 text-[#FACC15]">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="6" y="3" width="12" height="18" rx="2.5" />
                        <path d="M10 6h4" />
                      </svg>
                    </span>
                    App Development
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-auto pt-12">
                  <div className="border-t border-white/[0.07] pt-6">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                      Tiny Dream Games
                    </p>

                    <p className="mt-2 text-sm text-white/35">
                      Small Team. Big Dreams.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= FORM ================= */}
            <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-9">
              <form className="space-y-6">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-white/50"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#7C3AED]/50 focus:bg-white/[0.05]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium text-white/50"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#7C3AED]/50 focus:bg-white/[0.05]"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="mb-3 block text-xs font-medium text-white/50">
                    What are you building?
                  </label>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <label className="group cursor-pointer">
                      <input
                        type="radio"
                        name="projectType"
                        value="game"
                        className="peer sr-only"
                      />

                      <span className="flex h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 text-xs text-white/40 transition peer-checked:border-[#7C3AED]/50 peer-checked:bg-[#7C3AED]/10 peer-checked:text-[#A78BFA] group-hover:border-white/15">
                        Game
                      </span>
                    </label>

                    <label className="group cursor-pointer">
                      <input
                        type="radio"
                        name="projectType"
                        value="website"
                        className="peer sr-only"
                      />

                      <span className="flex h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 text-xs text-white/40 transition peer-checked:border-[#A78BFA]/50 peer-checked:bg-[#A78BFA]/10 peer-checked:text-[#C084FC] group-hover:border-white/15">
                        Website
                      </span>
                    </label>

                    <label className="group cursor-pointer">
                      <input
                        type="radio"
                        name="projectType"
                        value="app"
                        className="peer sr-only"
                      />

                      <span className="flex h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 text-xs text-white/40 transition peer-checked:border-[#FACC15]/50 peer-checked:bg-[#FACC15]/10 peer-checked:text-[#FACC15] group-hover:border-white/15">
                        App
                      </span>
                    </label>

                    <label className="group cursor-pointer">
                      <input
                        type="radio"
                        name="projectType"
                        value="other"
                        className="peer sr-only"
                      />

                      <span className="flex h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 text-xs text-white/40 transition peer-checked:border-white/20 peer-checked:bg-white/[0.07] peer-checked:text-white group-hover:border-white/15">
                        Other
                      </span>
                    </label>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-xs font-medium text-white/50"
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="h-12 w-full appearance-none rounded-xl border border-white/[0.08] bg-[#171B2A] px-4 text-sm text-white/50 outline-none transition focus:border-[#7C3AED]/50"
                  >
                    <option value="" disabled>
                      Select a budget range
                    </option>

                    <option value="under-25k">Under ₹25,000</option>

                    <option value="25k-50k">₹25,000 – ₹50,000</option>

                    <option value="50k-1l">₹50,000 – ₹1,00,000</option>

                    <option value="1l-3l">₹1,00,000 – ₹3,00,000</option>

                    <option value="3l-plus">₹3,00,000+</option>

                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-white/50"
                  >
                    Tell us about your project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your idea, goals, features or anything else you'd like us to know..."
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition focus:border-[#7C3AED]/50 focus:bg-white/[0.05]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(124,58,237,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(124,58,237,0.28)]"
                >
                  Send Project Enquiry
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-center text-[10px] leading-5 text-white/20">
                  We'll review your idea and get back to you with the next
                  steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM FOOTER ================= */}
      <Footer/>
    </main>
  );
}
