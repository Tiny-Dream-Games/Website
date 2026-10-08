import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Tiny Dream Games",
  description:
    "Read the Privacy Policy of Tiny Dream Games to understand how information may be collected, used and protected when you use our website and services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Tiny Dream Games",
    description:
      "Learn how Tiny Dream Games handles information collected through its website and services.",
    url: "/privacy-policy",
    siteName: "Tiny Dream Games",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Your privacy matters to us. This Privacy Policy explains how Tiny
            Dream Games may collect, use and handle information when you visit
            our website or interact with our services.
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
            <h2 className="text-2xl font-semibold">
              1. Information We May Collect
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Depending on how you interact with our website or services, we may
              receive information that you voluntarily provide to us. This may
              include information submitted through contact forms, project
              enquiries or other communication methods.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Information may include your name, email address, phone number,
              company or project information and the details you choose to
              include in your message.
            </p>
          </section>

          {/* 02 */}
          <section>
            <h2 className="text-2xl font-semibold">
              2. Information Collected Automatically
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              When you visit our website, certain technical information may be
              collected automatically by the website, hosting provider,
              analytics tools or other technologies used on the site.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              This may include information such as browser type, device type,
              pages visited, approximate usage information and technical
              information required to operate and secure the website.
            </p>
          </section>

          {/* 03 */}
          <section>
            <h2 className="text-2xl font-semibold">
              3. How We Use Information
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Information provided to us may be used for purposes such as:
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-gray-400">
              <li>Responding to enquiries and messages.</li>
              <li>Understanding project requirements.</li>
              <li>Providing requested services.</li>
              <li>Communicating about ongoing projects.</li>
              <li>Maintaining and improving our website.</li>
              <li>Protecting the website against abuse or security issues.</li>
            </ul>
          </section>

          {/* 04 */}
          <section>
            <h2 className="text-2xl font-semibold">
              4. Cookies and Similar Technologies
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Our website may use cookies or similar technologies where required
              for website functionality, security, analytics or other legitimate
              website purposes.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              The specific cookies or technologies used may depend on the tools
              and services integrated into the website.
            </p>
          </section>

          {/* 05 */}
          <section>
            <h2 className="text-2xl font-semibold">5. Third-Party Services</h2>

            <p className="mt-5 leading-8 text-gray-400">
              We may use third-party services for functions such as website
              hosting, analytics, communication, payment processing, deployment,
              security or other business operations.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              These third parties may process information according to their own
              privacy policies and terms.
            </p>
          </section>

          {/* 06 */}
          <section>
            <h2 className="text-2xl font-semibold">6. Data Security</h2>

            <p className="mt-5 leading-8 text-gray-400">
              We take reasonable measures to protect information handled through
              our website and services. However, no method of transmission or
              electronic storage can be guaranteed to be completely secure.
            </p>
          </section>

          {/* 07 */}
          <section>
            <h2 className="text-2xl font-semibold">7. Data Retention</h2>

            <p className="mt-5 leading-8 text-gray-400">
              Information may be retained for as long as reasonably necessary to
              fulfil the purpose for which it was collected, provide services,
              maintain business records, resolve disputes or comply with
              applicable legal obligations.
            </p>
          </section>

          {/* 08 */}
          <section>
            <h2 className="text-2xl font-semibold">8. Your Privacy Choices</h2>

            <p className="mt-5 leading-8 text-gray-400">
              Depending on applicable law, you may have rights relating to
              personal information, including requesting access, correction or
              deletion of certain information.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              To make a privacy-related request, please contact us using the
              contact details provided on our website.
            </p>
          </section>

          {/* 09 */}
          <section>
            <h2 className="text-2xl font-semibold">
              9. Children&apos;s Privacy
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Our website is not intended to knowingly collect personal
              information from children without appropriate authorization. If
              you believe that a child has provided personal information through
              our website, please contact us.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold">
              10. Changes to This Privacy Policy
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We may update this Privacy Policy from time to time to reflect
              changes to our website, services, technology or legal
              requirements. Any updated version will be published on this page
              with a revised update date.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-semibold">11. Contact Us</h2>

            <p className="mt-5 leading-8 text-gray-400">
              If you have questions about this Privacy Policy or how information
              is handled, please contact Tiny Dream Games.
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
