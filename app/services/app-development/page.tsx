import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/reviews";

export const metadata: Metadata = {
  title: "App Development Services | Tiny Dream Games",
  description:
    "Tiny Dream Games develops modern, responsive and scalable mobile and web applications with intuitive interfaces, reliable functionality and performance-focused development.",
  alternates: {
    canonical: "/services/app-development",
  },
  openGraph: {
    title: "App Development Services | Tiny Dream Games",
    description:
      "Custom mobile and web applications designed around your users, business goals and product requirements.",
    url: "/services/app-development",
    siteName: "Tiny Dream Games",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Mobile App Development",
    description:
      "Custom mobile applications designed around your product idea, users, features and target platforms.",
  },
  {
    number: "02",
    title: "Android Applications",
    description:
      "Android apps with responsive interfaces, smooth interactions and functionality built around your requirements.",
  },
  {
    number: "03",
    title: "iOS Applications",
    description:
      "iOS-focused applications designed with a clean interface and a user experience suited to Apple devices.",
  },
  {
    number: "04",
    title: "Cross-Platform Apps",
    description:
      "Applications planned for multiple platforms where a shared development approach makes sense for the project.",
  },
  {
    number: "05",
    title: "Custom App Development",
    description:
      "From a simple product idea to a feature-rich application, we build functionality around your specific business requirements.",
  },
  {
    number: "06",
    title: "App Maintenance",
    description:
      "Ongoing bug fixes, improvements, updates and technical changes to keep your application useful and reliable.",
  },
];

const projects = [
  {
    title: "Business App",
    category: "Mobile • Business",
    description:
      "A focused mobile experience designed to make everyday business interactions simpler.",
    status: "Completed",
    image: "/image/Business App.webp",
  },
  {
    title: "Service Application",
    category: "Mobile • Services",
    description:
      "A user-focused application built around service discovery, interaction and streamlined workflows.",
    status: "In Development",
    image: "/image/Service Application.webp",
  },
  {
    title: "Custom Product App",
    category: "Custom • Interactive",
    description:
      "A custom application experience designed around a specific product concept and user journey.",
    status: "Coming Soon",
    image: "/image/Custom Product App.webp",
  },
];

const technologies = [
  "React Native",
  "Flutter",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Firebase",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your product idea, users, business goals, features and target platforms.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We structure the application, user flows, core features and technical requirements before development.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The application is developed with responsive interfaces, functionality and performance in mind.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test the application, prepare the final build and help get the product ready for its target platform.",
  },
];

const faqs = [
  {
    question: "What type of applications do you develop?",
    answer:
      "We develop custom mobile and web applications based on the product idea, target users, features and business requirements.",
  },
  {
    question: "Can you build an app from my idea?",
    answer:
      "Yes. You can bring us a complete product concept or an early idea. We can help structure the core features, user flow and technical requirements before development.",
  },
  {
    question: "Do you develop both Android and iOS apps?",
    answer:
      "Yes. We can plan applications for Android, iOS or multiple platforms depending on the requirements and technology selected for the project.",
  },
  {
    question: "Can you build a cross-platform application?",
    answer:
      "Yes. Cross-platform development can be considered when it fits the project's requirements, target platforms, functionality and long-term maintenance needs.",
  },
  {
    question: "What technologies do you use for app development?",
    answer:
      "Depending on the project, the technology stack can include React Native, Flutter, React, Next.js, TypeScript, JavaScript, Node.js and Firebase.",
  },
  {
    question: "Can you design the app UI and UX?",
    answer:
      "Yes. App UI and UX can include screen layouts, navigation, forms, buttons, user flows and other interfaces required for the product experience.",
  },
  {
    question: "Can you connect an app to a backend or database?",
    answer:
      "Yes. Applications can be connected to backend services, APIs and databases depending on the functionality and data requirements of the project.",
  },
  {
    question: "Can you integrate APIs and third-party services?",
    answer:
      "Yes. APIs and third-party services can be integrated when they are required for features such as authentication, payments, data, notifications or other application functionality.",
  },
  {
    question: "How long does it take to develop an app?",
    answer:
      "The timeline depends on the number of screens, features, integrations, platforms, backend requirements and overall complexity of the application.",
  },
  {
    question: "How much does app development cost?",
    answer:
      "The cost depends on the product scope, number of features, UI requirements, platforms, backend functionality and integrations. We can define the project scope before providing an estimate.",
  },
  {
    question: "Can you maintain and update an existing application?",
    answer:
      "Yes. We can work on maintenance, bug fixes, feature updates, performance improvements and other development requirements for existing applications.",
  },
  {
    question: "Can you help prepare the app for launch?",
    answer:
      "Yes. We can help prepare the application build and guide the technical requirements involved in getting it ready for the intended platform.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111827] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(124,58,237,0.22),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(250,204,21,0.06),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
              App Development Studio
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Apps Built
              <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                Around Your Ideas.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              We create modern mobile and web applications with intuitive
              interfaces, useful functionality and technology chosen around your
              product requirements.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-7 py-4 font-semibold transition hover:bg-[#6D28D9]"
              >
                Start Your App
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-semibold">Mobile</p>
                <p className="mt-1 text-sm text-gray-400">User Focused</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">Custom</p>
                <p className="mt-1 text-sm text-gray-400">Built For You</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">Scalable</p>
                <p className="mt-1 text-sm text-gray-400">Ready To Grow</p>
              </div>
            </div>
          </div>

          {/* HERO APP VISUAL */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[40px] bg-purple-600/10 blur-3xl" />

            <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-[#151D2E] p-6 shadow-2xl">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-purple-600/15 blur-3xl" />

              {/* PHONE */}
              <div className="relative w-[245px] rounded-[38px] border-[7px] border-[#252E42] bg-[#080D18] p-2 shadow-2xl sm:w-[270px]">
                <div className="relative overflow-hidden rounded-[29px] bg-[#111827]">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

                  {/* App screen */}
                  <div className="min-h-[500px] px-5 pb-6 pt-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-gray-500">
                          Welcome back
                        </p>
                        <p className="mt-1 text-lg font-semibold">Your App</p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/10 text-[#A78BFA]">
                        ●
                      </div>
                    </div>

                    <div className="mt-7 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] p-5">
                      <p className="text-xs text-purple-200">Overview</p>

                      <p className="mt-2 text-3xl font-semibold">24.8K</p>

                      <div className="mt-5 h-2 rounded-full bg-white/20">
                        <div className="h-2 w-3/4 rounded-full bg-[#FACC15]" />
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/[0.04] p-4">
                        <div className="h-7 w-7 rounded-lg bg-purple-500/15" />
                        <div className="mt-4 h-2 w-14 rounded bg-white/10" />
                        <div className="mt-2 h-3 w-20 rounded bg-white/10" />
                      </div>

                      <div className="rounded-2xl bg-white/[0.04] p-4">
                        <div className="h-7 w-7 rounded-lg bg-yellow-400/10" />
                        <div className="mt-4 h-2 w-14 rounded bg-white/10" />
                        <div className="mt-2 h-3 w-20 rounded bg-white/10" />
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="h-2 w-20 rounded bg-white/10" />

                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">
                          <div className="h-9 w-9 rounded-lg bg-purple-500/10" />
                          <div className="flex-1">
                            <div className="h-2 w-20 rounded bg-white/10" />
                            <div className="mt-2 h-2 w-12 rounded bg-white/5" />
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">
                          <div className="h-9 w-9 rounded-lg bg-white/5" />
                          <div className="flex-1">
                            <div className="h-2 w-24 rounded bg-white/10" />
                            <div className="mt-2 h-2 w-14 rounded bg-white/5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom navigation */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0D1422]/95 px-5 py-4">
                    <div className="grid grid-cols-4 gap-3">
                      <div className="mx-auto h-2 w-6 rounded bg-[#7C3AED]" />
                      <div className="mx-auto h-2 w-6 rounded bg-white/10" />
                      <div className="mx-auto h-2 w-6 rounded bg-white/10" />
                      <div className="mx-auto h-2 w-6 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs backdrop-blur-md">
                Tiny Dream Games
              </div>

              <div className="absolute right-5 top-5 rounded-full bg-[#FACC15] px-3 py-1.5 text-xs font-bold text-[#111827]">
                APP
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
              What We Build
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              An app should make things simpler.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-300">
              Whether you are building a business product, customer-facing
              application or a new digital idea, the experience should be
              intuitive from the first interaction.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              We focus on clear user flows, useful functionality, responsive
              interfaces and a technical foundation that can evolve as your
              product grows.
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
              From idea to application.
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

                <h3 className="mt-7 text-xl font-semibold">{service.title}</h3>

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
      <section id="projects" className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Products designed for real users.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Explore selected application projects and digital products.
            </p>
          </div>

          {/* <Link
            href="/#portfolio"
            className="text-sm font-semibold text-[#A78BFA] transition hover:text-white"
          >
            View all projects →
          </Link> */}
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E] transition duration-300 hover:-translate-y-1 hover:border-purple-400/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0B1020]">
                <img
                  src={project.image}
                  alt={`${project.title} app project`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/70 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs backdrop-blur-md">
                  {project.status}
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* <button className="mt-6 inline-flex items-center text-sm font-semibold text-white transition group-hover:text-[#A78BFA]">
                  View Project
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button> */}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From idea to working product.
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
      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              Technology
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              The right stack for the product.
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">
              Technology choices depend on the application's features, target
              platforms, integrations, performance requirements and future
              maintenance needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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

      {/* WHY US */}
      <section className="border-y border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Why Tiny Dream Games
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Simple experiences. Thoughtful technology.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "User-focused interface",
                "Responsive application design",
                "Custom functionality",
                "Performance-conscious development",
                "Clean and maintainable code",
                "Scalable technical foundation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#111827] p-6"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/10 text-[#A78BFA]">
                    ✓
                  </div>

                  <p className="font-medium text-gray-200">{item}</p>
                </div>
              ))}
            </div>
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
            Everything you need to know before starting your application
            project.
          </p>
        </div>

        <FAQ faqs={faqs} />
      </section>

      <Footer />
    </main>
  );
}
