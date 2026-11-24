import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tiny Dream Games",
  description:
    "Learn about Tiny Dream Games, an independent game development studio creating original games and offering website and app development services.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tiny Dream Games",
    url: "/about",
    title: "About Us | Tiny Dream Games",
    description:
      "Discover Tiny Dream Games, an independent studio focused on game development, original gaming experiences and creative digital solutions.",
    images: [
      {
        url: "/tiny-dream-logo.png",
        alt: "Tiny Dream Games - About Us",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Tiny Dream Games",
    description:
      "Discover Tiny Dream Games, our passion for game development and the digital experiences we create.",
    images: ["/tiny-dream-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.tinydreamgames.com/about#webpage",
  url: "https://www.tinydreamgames.com/about",
  name: "About Us | Tiny Dream Games",
  isPartOf: {
    "@id": "https://www.tinydreamgames.com/#website",
  },
  about: {
    "@id": "https://www.tinydreamgames.com/#organization",
  },
};

function AboutPageJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(aboutPageSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}


export default function AboutPage() {
  return (
    <>
      <AboutPageJsonLd />
      <main className="min-h-screen bg-[#111827] text-white">
        {/* ================= NAVBAR ================= */}
        <Navbar />
        {/* =========================================================
          HERO
      ========================================================= */}

        <section className="relative overflow-hidden px-6 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-35">
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-[160px]" />

          <div className="pointer-events-none absolute right-[-150px] top-[30%] h-[350px] w-[350px] rounded-full bg-[#FACC15]/[0.035] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="max-w-5xl">
              {/* Label */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#FACC15]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#A78BFA]">
                  About Tiny Dream Games
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[82px]">
                Building digital
                <br />
                <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                  worlds & experiences.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                Tiny Dream Games is an independent game development studio
                focused on creating original games and engaging gameplay
                experiences. Alongside game production, we also offer website
                and app development services to bring creative digital ideas to
                life.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
          INTRO / STUDIO STORY
      ========================================================= */}

        <section className="border-t border-white/[0.06] px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Left */}

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#A78BFA]">
                The Studio
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                A small studio
                <br />
                with a long-term vision.
              </h2>
            </div>

            {/* Right */}

            <div className="space-y-6 text-sm leading-8 text-white/45 sm:text-base">
              <p>
                Tiny Dream Games was built around a simple belief: every great
                digital experience begins with an idea, but bringing that idea
                to life requires creativity, thoughtful decisions and careful
                execution.
              </p>

              <p>
                Our primary focus is game development and game production. We
                enjoy turning early concepts into playable experiences with
                distinctive gameplay mechanics, visual identity and a sense of
                purpose.
              </p>

              <p>
                Alongside developing our own games, we offer website and app
                development services for businesses, startups and clients
                looking to turn their ideas into practical, reliable digital
                products.
              </p>

              <p>
                Whether we are creating a game or building a digital solution
                for a client, our approach stays the same — understand the idea,
                focus on what matters, build with intention and keep improving
                every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
          WHAT WE BUILD
      ========================================================= */}

        <section className="border-t border-white/[0.06] bg-[#0B1020] px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#A78BFA]">
                What We Build
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Three areas.
                <br />
                One creative direction.
              </h2>
            </div>

            <div className="mt-16 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {/* Game Development */}

              <div className="grid gap-8 py-9 md:grid-cols-[80px_1fr_1fr] md:items-start">
                <span className="text-xs tracking-[0.15em] text-white/25">
                  01
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                    Game Development
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[#A78BFA]">
                    Our Core Focus
                  </p>
                </div>

                <p className="text-sm leading-7 text-white/40">
                  Original game production and custom game development focused
                  on engaging gameplay, distinctive visual identity, polished
                  mechanics and enjoyable player experiences.
                </p>
              </div>

              {/* Web Development */}

              <div className="grid gap-8 py-9 md:grid-cols-[80px_1fr_1fr] md:items-start">
                <span className="text-xs tracking-[0.15em] text-white/25">
                  02
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                    Web Development
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/30">
                    Digital Experiences
                  </p>
                </div>

                <p className="text-sm leading-7 text-white/40">
                  Modern, responsive and SEO-friendly websites designed to
                  communicate your brand, showcase your services and establish a
                  professional online presence for your business.
                </p>
              </div>

              {/* App Development */}

              <div className="grid gap-8 py-9 md:grid-cols-[80px_1fr_1fr] md:items-start">
                <span className="text-xs tracking-[0.15em] text-white/25">
                  03
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                    App Development
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/30">
                    Mobile Products
                  </p>
                </div>

                <p className="text-sm leading-7 text-white/40">
                  Custom mobile applications built around practical
                  functionality, intuitive user experiences and reliable
                  technology to support business needs and product ideas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          APPROACH
      ========================================================= */}

        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#A78BFA]">
                  Our Approach
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                  Ideas are easy.
                  <br />
                  <span className="text-white/35">
                    Execution is everything.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-8 text-white/40 sm:text-base">
                We believe great products come from balancing creativity with
                thoughtful execution. Every project deserves a clear direction,
                a structured development process and the flexibility to evolve
                as ideas take shape and new possibilities emerge.
              </p>
            </div>

            {/* Principles */}

            <div className="mt-20 grid gap-10 md:grid-cols-3">
              <div className="border-t border-white/10 pt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A78BFA]">
                  01
                </p>

                <h3 className="mt-5 text-xl font-semibold">Think Clearly</h3>

                <p className="mt-4 text-sm leading-7 text-white/35">
                  We begin by understanding the problem, audience, goals and
                  purpose of a project before moving into design or development.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A78BFA]">
                  02
                </p>

                <h3 className="mt-5 text-xl font-semibold">Build Carefully</h3>

                <p className="mt-4 text-sm leading-7 text-white/35">
                  We pay attention to the details — from functionality and
                  performance to interactions and the small design elements that
                  make an experience feel complete.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A78BFA]">
                  03
                </p>

                <h3 className="mt-5 text-xl font-semibold">Keep Improving</h3>

                <p className="mt-4 text-sm leading-7 text-white/35">
                  We see every launch as another opportunity to grow. Feedback,
                  testing and continuous refinement help products become better
                  over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          WHY TINY DREAM
      ========================================================= */}

        <section className="border-t border-white/[0.06] bg-[#0B1020] px-6 py-24 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#A78BFA]">
                Why Tiny Dream Games
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Small enough to care.
                <br />
                Focused enough to build.
              </h2>
            </div>

            <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
              <div className="flex gap-5">
                <span className="mt-1 text-[#FACC15]">—</span>

                <div>
                  <h3 className="font-semibold">Direct Communication</h3>

                  <p className="mt-2 text-sm leading-7 text-white/35">
                    Clear, straightforward communication with direct involvement
                    throughout the project, keeping ideas, decisions and
                    progress aligned without unnecessary layers.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="mt-1 text-[#FACC15]">—</span>

                <div>
                  <h3 className="font-semibold">Product-Minded Development</h3>

                  <p className="mt-2 text-sm leading-7 text-white/35">
                    We look beyond the code to understand the purpose of a
                    product, how people will use it and what makes the overall
                    experience useful, intuitive and effective.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="mt-1 text-[#FACC15]">—</span>

                <div>
                  <h3 className="font-semibold">Creative Thinking</h3>

                  <p className="mt-2 text-sm leading-7 text-white/35">
                    We explore different ideas, gameplay possibilities, visual
                    directions and development approaches to find solutions that
                    suit each project's unique goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="mt-1 text-[#FACC15]">—</span>

                <div>
                  <h3 className="font-semibold">Long-Term Perspective</h3>

                  <p className="mt-2 text-sm leading-7 text-white/35">
                    We believe in building thoughtfully, learning with every
                    project and growing steadily through meaningful work rather
                    than chasing short-term results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          VISION
      ========================================================= */}

        <section className="px-6 py-28 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#A78BFA]">
              Our Vision
            </p>

            <h2 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              To build a studio where
              <br />
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                ideas become reality.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/35 sm:text-base">
              We are building Tiny Dream Games one project at a time — creating
              our own games, helping others build digital products and growing a
              studio around creativity, technology and meaningful work.
            </p>
          </div>
        </section>

        {/* ================= PREMIUM FOOTER ================= */}
        <Footer />
      </main>
    </>
  );
}
