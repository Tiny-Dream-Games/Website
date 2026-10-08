import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/reviews";

export const metadata: Metadata = {
  title: "Game Development Services | Tiny Dream Games",
  description:
    "Tiny Dream Games creates engaging 2D and 3D games for mobile and digital platforms, from game concepts and prototypes to development, optimization and launch.",
  alternates: {
    canonical: "/services/game-development",
  },
  openGraph: {
    title: "Game Development Services | Tiny Dream Games",
    description:
      "From game concept to playable product — Tiny Dream Games builds polished and engaging games for modern platforms.",
    url: "/services/game-development",
    siteName: "Tiny Dream Games",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "2D Game Development",
    description:
      "Engaging 2D experiences with responsive controls, polished mechanics and memorable visual design.",
  },
  {
    number: "02",
    title: "3D Game Development",
    description:
      "Immersive 3D games with environments, characters, gameplay systems and optimized performance.",
  },
  {
    number: "03",
    title: "Mobile Game Development",
    description:
      "Mobile-first games designed around touch controls, performance and smooth player experiences.",
  },
  {
    number: "04",
    title: "Game Prototyping",
    description:
      "Turn an early idea into a playable prototype so gameplay concepts can be tested quickly.",
  },
  {
    number: "05",
    title: "Game UI & UX",
    description:
      "Clean menus, HUDs, buttons and interfaces designed to make every interaction feel intuitive.",
  },
  {
    number: "06",
    title: "Game Optimization",
    description:
      "Performance improvements, bug fixing, asset optimization and device-focused testing.",
  },
];

const games = [
  {
    title: "Your Game Title",
    genre: "Action • Mobile",
    description:
      "A fast-paced game experience currently being developed by Tiny Dream Games.",
    image: "/games/game-1.jpg",
    status: "In Development",
  },
  {
    title: "Your Game Title",
    genre: "Adventure • Mobile",
    description:
      "An original gameplay concept focused on exploration, challenge and replayability.",
    image: "/games/game-2.jpg",
    status: "Prototype",
  },
  {
    title: "Your Game Title",
    genre: "Casual • Mobile",
    description:
      "A simple-to-learn, engaging game concept designed for short and repeat play sessions.",
    image: "/games/game-3.jpg",
    status: "Coming Soon",
  },
];

const technologies = ["Unity", "C#", "Blender", "Firebase", "Android", "iOS"];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your idea, target audience, gameplay vision and project goals.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the core mechanics, game loop, features, assets and development roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The game is developed through iterative builds with continuous testing and refinement.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We polish, optimize and prepare the final product for its target platform.",
  },
];

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

export default function GameDevelopmentPage() {
    return (
      <main className="min-h-screen overflow-hidden bg-[#111827] text-white">
        {/* ================= NAVBAR ================= */}
        <Navbar />
        {/* HERO */}
        <section className="relative border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(124,58,237,0.22),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(250,204,21,0.06),transparent_30%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-35">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
                <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
                Game Development Studio
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                We Build Games
                <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                  People Remember.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
                From a simple game idea to a polished playable product, Tiny
                Dream Games creates engaging experiences built around strong
                gameplay, thoughtful design and technical performance.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-7 py-4 font-semibold transition hover:bg-[#6D28D9]"
                >
                  Start Your Game
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="#games"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
                >
                  View Our Games
                </Link>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-7">
                <div>
                  <p className="text-2xl font-semibold">2D & 3D</p>
                  <p className="mt-1 text-sm text-gray-400">Game Development</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">Mobile</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Focused Experiences
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">Unity</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Development Stack
                  </p>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-[40px] bg-purple-600/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#151D2E] p-3 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src="/videos/gameplay.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs backdrop-blur-md">
                    Tiny Dream Games
                  </div>

                  <div className="absolute right-4 top-4 rounded-full bg-[#FACC15] px-3 py-1.5 text-xs font-bold text-[#111827]">
                    GAMEPLAY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                What We Do
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Ideas are just the beginning.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-300">
                Great games are built through hundreds of small decisions —
                gameplay mechanics, controls, visuals, performance and player
                experience. We bring these pieces together to turn concepts into
                playable products.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Whether you have a complete game concept or only a rough idea,
                we can help shape it into a focused and enjoyable experience.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-y border-white/10 bg-[#0D1422]">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Our Capabilities
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Everything your game needs.
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group bg-[#111827] p-8 transition hover:bg-[#151E30]"
                >
                  <span className="text-sm font-medium text-[#FACC15]">
                    {service.number}
                  </span>

                  <h3 className="mt-7 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[#7C3AED] transition-all duration-300 group-hover:w-20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKING PRODUCTS */}
        <section
          id="games"
          className="relative overflow-hidden bg-[#111827] px-6 py-24 lg:px-10 lg:py-28"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            {/* ================= SECTION HEADER ================= */}

            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#FACC15]" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                  Our Games
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Games we&apos;ve
                <br />
                <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                  dreamed up.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                Original games, imaginative worlds and experiences we&apos;re
                building from the ground up.
              </p>
            </div>

            {/* =========================================================
        COMPLETED / ACTIVE GAMES
    ========================================================= */}

            <div className="mt-20">
              {/* GAME 01 */}

              <article className="group">
                <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
                  {/* Visual */}
                  <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0B1020]">
                    {/* Video */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <video
                        src="/videos/gameplay.mp4"
                        poster="/logo-dark.png"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.035]"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 via-transparent to-transparent" />

                      {/* Status */}
                      <div className="absolute left-5 top-5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111827]/75 px-3.5 py-2 backdrop-blur-xl">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15] shadow-[0_0_10px_#FACC15]" />

                          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/75">
                            In Development
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="lg:py-8">
                    {/* Category */}
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                      Arcade • Casual
                    </p>

                    {/* Title */}
                    <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                      Untitled
                    </h3>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-white/45 sm:text-base">
                      Our first mobile game is currently in development. More
                      details, gameplay and the official title will be revealed
                      soon.
                    </p>

                    {/* Details */}
                    <div className="mt-8 space-y-3 border-y border-white/[0.08] py-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/35">Platform</span>

                        <span className="text-xs text-white/70">Android</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/35">Status</span>

                        <span className="text-xs text-[#A78BFA]">
                          In Development
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/35">Genre</span>

                        <span className="text-xs text-white/70">
                          Arcade • Casual
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-7">
                      <a
                        href="#"
                        className="group/link inline-flex items-center gap-3 text-sm font-medium text-white transition"
                      >
                        <span>Explore Game</span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition duration-300 group-hover/link:border-[#A78BFA]/30 group-hover/link:bg-[#7C3AED]/10 group-hover/link:text-[#A78BFA]">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* ================= FUTURE GAMES ================= */}

              <div className="mt-24 border-t border-white/[0.08] pt-16">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                      What&apos;s next
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      More worlds are coming.
                    </h3>
                  </div>

                  <p className="max-w-md text-sm leading-6 text-white/35">
                    We&apos;re constantly exploring new ideas, mechanics and
                    worlds. Some of them are still taking shape.
                  </p>
                </div>

                {/* Upcoming Game 01 */}

                <div className="mt-10 border-b border-white/[0.08] py-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-5">
                      <span className="text-xs font-medium tracking-[0.18em] text-white/20">
                        01
                      </span>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                          Upcoming Project
                        </p>

                        <h4 className="mt-1 text-lg font-medium text-white">
                          DODA - The fun ball
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-xs text-white/30">Coming Soon</span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30">
                        →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Upcoming Game 02 */}

                <div className="border-b border-white/[0.08] py-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-5">
                      <span className="text-xs font-medium tracking-[0.18em] text-white/20">
                        02
                      </span>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                          Future Project
                        </p>

                        <h4 className="mt-1 text-lg font-medium text-white">
                          Something new is brewing
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-xs text-white/30">TBA</span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-white/10 bg-[#0D1422]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                From idea to launch.
              </h2>
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-4">
              {process.map((item, index) => (
                <div key={item.number} className="relative">
                  {index !== process.length - 1 && (
                    <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-3rem)] bg-white/10 md:block" />
                  )}

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/30 bg-[#111827] text-sm font-bold text-[#A78BFA]">
                      {item.number}
                    </div>

                    <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>

                    <p className="mt-3 leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Technology
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Built with modern tools.
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">
                We choose technologies based on the requirements of the game,
                target platform and long-term project goals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-center font-medium text-gray-300 transition hover:border-purple-400/30 hover:bg-purple-500/5 hover:text-white"
                >
                  {technology}
                </div>
              ))}
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

        {/* ================= PREMIUM FOOTER ================= */}
        <Footer />
      </main>
    );
}
