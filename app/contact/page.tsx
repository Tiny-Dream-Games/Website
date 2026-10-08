import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
export const metadata = {
  title: "Contact Us | Tiny Dream Games",
  description:
    "Have a game, website or app idea? Get in touch with Tiny Dream Games and let's build something great together.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#111827] text-white">
      {/* ================= NAVBAR ================= */}
      <Navbar />
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-35">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FACC15]" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Let&apos;s build
              <br />
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FACC15] bg-clip-text text-transparent">
                something great.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              Have a game, website or app idea? Tell us what you&apos;re
              building and let&apos;s see how we can bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT AREA ================= */}

      <section className="border-t border-white/[0.06] bg-[#0B1020] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.65fr_1.35fr]">
          {/* LEFT */}

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
              Start a Project
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
              Tell us about
              <br />
              your idea.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
              Whether you&apos;re starting something new or improving an
              existing product, we&apos;d love to hear about it.
            </p>

            {/* Contact Info */}

            <div className="mt-12 space-y-7">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                  Email
                </p>

                <a
                  href="mailto:tinydreamgamesstudio@gmail.com"
                  className="mt-2 inline-block text-sm text-white/75 transition hover:text-[#A78BFA]"
                >
                  tinydreamgamesstudio@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/918267093024"
                  className="mt-2 inline-block text-sm text-white/75 transition hover:text-[#A78BFA]"
                >
                  Let&apos;s chat on WhatsApp →
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                  Studio
                </p>

                <p className="mt-2 text-sm text-white/60">Tiny Dream Games</p>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}

          <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}

      <section className="border-t border-white/[0.06] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-white/25">
            Prefer a quick conversation?
          </p>

          <a
            href="https://wa.me/918267093024"
            className="mt-5 inline-flex items-center gap-3 text-lg font-medium text-white transition hover:text-[#A78BFA]"
          >
            Talk to us on WhatsApp
            <span>→</span>
          </a>
        </div>
      </section>
      {/* ================= PREMIUM FOOTER ================= */}
      <Footer />
    </main>
  );
}
