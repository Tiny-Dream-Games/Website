import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/reviews";
import WebsitePricing from "@/components/website-pricing";


export const metadata: Metadata = {
  title: "Website Development Services | Tiny Dream Games",
  description:
    "Looking for a website development company? Tiny Dream Games builds custom, responsive and SEO-friendly websites for businesses, startups and growing brands.",

  alternates: {
    canonical: "/services/web-development",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tiny Dream Games",
    url: "/services/web-development",
    title: "Website Development Company | Tiny Dream Games",
    description:
      "Explore professional website development services by Tiny Dream Games, including custom business websites, responsive web design and modern web solutions.",
    images: [
      {
        url: "/tiny-dream-logo.png",
        alt: "Tiny Dream Games - Website Development Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development Company | Tiny Dream Games",
    description:
      "Custom and responsive website development services for businesses, startups and growing brands.",
    images: ["/tiny-dream-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const webDevelopmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.tinydreamgames.com/services/web-development#service",
      name: "Website Development Services",
      serviceType: "Website Development",
      url: "https://www.tinydreamgames.com/services/web-development",
      description:
        "Tiny Dream Games provides custom website development services for businesses, startups and growing brands, including responsive business websites, landing pages and custom web solutions.",
      provider: {
        "@type": "Organization",
        "@id": "https://www.tinydreamgames.com/#organization",
        name: "Tiny Dream Games",
        url: "https://www.tinydreamgames.com/",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 5.0,
        reviewCount: 500,
        bestRating: 5,
        worstRating: 1,
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tinydreamgames.com/services/web-development#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What website development services do you offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tiny Dream Games offers website development services for businesses, startups and creators, including business websites, landing pages, portfolio websites, agency websites and custom web applications based on project requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How much does website development cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website development costs depend on the number of pages, design complexity, required features, integrations and project scope. We discuss your requirements first to determine the appropriate solution and provide a project-specific quotation.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The development timeline depends on the website's size, design, functionality, content and integrations. A simple business website generally takes less time than a complex custom website or web application.",
          },
        },
        {
          "@type": "Question",
          name: "Do you develop SEO-friendly websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can implement SEO-friendly foundations such as semantic HTML, page-specific metadata, canonical URLs, responsive layouts, internal links, structured data where appropriate and performance optimization. Search rankings depend on several factors beyond website development.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build a mobile-friendly and responsive website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We develop responsive website layouts designed to work across mobile phones, tablets and desktop screens, with accessible navigation and a consistent user experience across different screen sizes.",
          },
        },
        {
          "@type": "Question",
          name: "Do you use Next.js and React for website development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on the project requirements, we can use technologies such as Next.js, React, TypeScript, JavaScript and Tailwind CSS to build modern websites and web experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign my existing business website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can help redesign an existing website to improve its appearance, mobile responsiveness, navigation, content structure and performance while considering the website's existing SEO and functionality.",
          },
        },
        {
          "@type": "Question",
          name: "Can you connect my domain and deploy my website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can assist with website deployment, domain connection, DNS configuration and the required hosting setup, depending on the project's platform and requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide website maintenance and support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website maintenance can include bug fixes, content updates, technical improvements, performance checks and functionality updates. The available support and ongoing maintenance scope can be discussed according to your project needs.",
          },
        },
        {
          "@type": "Question",
          name: "Can you add custom features and integrations to my website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on your requirements, we can develop custom website functionality and integrate suitable third-party services, contact forms, APIs, databases and other business tools.",
          },
        },
      ],
    },
  ],
};

function WebDevelopmentJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webDevelopmentSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}




const services = [
  {
    number: "01",
    title: "Business Website Development",
    description:
      "Professional business website development to showcase your services, establish credibility, build customer trust and generate enquiries.",
  },
  {
    number: "02",
    title: "Landing Page Development",
    description:
      "Conversion-focused landing page development for products, services and marketing campaigns, designed to guide visitors towards clear actions.",
  },
  {
    number: "03",
    title: "Custom Website Development",
    description:
      "Custom website development tailored to your business requirements, with unique functionality, flexible layouts and solutions beyond generic templates.",
  },
  {
    number: "04",
    title: "Responsive Web Design",
    description:
      "Mobile-friendly website design that delivers a consistent browsing experience across smartphones, tablets, laptops and desktop screens.",
  },
  {
    number: "05",
    title: "SEO-Friendly Website Development",
    description:
      "Search-friendly website development with semantic HTML, clean page structure, metadata, responsive layouts and performance-focused foundations.",
  },
  {
    number: "06",
    title: "Website Maintenance & Support",
    description:
      "Reliable website maintenance, including content updates, bug fixes, security updates, performance improvements and ongoing technical support.",
  },
];


const process = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We understand your business goals, target audience, website requirements, content and project scope to create a clear development plan.",
  },
  {
    number: "02",
    title: "Website Design",
    description:
      "We plan the page structure and create a modern website design that reflects your brand, improves user experience and works across devices.",
  },
  {
    number: "03",
    title: "Website Development",
    description:
      "We build your website with responsive layouts, clean code, required functionality and SEO-friendly technical foundations.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We test website functionality, mobile responsiveness and performance, then prepare your website for deployment and launch.",
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


const faqs = [
  {
    question: "What website development services do you offer?",
    answer:
      "Tiny Dream Games offers website development services for businesses, startups and creators, including business websites, landing pages, portfolio websites, agency websites and custom web applications based on project requirements.",
  },
  {
    question: "How much does website development cost?",
    answer:
      "Website development costs depend on the number of pages, design complexity, required features, integrations and project scope. We discuss your requirements first to determine the appropriate solution and provide a project-specific quotation.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The development timeline depends on the website's size, design, functionality, content and integrations. A simple business website generally takes less time than a complex custom website or web application.",
  },
  {
    question: "Do you develop SEO-friendly websites?",
    answer:
      "Yes. We can implement SEO-friendly foundations such as semantic HTML, page-specific metadata, canonical URLs, responsive layouts, internal links, structured data where appropriate and performance optimization. Search rankings depend on several factors beyond website development.",
  },
  {
    question: "Can you build a mobile-friendly and responsive website?",
    answer:
      "Yes. We develop responsive website layouts designed to work across mobile phones, tablets and desktop screens, with accessible navigation and a consistent user experience across different screen sizes.",
  },
  {
    question: "Do you use Next.js and React for website development?",
    answer:
      "Yes. Depending on the project requirements, we can use technologies such as Next.js, React, TypeScript, JavaScript and Tailwind CSS to build modern websites and web experiences.",
  },
  {
    question: "Can you redesign my existing business website?",
    answer:
      "Yes. We can help redesign an existing website to improve its appearance, mobile responsiveness, navigation, content structure and performance while considering the website's existing SEO and functionality.",
  },
  {
    question: "Can you connect my domain and deploy my website?",
    answer:
      "Yes. We can assist with website deployment, domain connection, DNS configuration and the required hosting setup, depending on the project's platform and requirements.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Website maintenance can include bug fixes, content updates, technical improvements, performance checks and functionality updates. The available support and ongoing maintenance scope can be discussed according to your project needs.",
  },
  {
    question: "Can you add custom features and integrations to my website?",
    answer:
      "Yes. Depending on your requirements, we can develop custom website functionality and integrate suitable third-party services, contact forms, APIs, databases and other business tools.",
  },
];


export default function WebDevelopmentPage() {
  return (
    <>
      <WebDevelopmentJsonLd />
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

              <h1 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-5xl">
                Website Development Services
                <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                  for Growing Businesses
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
                Tiny Dream Games is a website development company creating
                modern, responsive and SEO-friendly websites for small
                businesses, startups and growing brands. We build custom
                business websites, landing pages and e-commerce solutions
                designed to strengthen your online presence and generate
                enquiries.
              </p>

              {/* <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
              </div> */}

              <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-7">
                <div>
                  <p className="text-2xl font-semibold">Responsive</p>
                  <p className="mt-1 text-sm text-gray-400">Every Screen</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">SEO</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Friendly Structure
                  </p>
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
                    src="/image/Web developer.webp"
                    alt="Website development services by Tiny Dream Games"
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
                Website Development Services
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Custom Website Development Built Around Your Business Goals.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-300">
                Your website is more than a digital brochure. It is an important
                part of your business that helps build trust, showcase your
                services and turn visitors into potential customers.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                At Tiny Dream Games, we provide professional website development
                services for businesses, startups and growing brands. From
                business websites and landing pages to custom web development,
                we combine modern design, responsive layouts, performance
                optimization and SEO-friendly development to create websites
                that support your business goals.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Looking for more digital solutions? Explore our{" "}
                <a
                  href="/services/app-development"
                  className="font-medium text-[#A78BFA] transition hover:text-white"
                >
                  app development services
                </a>{" "}
                or learn more about our{" "}
                <a
                  href="/services/game-development"
                  className="font-medium text-[#A78BFA] transition hover:text-white"
                >
                  game development services
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section className="border-y border-white/10 bg-[#0D1422]">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Our Website Development Services
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Complete Website Development Solutions for Your Business.
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

        <WebsitePricing />

        {/* PROCESS */}

        <section className="border-y border-white/10 bg-[#0D1422]">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Our Website Development Process
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                A Clear Process for Building Your Business Website.
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
                Our Technology Stack
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Modern Technologies for Reliable Website Development.
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">
                We use modern web development technologies to build responsive,
                high-performance and maintainable websites. Our technology stack
                is selected according to your project's functionality, business
                goals, scalability and long-term maintenance requirements.
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
                  Why Choose Tiny Dream Games
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  A Reliable Website Development Partner for Your Business.
                </h2>

                <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">
                  We combine modern website design, practical development
                  expertise and a business-focused approach to create websites
                  that help businesses build credibility, reach customers and
                  grow their online presence.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Modern and Professional Website Design",
                  "Mobile-Friendly Responsive Development",
                  "SEO-Friendly Website Structure",
                  "Performance-Focused Development",
                  "Clean and Maintainable Code",
                  "Business-Focused User Experience",
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
    </>
  );
}
