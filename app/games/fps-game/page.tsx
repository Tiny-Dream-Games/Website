import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "FPS Game | Tiny Dream Games",
  description:
    "Explore the development journey, gameplay, features, technology, challenges and design decisions behind this FPS game created by Tiny Dream Games.",
  alternates: {
    canonical: "/games/fps-game",
  },
  openGraph: {
    title: "FPS Game | Tiny Dream Games",
    description:
      "Explore the gameplay, development process, technology and challenges behind this FPS game.",
    url: "/games/fps-game",
    siteName: "Tiny Dream Games",
    type: "website",
  },
};

const features = [
  {
    number: "01",
    title: "FPS Combat",
    description:
      "First-person shooting mechanics with responsive weapon controls and combat-focused gameplay.",
  },
  {
    number: "02",
    title: "Enemy AI",
    description:
      "Enemy behaviour designed around player detection, tracking and combat interactions.",
  },
  {
    number: "03",
    title: "Weapon System",
    description:
      "Weapon mechanics including shooting, loading and unloading with visual feedback.",
  },
  {
    number: "04",
    title: "Scope System",
    description:
      "A dedicated scope experience with a separate camera setup for aiming and precision gameplay.",
  },
  {
    number: "05",
    title: "Movement",
    description:
      "Player movement including walking, jumping and first-person character controls.",
  },
  {
    number: "06",
    title: "Environment",
    description:
      "Gameplay environments designed around exploration, combat spaces and level progression.",
  },
];

const technologies = [
  "Unity",
  "C#",
  "Unity NavMesh",
  "Particle Systems",
  "3D Assets",
  "Camera Systems",
];

const challenges = [
  {
    title: "Enemy Navigation",
    problem:
      "Getting enemies to navigate the environment correctly was one of the important technical challenges.",
    solution:
      "The navigation setup was worked through using Unity's NavMesh system and by adjusting the environment and navigation data.",
  },
  {
    title: "Scope Camera",
    problem:
      "The scoped view required a separate camera experience while keeping the normal first-person camera behaviour consistent.",
    solution:
      "A dedicated scope camera setup was used with controlled transitions between the normal gameplay view and scoped view.",
  },
  {
    title: "Gameplay Effects",
    problem:
      "Visual feedback such as muzzle effects needed to behave correctly during different gameplay states.",
    solution:
      "Particle effects and related gameplay elements were controlled according to the player's current weapon and camera state.",
  },
  {
    title: "Scene Consistency",
    problem:
      "Gameplay systems and visual effects needed to remain consistent when moving between different game scenes.",
    solution:
      "Scene-specific references and gameplay components were checked and adjusted so important systems continued working correctly.",
  },
];

const developmentSteps = [
  {
    number: "01",
    title: "Concept",
    description:
      "Defined the core FPS gameplay idea, player experience and main mechanics.",
  },
  {
    number: "02",
    title: "Prototype",
    description:
      "Built the basic player controller, movement, shooting and first-person interaction systems.",
  },
  {
    number: "03",
    title: "Gameplay Systems",
    description:
      "Added enemies, navigation, weapons, scope mechanics, effects and other gameplay features.",
  },
  {
    number: "04",
    title: "Level Building",
    description:
      "Created and refined multiple gameplay scenes and environments around the core mechanics.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Tested gameplay systems, identified technical issues and refined individual mechanics.",
  },
  {
    number: "06",
    title: "Polish",
    description:
      "Improved visual feedback, effects, controls and overall gameplay presentation.",
  },
];

export default function FPSGamePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111827] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(250,204,21,0.06),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-28 lg:pt-35">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
                <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
                Game Development Project
              </div>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                FPS
                <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                  Game Project.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
                A first-person shooter project built to explore combat, enemy
                AI, weapon systems, level design and real-time gameplay
                mechanics in Unity.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#play"
                  className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-7 py-4 font-semibold transition hover:bg-[#6D28D9]"
                >
                  Play The Game
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="#development"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
                >
                  Explore Development
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
                <div>
                  <p className="text-2xl font-semibold">FPS</p>
                  <p className="mt-1 text-sm text-gray-500">Genre</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">Unity</p>
                  <p className="mt-1 text-sm text-gray-500">Engine</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">3D</p>
                  <p className="mt-1 text-sm text-gray-500">Experience</p>
                </div>
              </div>
            </div>

            {/* HERO GAMEPLAY VIDEO */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-[40px] bg-purple-600/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#151D2E] p-3 shadow-2xl">
                <div className="relative aspect-video overflow-hidden rounded-[22px] bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="h-full w-full object-cover"
                  >
                    <source
                      src="/games/fps-game/gameplay.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs backdrop-blur-md">
                    Gameplay
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT GAME */}
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              About The Game
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built to explore the FPS experience.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-300">
            <p>
              This project started as an exploration of first-person gameplay
              and the different systems required to make a playable FPS
              experience.
            </p>

            <p>
              The development focused on creating the core player experience
              first and then building additional systems around combat, enemies,
              weapons, cameras and environments.
            </p>

            <p className="text-gray-400">
              The project also became an opportunity to understand how different
              gameplay systems interact with each other inside a real-time 3D
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* GAMEPLAY GALLERY */}
      <section className="border-y border-white/10 bg-[#0D1422]">
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

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E]">
              <img
                src="/games/fps-game/screenshot-1.jpg"
                alt="FPS game gameplay screenshot"
                className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E]">
              <img
                src="/games/fps-game/screenshot-2.jpg"
                alt="FPS game environment screenshot"
                className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E] md:col-span-2">
              <img
                src="/games/fps-game/screenshot-3.jpg"
                alt="FPS game combat gameplay screenshot"
                className="aspect-[21/9] h-full w-full object-cover transition duration-500 group-hover:scale-105"
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

      {/* CONTROLS */}
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              Controls
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Simple controls. Direct gameplay.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
              The control system was designed around the basic interactions
              needed for a first-person shooter experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-[#151D2E] p-6">
              <p className="text-sm text-gray-500">Movement</p>
              <p className="mt-3 text-xl font-semibold">WASD</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151D2E] p-6">
              <p className="text-sm text-gray-500">Jump</p>
              <p className="mt-3 text-xl font-semibold">Space</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151D2E] p-6">
              <p className="text-sm text-gray-500">Shoot</p>
              <p className="mt-3 text-xl font-semibold">Left Mouse</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151D2E] p-6">
              <p className="text-sm text-gray-500">Aim</p>
              <p className="mt-3 text-xl font-semibold">Right Mouse</p>
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
                href="#"
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

      {/* DEVELOPMENT NOTE */}
      <section className="border-t border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-4xl px-6 py-18 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
            What I Learned
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Every problem became part of the process.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            This project was not only about building a playable FPS. It was also
            about understanding how player systems, AI, cameras, effects,
            environments and gameplay logic work together inside a complete game
            project.
          </p>

          <Link
            href="/#games"
            className="mt-9 inline-flex items-center font-semibold text-[#A78BFA] transition hover:text-white"
          >
            ← Back to Games
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
