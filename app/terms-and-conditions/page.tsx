import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tiny Dream Games",
  description:
    "Read the Terms and Conditions governing the use of the Tiny Dream Games website, services, games and digital content.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Tiny Dream Games",
    description:
      "Terms and conditions for using the Tiny Dream Games website, services and digital content.",
    url: "/terms-and-conditions",
    siteName: "Tiny Dream Games",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#111827] text-white">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-35 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
            Legal
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            These Terms & Conditions explain the general rules for using the
            Tiny Dream Games website, services and digital content.
          </p>

          <p className="mt-5 text-sm text-gray-500">
            Last updated: September 30, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="space-y-14">
          {/* 01 */}
          <section>
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>

            <p className="mt-5 leading-8 text-gray-400">
              By accessing or using the Tiny Dream Games website, you agree to
              comply with these Terms & Conditions. If you do not agree with
              these terms, please do not use the website or its services.
            </p>
          </section>

          {/* 02 */}
          <section>
            <h2 className="text-2xl font-semibold">2. About Our Services</h2>

            <p className="mt-5 leading-8 text-gray-400">
              Tiny Dream Games provides digital development services that may
              include game development, web development, app development,
              design, maintenance and related technology services.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              The exact scope, deliverables, timelines and commercial terms for
              a client project may be agreed separately between the parties.
            </p>
          </section>

          {/* 03 */}
          <section>
            <h2 className="text-2xl font-semibold">3. Project Requirements</h2>

            <p className="mt-5 leading-8 text-gray-400">
              Clients are responsible for providing accurate information,
              content, materials and requirements necessary for their project.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Changes to requirements or project scope may affect development
              timelines, deliverables or project pricing where applicable.
            </p>
          </section>

          {/* 04 */}
          <section>
            <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>

            <p className="mt-5 leading-8 text-gray-400">
              Ownership and usage rights for client-specific deliverables should
              be determined by the applicable project agreement or written
              arrangement between Tiny Dream Games and the client.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Unless otherwise agreed, Tiny Dream Games may retain ownership of
              its pre-existing tools, reusable components, development
              techniques, frameworks and internal systems used to create a
              project.
            </p>
          </section>

          {/* 05 */}
          <section>
            <h2 className="text-2xl font-semibold">
              5. Website and Digital Content
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Content published on this website, including text, graphics,
              logos, images, videos, designs and other materials, may be
              protected by intellectual property laws.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              You may not reproduce, distribute, modify or commercially exploit
              website content without appropriate permission, except where
              permitted by applicable law.
            </p>
          </section>

          {/* 06 */}
          <section>
            <h2 className="text-2xl font-semibold">
              6. Games and Demonstrations
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Games, prototypes, demonstrations and playable builds shown on the
              website may be provided for demonstration, portfolio or testing
              purposes.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Availability, functionality and access to a game or prototype may
              change without prior notice.
            </p>
          </section>

          {/* 07 */}
          <section>
            <h2 className="text-2xl font-semibold">
              7. Third-Party Services and Links
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Our website or projects may contain links to third-party websites,
              platforms or services. These third parties operate independently
              and may have their own terms and privacy policies.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Tiny Dream Games is not responsible for the content, policies,
              availability or practices of third-party services.
            </p>
          </section>

          {/* 08 */}
          <section>
            <h2 className="text-2xl font-semibold">
              8. Payments and Commercial Terms
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Project pricing, payment schedules, deposits, milestones, refunds
              and other commercial conditions may vary by project and will be
              communicated or agreed separately where applicable.
            </p>
          </section>

          {/* 09 */}
          <section>
            <h2 className="text-2xl font-semibold">9. Project Timelines</h2>

            <p className="mt-5 leading-8 text-gray-400">
              Development timelines depend on project scope, complexity,
              feedback, content availability, integrations and other
              dependencies.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Estimated timelines should therefore not be interpreted as
              guaranteed delivery dates unless explicitly agreed in writing.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold">10. Website Availability</h2>

            <p className="mt-5 leading-8 text-gray-400">
              We aim to keep our website available and functioning properly, but
              we do not guarantee uninterrupted availability. The website may
              occasionally be unavailable because of maintenance, technical
              problems, hosting issues or circumstances outside our control.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-semibold">
              11. Limitation of Liability
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              To the extent permitted by applicable law, Tiny Dream Games shall
              not be responsible for indirect, incidental or consequential
              losses arising from the use of the website, digital content or
              services.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Nothing in these terms is intended to exclude or limit any
              liability that cannot legally be excluded or limited under
              applicable law.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-semibold">12. Prohibited Use</h2>

            <p className="mt-5 leading-8 text-gray-400">
              You agree not to misuse the website, attempt to gain unauthorized
              access to systems, interfere with website functionality, introduce
              malicious software or use the website for unlawful purposes.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl font-semibold">
              13. Changes to These Terms
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We may update these Terms & Conditions from time to time. Changes
              will be published on this page with an updated revision date.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-2xl font-semibold">14. Governing Law</h2>

            <p className="mt-5 leading-8 text-gray-400">
              These terms are intended to be governed by the laws applicable to
              the jurisdiction in which Tiny Dream Games operates, subject to
              any mandatory legal requirements that may apply.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-2xl font-semibold">15. Contact Us</h2>

            <p className="mt-5 leading-8 text-gray-400">
              If you have questions regarding these Terms & Conditions, please
              contact Tiny Dream Games.
            </p>

            <a
              href="mailto:tinydreamgamesstudio@gmail.com"
              className="mt-5 inline-block font-medium text-[#A78BFA] transition hover:text-white"
            >
              tinydreamgamesstudio@gmail.com
            </a>
          </section>
        </div>
      </section>

      {/* BACK */}
      <section className="border-t border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
          <Link
            href="/"
            className="text-sm font-semibold text-[#A78BFA] transition hover:text-white"
          >
            ← Back to Tiny Dream Games
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
