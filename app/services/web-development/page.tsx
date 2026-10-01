import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/reviews";

export const metadata: Metadata = {
  title: "Web Development Services | Tiny Dream Games",
  description:
    "Tiny Dream Games builds modern, responsive and SEO-friendly websites for businesses, startups and brands with a focus on performance, design and user experience.",
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "Web Development Services | Tiny Dream Games",
    description:
      "Modern, responsive and SEO-friendly websites designed and developed by Tiny Dream Games.",
    url: "/services/web-development",
    siteName: "Tiny Dream Games",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites designed to present your business clearly, build trust and convert visitors into enquiries.",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused landing pages built around a specific service, campaign, product or conversion goal.",
  },
  {
    number: "03",
    title: "Custom Web Development",
    description:
      "Custom web experiences built around your business requirements instead of forcing your idea into a generic template.",
  },
  {
    number: "04",
    title: "Responsive Web Design",
    description:
      "Websites designed to provide a consistent and polished experience across desktop, tablet and mobile devices.",
  },
  {
    number: "05",
    title: "SEO-Friendly Development",
    description:
      "Clean structure, metadata, semantic HTML, performance considerations and technical foundations designed with search visibility in mind.",
  },
  {
    number: "06",
    title: "Website Maintenance",
    description:
      "Ongoing updates, bug fixes, content changes, improvements and technical maintenance for existing websites.",
  },
];

const projects = [
  {
    title: "Business Website",
    category: "Corporate • Responsive",
    description:
      "A modern business website focused on clear presentation, trust and lead generation.",
    status: "Completed",
    image: "/web-projects/project-1.jpg",
  },
  {
    title: "Digital Agency Website",
    category: "Agency • SEO",
    description:
      "A conversion-focused digital presence with structured content and a modern visual system.",
    status: "In Development",
    image: "/web-projects/project-2.jpg",
  },
  {
    title: "Custom Web Experience",
    category: "Custom • Interactive",
    description:
      "A custom web experience designed around a specific business idea and user journey.",
    status: "Coming Soon",
    image: "/web-projects/project-3.jpg",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "PHP",
  "MySQL",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals, content requirements and the purpose of your website.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create the visual direction, page structure and user experience around your brand.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "The website is built with responsive layouts, clean code, functionality and performance in mind.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test the website, optimize the final experience and prepare it for deployment and launch.",
  },
];

const faqs = [
  {
    question: "What type of websites do you develop?",
    answer:
      "We develop business websites, agency websites, landing pages, portfolio websites, service websites and custom web experiences based on the requirements of the project.",
  },
  {
    question: "Can you build a website from scratch?",
    answer:
      "Yes. We can handle the website structure, UI design direction, frontend development and required functionality based on your project requirements.",
  },
  {
    question: "Do you create responsive websites?",
    answer:
      "Yes. Websites are designed and developed to work across desktop, tablet and mobile screen sizes with responsive layouts and user-friendly navigation.",
  },
  {
    question: "Can you make my website SEO-friendly?",
    answer:
      "Yes. We can implement SEO-friendly foundations such as proper page structure, metadata, semantic HTML, responsive design, performance considerations, internal linking and other technical SEO elements.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "Depending on the project, our web development stack can include Next.js, React, TypeScript, JavaScript, Tailwind CSS, Node.js, PHP and MySQL.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can redesign an existing website to improve its visual appearance, responsiveness, user experience, performance and overall structure.",
  },
  {
    question: "Can you connect my domain and deploy the website?",
    answer:
      "Yes. We can help prepare the website for deployment and assist with connecting the domain and configuring the required hosting or deployment setup.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the number of pages, design complexity, functionality, content and integrations required. A simple website will generally require less development time than a larger custom project.",
  },
  {
    question: "How much does website development cost?",
    answer:
      "The cost depends on the website type, number of pages, design requirements, functionality, integrations and development scope. We can discuss your requirements first and then define the project scope.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. Website maintenance can include content updates, bug fixes, technical improvements, performance optimization and other ongoing changes depending on the project.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111827] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(124,58,237,0.22),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(250,204,21,0.06),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-35">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
              Web Development Studio
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Websites Built
              <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                To Move Your Business.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              We create modern, responsive and SEO-friendly websites that
              combine strong visual design, smooth user experience and reliable
              technology.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-7 py-4 font-semibold transition hover:bg-[#6D28D9]"
              >
                Start Your Website
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
                <p className="text-2xl font-semibold">Responsive</p>
                <p className="mt-1 text-sm text-gray-400">Every Screen</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">SEO</p>
                <p className="mt-1 text-sm text-gray-400">Friendly Structure</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">Modern</p>
                <p className="mt-1 text-sm text-gray-400">Technology</p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[40px] bg-purple-600/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#151D2E] p-3 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                <img
                  src="/web-projects/hero-website.jpg"
                  alt="Tiny Dream Games web development project"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs backdrop-blur-md">
                  Tiny Dream Games
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-[#FACC15] px-3 py-1.5 text-xs font-bold text-[#111827]">
                  WEBSITE
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
              What We Build
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Your website is more than a digital brochure.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-300">
              A good website should communicate what you do, make it easy for
              people to understand your value and guide them towards taking
              action.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              We combine design, development, responsiveness, performance and
              SEO-friendly foundations to create websites that are built for
              real users and real business goals.
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
              Everything your website needs.
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
              Websites that work as hard as they look.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Explore selected website projects and digital experiences.
            </p>
          </div>

          <Link
            href="/#portfolio"
            className="text-sm font-semibold text-[#A78BFA] transition hover:text-white"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151D2E] transition duration-300 hover:-translate-y-1 hover:border-purple-400/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1020]">
                <img
                  src={project.image}
                  alt={`${project.title} website project`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent" />

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
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From first idea to live website.
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
              Modern technology. Clean execution.
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">
              We choose the technology stack according to the project's goals,
              functionality, scalability and maintenance requirements.
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
                Designed for people. Built for business.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Premium modern design",
                "Responsive across devices",
                "SEO-friendly foundations",
                "Performance-focused development",
                "Clean and maintainable code",
                "Business-focused user experience",
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
            Everything you need to know before starting your website project.
          </p>
        </div>

        <FAQ faqs={faqs} />
      </section>

      <Footer />
    </main>
  );
}
