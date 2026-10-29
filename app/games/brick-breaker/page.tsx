import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Brick Breaker – Free Arcade Game",
  description:
    "Play Brick Breaker by Tiny Dream Games, a classic brick-breaking arcade game. Break bricks, beat your high score and enjoy the gameplay online.",

  alternates: {
    canonical: "/games/brick-breaker",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tiny Dream Games",
    url: "/games/brick-breaker",
    title: "Brick Breaker | Tiny Dream Games",
    description:
      "Discover Brick Breaker, an arcade game by Tiny Dream Games. Play, break bricks and challenge your high score.",
    images: [
      {
        url: "/tiny-dream-logo.png",
        alt: "Brick Breaker by Tiny Dream Games",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brick Breaker | Tiny Dream Games",
    description:
      "Play Brick Breaker, a classic arcade game by Tiny Dream Games.",
    images: ["/tiny-dream-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const brickBreakerSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "@id": "https://www.tinydreamgames.com/games/brick-breaker#game",
  name: "Brick Breaker",
  url: "https://www.tinydreamgames.com/games/brick-breaker",
  description:
    "Brick Breaker is an arcade game developed by Tiny Dream Games. Players break bricks and aim to improve their scores.",
  genre: ["Arcade", "Casual"],
  gamePlatform: "Web browser",
  author: {
    "@type": "Organization",
    "@id": "https://www.tinydreamgames.com/#organization",
    name: "Tiny Dream Games",
    url: "https://www.tinydreamgames.com/",
  },
};

function BrickBreakerJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(brickBreakerSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}


const features = [
  {
    number: "01",
    title: "Smooth Ball Physics",
    description:
      "Physics-based ball movement with responsive bouncing and consistent gameplay behaviour across paddle and wall collisions.",
  },
  {
    number: "02",
    title: "Paddle Controls",
    description:
      "Responsive paddle movement designed to give players precise control over ball direction and gameplay strategy.",
  },
  {
    number: "03",
    title: "Brick Destruction",
    description:
      "Interactive brick-breaking mechanics with collision detection, destructible objects and satisfying visual feedback.",
  },
  {
    number: "04",
    title: "Score System",
    description:
      "Real-time score tracking that rewards players for breaking bricks and helps them track their gameplay progress.",
  },
  {
    number: "05",
    title: "Game State Management",
    description:
      "Gameplay flow covering essential states such as playing, pausing, resuming and game over.",
  },
  {
    number: "06",
    title: "Audio & Visual Feedback",
    description:
      "Sound effects and visual responses that make ball collisions, brick destruction and important gameplay events more engaging.",
  },
];



const technologies = [
  "Unity 2D",
  "C#",
  "Rigidbody2D Physics",
  "Collision Detection",
  "Unity UI",
  "TextMeshPro",
  "Audio Systems",
  "Game State Management",
];


const challenges = [
  {
    title: "Smooth Ball Movement",
    problem:
      "Maintaining smooth and consistent ball movement while preventing unwanted jitter during fast gameplay and collisions was an important technical challenge.",
    solution:
      "The ball movement system was refined using Unity's Rigidbody2D physics, velocity management and consistent movement handling to improve gameplay responsiveness.",
  },
  {
    title: "Bounce Direction Control",
    problem:
      "Keeping ball bounce directions predictable and preventing the ball from getting stuck in repetitive horizontal or vertical movement patterns required careful tuning.",
    solution:
      "Bounce behaviour was refined by adjusting collision responses and controlling the outgoing ball direction to support more consistent arcade gameplay.",
  },
  {
    title: "Collision Detection",
    problem:
      "Ensuring reliable collisions between the ball, paddle, walls and destructible bricks was essential for accurate gameplay interactions.",
    solution:
      "Physics components, colliders and collision handling were reviewed to improve interaction consistency and reduce unwanted collision behaviour.",
  },
  {
    title: "Gameplay State Management",
    problem:
      "Keeping gameplay systems consistent during pauses, restarts and game-over transitions required coordinated control of movement and UI states.",
    solution:
      "Gameplay state handling was organized so ball movement, score updates and relevant interface elements could respond correctly to game events.",
  },
];


const developmentSteps = [
  {
    number: "01",
    title: "Concept & Planning",
    description:
      "Defined the core Brick Breaker gameplay concept, arcade mechanics, player controls and overall game experience.",
  },
  {
    number: "02",
    title: "Core Prototype",
    description:
      "Built the initial gameplay prototype with ball movement, paddle controls, wall boundaries and basic brick interactions.",
  },
  {
    number: "03",
    title: "Physics & Collisions",
    description:
      "Refined Rigidbody2D physics, ball bouncing behaviour and collision handling to create more responsive and consistent gameplay.",
  },
  {
    number: "04",
    title: "Gameplay Systems",
    description:
      "Implemented brick destruction, score tracking, health management and essential gameplay states such as pause and game over.",
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description:
      "Tested gameplay behaviour, investigated movement inconsistencies, fixed collision issues and improved performance across game sessions.",
  },
  {
    number: "06",
    title: "UI & Final Polish",
    description:
      "Refined the user interface, sound effects, gameplay feedback and overall presentation to deliver a polished 2D arcade experience.",
  },
];

export default function FPSGamePage() {
  return (
    <>
      <BrickBreakerJsonLd />
      <main className="min-h-screen overflow-hidden bg-[#111827] text-white">
        <Navbar />
        {/* HERO */}
        <section
          id="game"
          className="relative overflow-hidden border-b border-white/10"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(250,204,21,0.06),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-38 lg:px-8 lg:pb-28 lg:pt-38">
            <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT CONTENT */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
                  <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
                  Mobile Game
                </div>

                <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Brick Breaker
                  <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                    Game Project.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
                  A fast-paced 2D arcade game developed in Unity, featuring
                  smooth ball physics, paddle controls, destructible bricks,
                  score tracking and progressively challenging gameplay.
                </p>

                {/* ACTION BUTTONS */}
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://tinydreamgames.itch.io/brick-breaker"
                    className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-7 py-4 font-semibold transition duration-300 hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Play The Game
                    <span className="ml-2">→</span>
                  </a>

                  <a
                    href="#development"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition duration-300 hover:bg-white/10"
                  >
                    Explore Development
                  </a>
                </div>

                {/* GAME DETAILS */}
                <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
                  <div>
                    <p className="text-xl font-semibold sm:text-2xl">Arcade</p>
                    <p className="mt-1 text-sm text-gray-500">Genre</p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold sm:text-2xl">Unity</p>
                    <p className="mt-1 text-sm text-gray-500">Engine</p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold sm:text-2xl">2D</p>
                    <p className="mt-1 text-sm text-gray-500">Gameplay</p>
                  </div>
                </div>
              </div>

              {/* RIGHT: GAMEPLAY VIDEO */}
              <div className="relative">
                <div className="absolute -inset-8 rounded-[40px] bg-purple-600/10 blur-3xl" />

                <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[30px] border border-white/10 bg-[#151D2E] p-3 shadow-2xl">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-black">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      poster="/games/brick-breaker/thumbnail.webp"
                      className="absolute inset-0 h-full w-full object-contain"
                    >
                      <source
                        src="/videos/brick-breaker-game-play.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support HTML5 video.
                    </video>

                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md">
                      Mobile Gameplay
                    </div>
                  </div>
                </div>

                {/* BOTTOM GAME LABEL */}
                <div className="relative mt-5 flex items-center justify-between px-2">
                  <div>
                    <p className="font-semibold text-white">Brick Breaker</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Classic arcade. Smooth action.
                    </p>
                  </div>

                  <div className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-200">
                    Unity 2D
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT THE GAME */}
        <section
          id="about"
          className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* SECTION HEADING */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                About The Game
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Reimagining the classic
                <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                  Brick Breaker experience.
                </span>
              </h2>

              <div className="mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#FACC15]" />
            </div>

            {/* GAME DESCRIPTION */}
            <div className="space-y-6 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                Brick Breaker is a 2D arcade game developed by
                <span className="font-medium text-white">
                  {" "}
                  Tiny Dream Games
                </span>
                , an independent game studio focused on creating engaging
                gameplay experiences through thoughtful design, polished
                mechanics and accessible interactive entertainment.
              </p>

              <p>
                Inspired by the timeless brick-breaking genre, the game brings
                together responsive paddle controls, smooth ball physics,
                destructible bricks, score progression and satisfying arcade
                action. Every interaction is designed to make gameplay feel
                intuitive, rewarding and challenging.
              </p>

              <p>
                Built with Unity, this project explores the fundamentals of 2D
                game development, including physics-based movement, collision
                detection, gameplay state management, sound effects and
                performance optimization.
              </p>

              <p className="text-gray-400">
                At Tiny Dream Games, we believe great games begin with simple
                ideas and are brought to life through creativity,
                experimentation and attention to detail. Brick Breaker reflects
                our approach to building memorable indie games while
                continuously improving our game development craft.
              </p>

              {/* STUDIO LINK */}
              <div className="pt-3">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 font-semibold text-[#A78BFA] transition hover:text-white"
                >
                  Discover Tiny Dream Games
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* GAMEPLAY GALLERY */}
        <section
          className="border-y border-white/10 bg-[#0D1422]"
          id="screenshots"
        >
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Gameplay
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Inside the game.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Screenshots and gameplay moments from the development process.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Screenshot 1 */}
              <div className="group mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E]">
                <img
                  src="/image/brick-breaker/screenshot-1.webp"
                  alt="Brick Breaker mobile gameplay showing Main Menu"
                  loading="lazy"
                  className="aspect-[9/16] h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Screenshot 2 */}
              <div className="group mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E]">
                <img
                  src="/image/brick-breaker/screenshot-2.webp"
                  alt="Brick Breaker mobile arcade Rewards"
                  loading="lazy"
                  className="aspect-[9/16] h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Screenshot 3 */}
              <div className="group mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E]">
                <img
                  src="/image/brick-breaker/screenshot-3.webp"
                  alt="Achivement Scene"
                  loading="lazy"
                  className="aspect-[9/16] h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              {/* Screenshot 4 */}
              <div className="group mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E]">
                <img
                  src="/image/brick-breaker/screenshot-4.webp"
                  alt="Brick Breaker mobile gameplay showing ball and paddle"
                  loading="lazy"
                  className="aspect-[9/16] h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Screenshot 5 */}
              <div className="group mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E]">
                <img
                  src="/image/brick-breaker/screenshot-5.webp"
                  alt="Brick Breaker mobile arcade gameplay and destructible bricks"
                  loading="lazy"
                  className="aspect-[9/16] h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Screenshot 6 */}
              <div className="group mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E]">
                <img
                  src="/image/brick-breaker/screenshot-6.webp"
                  alt="Brick Breaker  game Over interface and score display"
                  loading="lazy"
                  className="aspect-[9/16] h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
        {/* FEATURES */}
        <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              Gameplay Systems
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              What is inside the game.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group bg-[#111827] p-8 transition hover:bg-[#151E30]"
              >
                <span className="text-sm font-medium text-[#FACC15]">
                  {feature.number}
                </span>

                <h3 className="mt-7 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-7 h-px w-10 bg-[#7C3AED] transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </section>
        {/* TECHNOLOGY */}
        <section className="border-y border-white/10 bg-[#0D1422]">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                  Technology
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Tools behind the experience.
                </h2>

                <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">
                  The project combines engine systems, gameplay programming,
                  navigation, visual effects and 3D development tools.
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
          </div>
        </section>
        {/* DEVELOPMENT STRATEGY */}
        <section
          id="development"
          className="mx-auto max-w-7xl px-6 py-18 lg:px-8"
        >
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Development Strategy
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Build the core first. Then make it better.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                The project was approached by building the fundamental gameplay
                experience first and gradually introducing more complex systems.
              </p>
            </div>

            <div className="space-y-5">
              {developmentSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 rounded-2xl border border-white/10 bg-[#151D2E] p-6 sm:grid-cols-[60px_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-sm font-bold text-[#A78BFA]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>

                    <p className="mt-2 leading-7 text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CHALLENGES */}
        <section className="border-y border-white/10 bg-[#0D1422]">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Challenges & Solutions
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                What went wrong — and what I learned.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Game development is an iterative process. These were some of the
                technical problems encountered while building the project.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {challenges.map((challenge, index) => (
                <article
                  key={index}
                  className="rounded-3xl border border-white/10 bg-[#111827] p-8"
                >
                  <h3 className="text-2xl font-semibold">{challenge.title}</h3>

                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                      Challenge
                    </p>

                    <p className="mt-3 leading-7 text-gray-400">
                      {challenge.problem}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-white/10 pt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
                      Solution
                    </p>

                    <p className="mt-3 leading-7 text-gray-300">
                      {challenge.solution}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* MOBILE GAME CONTROLS */}
        <section
          id="controls"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Mobile Controls
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Tap. Move.
                <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                  Break Every Brick.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
                Designed for mobile gaming, Brick Breaker focuses on intuitive
                touch interactions and responsive paddle movement. Guide the
                ball, break the bricks and keep the action going with simple,
                accessible controls.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-[#A78BFA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 11V8a2 2 0 0 0-4 0v3" />
                    <path d="M14 10V6a2 2 0 0 0-4 0v5" />
                    <path d="M10 10V8a2 2 0 0 0-4 0v8l-1.5-1.5a2.1 2.1 0 0 0-3 3L6 22h9a5 5 0 0 0 5-5v-4a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-white">Built for Touch</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Simple and intuitive mobile interaction
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTROL CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#151D2E] p-6 transition duration-300 hover:border-purple-400/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-[#A78BFA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                  </svg>
                </div>

                <p className="mt-5 text-sm text-gray-500">Paddle Movement</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Touch & Drag
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Move your finger horizontally to position the paddle.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#151D2E] p-6 transition duration-300 hover:border-purple-400/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-[#A78BFA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3v18" />
                    <path d="m5 10 7-7 7 7" />
                    <path d="M5 14h14" />
                  </svg>
                </div>

                <p className="mt-5 text-sm text-gray-500">Ball Control</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Tap to Launch
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Start the ball with a tap when the launch interaction is
                  enabled.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#151D2E] p-6 transition duration-300 hover:border-purple-400/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-[#A78BFA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3v18" />
                    <path d="m7 8 5-5 5 5" />
                    <path d="m7 16 5 5 5-5" />
                  </svg>
                </div>

                <p className="mt-5 text-sm text-gray-500">Quick Reactions</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Precise Timing
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  React to every bounce and position the paddle to keep the ball
                  in play.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#151D2E] p-6 transition duration-300 hover:border-purple-400/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-[#A78BFA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="3" />
                    <path d="M11 18h2" />
                  </svg>
                </div>

                <p className="mt-5 text-sm text-gray-500">Mobile Experience</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Play Anywhere
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  An arcade experience designed for compatible mobile devices.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* PLAY */}
        <section id="play" className="px-6 pb-24 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-purple-400/20 bg-gradient-to-br from-[#241449] via-[#171E31] to-[#111827] px-7 py-16 text-center sm:px-12 lg:py-18">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Play The Project
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Experience the game yourself.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Try the playable build and experience the mechanics that were
                developed throughout the project.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                {/* Replace this link with your actual playable game URL */}
                <a
                  href="https://tinydreamgames.itch.io/brick-breaker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-8 py-4 font-semibold transition hover:bg-[#6D28D9]"
                >
                  Play Game
                  <span className="ml-2">↗</span>
                </a>

                <a
                  href="#screenshots"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10"
                >
                  View Screenshots
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FLOATING FEEDBACK BUTTON */}
        <a
          href="https://forms.gle/Xkf2tKPeiqVvBkw67"
          target="_blank"
          aria-label="Send feedback to Tiny Dream Games"
          className="group fixed bottom-6 left-6 z-50 inline-flex items-center gap-3 rounded-full border border-purple-400/30 bg-[#151D2E]/95 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple-950/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-[#1C2540] sm:bottom-8 sm:left-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#A78BFA] transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
          </svg>

          <span>Feedback</span>

          <span
            aria-hidden="true"
            className="text-[#A78BFA] transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

        <Footer />
      </main>
    </>
  );
}
