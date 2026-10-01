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
        <section id="games" className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Our Work
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Built. Played. Experienced.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Explore games and prototypes created by Tiny Dream Games.
              </p>
            </div>

            <Link
              href="/#games"
              className="text-sm font-semibold text-[#A78BFA] transition hover:text-white"
            >
              View all games →
            </Link>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {games.map((game, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E] transition duration-300 hover:-translate-y-1 hover:border-purple-400/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-purple-900/40 to-[#0B1020]">
                  {/* Replace with next/image when you add actual images */}

                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-[#A78BFA]">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M14.5 6.5h-5A5.5 5.5 0 0 0 4 12v1.5a3.5 3.5 0 0 0 6.7 1.4l.5-1h1.6l.5 1a3.5 3.5 0 0 0 6.7-1.4V12a5.5 5.5 0 0 0-5.5-5.5Z" />
                          <path d="M8 10v4M6 12h4M16.5 11h.01M18.5 13h.01" />
                        </svg>
                      </div>

                      <p className="text-sm text-gray-500">
                        Game Preview {index + 1}
                      </p>
                    </div>
                  </div>

                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs backdrop-blur-md">
                    {game.status}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA]">
                    {game.genre}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">{game.title}</h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {game.description}
                  </p>

                  <button className="mt-6 inline-flex items-center text-sm font-semibold text-white transition group-hover:text-[#A78BFA]">
                    View Project
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </article>
            ))}
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
