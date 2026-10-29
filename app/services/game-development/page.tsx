import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/reviews";


export const metadata: Metadata = {
  title: "Game Development Services",
  description:
    "Tiny Dream Games provides game development services, including Unity game development, 2D and 3D games, mobile games, and custom game prototypes.",

  alternates: {
    canonical: "/services/game-development",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tiny Dream Games",
    url: "/services/game-development",
    title: "Game Development Services | Tiny Dream Games",
    description:
      "Explore Unity game development, 2D and 3D game creation, mobile games, and custom game development services by Tiny Dream Games.",
    images: [
      {
        url: "/tiny-dream-logo.png",
        alt: "Tiny Dream Games — Game Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Game Development Services | Tiny Dream Games",
    description:
      "Unity, 2D, 3D, and mobile game development services by Tiny Dream Games.",
    images: ["/tiny-dream-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};



const gameDevelopmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.tinydreamgames.com/services/game-development#service",
      name: "Game Development Services",
      serviceType: "Game Development",
      url: "https://www.tinydreamgames.com/services/game-development",
      description:
        "Tiny Dream Games provides game development services for businesses, creators, and projects requiring custom game experiences.",
      provider: {
        "@type": "Organization",
        "@id": "https://www.tinydreamgames.com/#organization",
        name: "Tiny Dream Games",
        url: "https://www.tinydreamgames.com/",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tinydreamgames.com/services/game-development#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What game development services do you offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tiny Dream Games offers custom game development services, including 2D game development, mobile game development, gameplay programming, game UI implementation and prototype development based on project requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How much does custom game development cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Game development costs depend on the game's complexity, platform, graphics, gameplay mechanics, features and development scope. We discuss your game idea and requirements before determining a suitable project quotation.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to develop a game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The development timeline depends on the game's scope, art requirements, gameplay systems, number of levels, testing and target platforms. A small prototype generally requires less time than a complete, feature-rich game.",
          },
        },
        {
          "@type": "Question",
          name: "Do you develop games using Unity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Unity can be used for suitable game projects, including 2D and 3D games, gameplay systems, user interfaces, physics interactions and mobile game experiences, depending on the project requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can you develop 2D and 3D games?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can work on 2D and 3D game development projects based on their requirements, including gameplay mechanics, player controls, level design implementation, user interfaces and other required game systems.",
          },
        },
        {
          "@type": "Question",
          name: "Do you develop games for Android and mobile devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can develop mobile-focused game experiences with touch controls, responsive game interfaces and performance considerations. Supported platforms and device requirements are determined during project planning.",
          },
        },
        {
          "@type": "Question",
          name: "Can you turn my game idea into a playable prototype?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A game prototype can help test the core gameplay, controls and main mechanics before full production. The prototype scope depends on your concept, desired features and project requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can you add custom gameplay mechanics and features?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on the project scope, custom gameplay features may include player movement, combat systems, enemy AI, scoring, health systems, level progression, game menus and sound effects.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help publish my game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Game publishing requirements depend on the target platform and project scope. We can discuss build preparation, platform requirements and the technical steps needed to prepare a game for release.",
          },
        },
        {
          "@type": "Question",
          name: "Can you improve or update an existing game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Existing games may need bug fixes, gameplay improvements, UI updates, performance optimization or new features. We can review the project's requirements and technical setup to determine the appropriate improvements.",
          },
        },
      ],
    },
  ],
};

function GameDevelopmentJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(gameDevelopmentSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}



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
    question: "What game development services do you offer?",
    answer:
      "Tiny Dream Games offers custom game development services, including 2D game development, mobile game development, gameplay programming, game UI implementation and prototype development based on project requirements.",
  },
  {
    question: "How much does custom game development cost?",
    answer:
      "Game development costs depend on the game's complexity, platform, graphics, gameplay mechanics, features and development scope. We discuss your game idea and requirements before determining a suitable project quotation.",
  },
  {
    question: "How long does it take to develop a game?",
    answer:
      "The development timeline depends on the game's scope, art requirements, gameplay systems, number of levels, testing and target platforms. A small prototype generally requires less time than a complete, feature-rich game.",
  },
  {
    question: "Do you develop games using Unity?",
    answer:
      "Yes. Unity can be used for suitable game projects, including 2D and 3D games, gameplay systems, user interfaces, physics interactions and mobile game experiences, depending on the project requirements.",
  },
  {
    question: "Can you develop 2D and 3D games?",
    answer:
      "We can work on 2D and 3D game development projects based on their requirements, including gameplay mechanics, player controls, level design implementation, user interfaces and other required game systems.",
  },
  {
    question: "Do you develop games for Android and mobile devices?",
    answer:
      "We can develop mobile-focused game experiences with touch controls, responsive game interfaces and performance considerations. Supported platforms and device requirements are determined during project planning.",
  },
  {
    question: "Can you turn my game idea into a playable prototype?",
    answer:
      "A game prototype can help test the core gameplay, controls and main mechanics before full production. The prototype scope depends on your concept, desired features and project requirements.",
  },
  {
    question: "Can you add custom gameplay mechanics and features?",
    answer:
      "Yes. Depending on the project scope, custom gameplay features may include player movement, combat systems, enemy AI, scoring, health systems, level progression, game menus and sound effects.",
  },
  {
    question: "Can you help publish my game?",
    answer:
      "Game publishing requirements depend on the target platform and project scope. We can discuss build preparation, platform requirements and the technical steps needed to prepare a game for release.",
  },
  {
    question: "Can you improve or update an existing game?",
    answer:
      "Existing games may need bug fixes, gameplay improvements, UI updates, performance optimization or new features. We can review the project's requirements and technical setup to determine the appropriate improvements.",
  },
];


export default function GameDevelopmentPage() {
  return (
    <>
      <GameDevelopmentJsonLd />
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
                <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  {/* PORTRAIT GAMEPLAY VIDEO */}
                  <div className="relative mx-auto w-full max-w-[320px]">
                    <div className="absolute -inset-5 rounded-[40px] bg-purple-600/10 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0B1020] p-2.5 shadow-2xl">
                      <div className="relative aspect-[9/16] overflow-hidden rounded-[24px] bg-black">
                        <video
                          src="/videos/brick-breaker-game-play.mp4"
                          poster="/image/brick-breaker/screenshot-1.webp"
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          preload="metadata"
                          className="absolute inset-0 h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                        />

                        {/* GRADIENT OVERLAY */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1020]/50 via-transparent to-[#0B1020]/20" />

                        {/* STATUS */}
                        <div className="pointer-events-none absolute left-4 top-4">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111827]/75 px-3 py-2 backdrop-blur-xl">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
                            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/80">
                              Mobile Gameplay
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* VIDEO CAPTION */}
                    <p className="mt-4 text-center text-xs tracking-wide text-white/35">
                      BRICK BREAKER · UNITY 2D
                    </p>
                  </div>

                  {/* GAME INFORMATION */}
                  <div className="lg:py-8">
                    {/* CATEGORY */}
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                      Arcade · Casual · Mobile
                    </p>

                    {/* TITLE */}
                    <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                      BRICK
                      <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                        BREAKER
                      </span>
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                      A classic brick-breaking arcade game developed by Tiny
                      Dream Games. Control the paddle, keep the ball in play and
                      break through challenging brick formations in a responsive
                      2D mobile gaming experience powered by Unity.
                    </p>

                    {/* GAME DETAILS */}
                    <div className="mt-8 space-y-4 border-y border-white/[0.08] py-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs text-white/35">Platform</span>
                        <span className="text-xs text-white/75">Mobile</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs text-white/35">Engine</span>
                        <span className="text-xs text-white/75">Unity 2D</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs text-white/35">Genre</span>
                        <span className="text-xs text-white/75">
                          Arcade · Casual
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs text-white/35">Developer</span>
                        <span className="text-xs text-white/75">
                          Tiny Dream Games
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs text-white/35">Status</span>
                        <span className="inline-flex items-center gap-2 text-xs text-[#A78BFA]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
                          In Development
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-7">
                      <a
                        href="/games/brick-breaker"
                        className="group/link inline-flex items-center gap-3 text-sm font-medium text-white transition"
                      >
                        <span>Explore Game</span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition duration-300 group-hover/link:border-[#A78BFA]/30 group-hover/link:bg-[#7C3AED]/10 group-hover/link:text-[#A78BFA]">
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
    </>
  );
}
