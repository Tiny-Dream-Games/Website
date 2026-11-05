import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/reviews";
import AppPricing from "@/components/app-pricing";


export const metadata: Metadata = {
  title: "App Development Company | Tiny Dream Games",
  description:
    "Tiny Dream Games is an app development company offering custom mobile app and web application development services for businesses, startups and growing brands.",

  alternates: {
    canonical: "/services/app-development",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tiny Dream Games",
    title: "App Development Company | Tiny Dream Games",
    description:
      "Explore custom app development services by Tiny Dream Games. We build mobile and web applications tailored to business and product requirements.",
    url: "/services/app-development",
    images: [
      {
        url: "/tiny-dream-logo.png",
        alt: "Tiny Dream Games - App Development Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "App Development Company | Tiny Dream Games",
    description:
      "Custom mobile app and web application development services for businesses and startups.",
    images: ["/tiny-dream-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};




const appDevelopmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.tinydreamgames.com/services/app-development#service",
      name: "App Development Services",
      serviceType: [
        "Mobile Application Development",
        "Web Application Development",
        "Custom App Development",
      ],
      url: "https://www.tinydreamgames.com/services/app-development",
      description:
        "Tiny Dream Games provides custom mobile app and web application development services for businesses and startups, with solutions planned around individual product requirements.",
      provider: {
        "@type": "Organization",
        "@id": "https://www.tinydreamgames.com/#organization",
        name: "Tiny Dream Games",
        url: "https://www.tinydreamgames.com/",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 5.0,
        reviewCount: 200,
        bestRating: 5,
        worstRating: 1,
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tinydreamgames.com/services/app-development#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What app development services do you offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tiny Dream Games offers custom application development services based on project requirements, including mobile applications, web applications, business tools and custom digital solutions.",
          },
        },
        {
          "@type": "Question",
          name: "How much does custom app development cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "App development costs depend on the application's features, design, platform, integrations, backend requirements and overall complexity. We discuss your requirements before defining the project scope and providing a quotation.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to develop an app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The development timeline depends on the app's complexity, number of features, UI design, integrations, testing and target platforms. A simple application generally requires less development time than a complex application with a custom backend.",
          },
        },
        {
          "@type": "Question",
          name: "Do you develop Android mobile applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can discuss Android application development based on your requirements, including app functionality, user interface, device compatibility and the technical approach suitable for your project.",
          },
        },
        {
          "@type": "Question",
          name: "Can you develop web applications for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can develop custom web applications based on business needs, including interactive interfaces, data-driven features, user workflows and integrations with suitable backend services.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build an app from my idea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can share your app idea, target audience and key requirements. We can help define the essential features, plan the application structure and determine a suitable development approach.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate APIs and databases into an application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the project requirements, applications can include API integrations, database connectivity, server-side functionality and third-party services to support their required features.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign or improve an existing application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Existing applications may be improved through UI updates, usability improvements, bug fixes, performance optimization and new functionality, depending on the available source code and technical setup.",
          },
        },
        {
          "@type": "Question",
          name: "Will my application work on different screen sizes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can plan responsive interfaces and suitable layouts for the target devices and screen sizes. The exact device and platform support depends on the application's design and development requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide app maintenance and technical support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maintenance requirements can include bug fixes, compatibility updates, performance improvements and feature changes. Available support, maintenance scope and timelines can be discussed according to the project.",
          },
        },
      ],
    },
  ],
};

function AppDevelopmentJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(appDevelopmentSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}


const services = [
  {
    number: "01",
    title: "Mobile App Development",
    description:
      "Custom mobile app development for businesses and startups, with intuitive interfaces, useful features and experiences tailored to your users.",
  },
  {
    number: "02",
    title: "Android App Development",
    description:
      "Android application development focused on responsive interfaces, smooth interactions and functionality built around your business requirements.",
  },
  {
    number: "03",
    title: "iOS App Development",
    description:
      "Custom iOS applications designed with clean interfaces, user-friendly navigation and experiences suited to Apple devices.",
  },
  {
    number: "04",
    title: "Cross-Platform App Development",
    description:
      "Cross-platform app development solutions for projects that need to reach users across multiple mobile platforms.",
  },
  {
    number: "05",
    title: "Custom App Development",
    description:
      "Custom app development tailored to your product idea, from essential business features to more advanced application functionality.",
  },
  {
    number: "06",
    title: "App Maintenance and Support",
    description:
      "Application maintenance services including bug fixes, performance improvements, updates and ongoing technical support.",
  },
];


const process = [
  {
    number: "01",
    title: "Discover Your Idea",
    description:
      "We understand your app idea, target users, business goals, required features and platform requirements to define the right development direction.",
  },
  {
    number: "02",
    title: "Plan the Application",
    description:
      "We plan the application structure, user journeys, core features and technical requirements before starting the app development process.",
  },
  {
    number: "03",
    title: "Design and Develop",
    description:
      "We build your custom application with intuitive user interfaces, useful functionality, responsive experiences and performance in mind.",
  },
  {
    number: "04",
    title: "Test and Launch",
    description:
      "We test the application, fix issues, prepare the final build and help get your product ready for its intended platform.",
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

const faqs = [
  {
    question: "What app development services do you offer?",
    answer:
      "Tiny Dream Games offers custom application development services based on project requirements, including mobile applications, web applications, business tools and custom digital solutions.",
  },
  {
    question: "How much does custom app development cost?",
    answer:
      "App development costs depend on the application's features, design, platform, integrations, backend requirements and overall complexity. We discuss your requirements before defining the project scope and providing a quotation.",
  },
  {
    question: "How long does it take to develop an app?",
    answer:
      "The development timeline depends on the app's complexity, number of features, UI design, integrations, testing and target platforms. A simple application generally requires less development time than a complex application with a custom backend.",
  },
  {
    question: "Do you develop Android mobile applications?",
    answer:
      "We can discuss Android application development based on your requirements, including app functionality, user interface, device compatibility and the technical approach suitable for your project.",
  },
  {
    question: "Can you develop web applications for businesses?",
    answer:
      "Yes. We can develop custom web applications based on business needs, including interactive interfaces, data-driven features, user workflows and integrations with suitable backend services.",
  },
  {
    question: "Can you build an app from my idea?",
    answer:
      "Yes. You can share your app idea, target audience and key requirements. We can help define the essential features, plan the application structure and determine a suitable development approach.",
  },
  {
    question: "Can you integrate APIs and databases into an application?",
    answer:
      "Depending on the project requirements, applications can include API integrations, database connectivity, server-side functionality and third-party services to support their required features.",
  },
  {
    question: "Can you redesign or improve an existing application?",
    answer:
      "Yes. Existing applications may be improved through UI updates, usability improvements, bug fixes, performance optimization and new functionality, depending on the available source code and technical setup.",
  },
  {
    question: "Will my application work on different screen sizes?",
    answer:
      "We can plan responsive interfaces and suitable layouts for the target devices and screen sizes. The exact device and platform support depends on the application's design and development requirements.",
  },
  {
    question: "Do you provide app maintenance and technical support?",
    answer:
      "Maintenance requirements can include bug fixes, compatibility updates, performance improvements and feature changes. Available support, maintenance scope and timelines can be discussed according to the project.",
  },
];


export default function AppDevelopmentPage() {

  return (
    <>
      <AppDevelopmentJsonLd />
      <main className="min-h-screen overflow-hidden bg-[#111827] text-white">
        <Navbar />

        {/* HERO */}

        <section className="relative border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(124,58,237,0.22),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(250,204,21,0.06),transparent_30%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-35">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
                <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
                App Development Studio
              </div>

              <h1 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-5xl">
                App Development Company
                <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#FACC15] bg-clip-text text-transparent">
                  for Custom Mobile & Web Apps.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
                Tiny Dream Games is an app development company creating custom
                mobile and web applications for businesses, startups and growing
                brands. Our app development services focus on intuitive user
                interfaces, useful functionality, responsive experiences and
                scalable solutions tailored to your product requirements.
              </p>

              {/* 
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
      */}

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
                Custom App Development Services
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Custom Applications Built Around Your Business Goals.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-300">
                Whether you are building a business product, customer-facing
                mobile application or a new digital idea, your app should make
                things simpler with an intuitive and seamless user experience.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                At Tiny Dream Games, we provide custom app development services
                focused on clear user flows, useful functionality, intuitive
                interfaces and reliable technical foundations. Our mobile app
                development approach is tailored to your product requirements
                and designed to support your business as it grows.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Looking for other digital solutions? Explore our{" "}
                <a
                  href="/services/web-development"
                  className="text-[#A78BFA] transition hover:text-white"
                >
                  Website Development Services
                </a>{" "}
                and{" "}
                <a
                  href="/services/game-development"
                  className="text-[#A78BFA] transition hover:text-white"
                >
                  Game Development Services
                </a>
                . Have a project in mind?{" "}
                <a
                  href="/contact"
                  className="text-[#A78BFA] transition hover:text-white"
                >
                  Contact Us
                </a>{" "}
                to discuss your requirements.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-y border-white/10 bg-[#0D1422]">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                App Development Services
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Complete App Development Services for Your Ideas.
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

        <AppPricing />

        {/* PROCESS */}
        <section className="border-y border-white/10 bg-[#0D1422]">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                Our App Development Process
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                A Clear Process from App Idea to Launch.
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
                App Development Technologies
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                The Right Technology for Your Application.
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">
                We choose the right technologies based on your application's
                features, target platforms, integrations and performance
                requirements. Our technology stack supports custom mobile app
                development and web application development, with future
                scalability and maintenance in mind.
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
                  A Reliable Partner for Custom App Development.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "User-focused application interfaces",
                  "Responsive mobile and web app design",
                  "Custom features built around your needs",
                  "Performance-conscious app development",
                  "Clean and maintainable code",
                  "Scalable application architecture",
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
    </>
  );
}
