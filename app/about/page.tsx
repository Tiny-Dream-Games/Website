import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "About Us | Tiny Dream Games",
  description:
    "Tiny Dream Games is an independent digital studio creating original games, modern websites and mobile applications.",
};

export default function AboutPage() {
  return (
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
              Tiny Dream Games is an independent digital studio focused on
              creating original games, modern web experiences and mobile
              applications.
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
              Tiny Dream Games was created with a simple belief: good digital
              products start with a good idea, but great products are built
              through thoughtful execution.
            </p>

            <p>
              Our primary focus is game development. We enjoy taking ideas from
              an early concept and turning them into playable experiences with
              their own identity, mechanics and visual direction.
            </p>

            <p>
              Alongside our own games, we also build websites and mobile
              applications for businesses, creators and clients who need
              reliable digital products designed around their goals.
            </p>

            <p>
              Whether we are building something for ourselves or for a client,
              the approach remains the same — understand the idea, simplify what
              matters, build carefully and keep improving.
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
                Original games built around gameplay, visual identity,
                performance and experiences that are enjoyable to play.
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
                Modern, responsive websites designed to communicate clearly,
                perform well and give businesses a professional digital
                presence.
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
                Mobile applications built with a focus on intuitive experiences,
                maintainable technology and practical product requirements.
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
                <span className="text-white/35">Execution is everything.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-white/40 sm:text-base">
              We believe a strong product comes from balancing creativity with
              structure. Every project needs a clear direction, a thoughtful
              development process and enough flexibility to evolve as the idea
              grows.
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
                We start by understanding the problem, audience and purpose
                before jumping into development.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#A78BFA]">
                02
              </p>

              <h3 className="mt-5 text-xl font-semibold">Build Carefully</h3>

              <p className="mt-4 text-sm leading-7 text-white/35">
                We care about the details — from interaction and performance to
                the small elements people notice without thinking about them.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#A78BFA]">
                03
              </p>

              <h3 className="mt-5 text-xl font-semibold">Keep Improving</h3>

              <p className="mt-4 text-sm leading-7 text-white/35">
                Launching is not the end. Products become better through
                feedback, iteration and continuous refinement.
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
                  Clear communication without unnecessary layers between the
                  idea and the people building it.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="mt-1 text-[#FACC15]">—</span>

              <div>
                <h3 className="font-semibold">Product-Minded Development</h3>

                <p className="mt-2 text-sm leading-7 text-white/35">
                  We think beyond writing code and focus on how the final
                  product should actually work for its users.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="mt-1 text-[#FACC15]">—</span>

              <div>
                <h3 className="font-semibold">Creative Thinking</h3>

                <p className="mt-2 text-sm leading-7 text-white/35">
                  We enjoy exploring different ideas, visual directions and
                  approaches instead of forcing every project into the same
                  template.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="mt-1 text-[#FACC15]">—</span>

              <div>
                <h3 className="font-semibold">Long-Term Perspective</h3>

                <p className="mt-2 text-sm leading-7 text-white/35">
                  We aim to create products and a studio that can grow steadily
                  rather than chasing short-term results.
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
  );
}
