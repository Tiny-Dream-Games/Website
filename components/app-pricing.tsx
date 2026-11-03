import Link from "next/link";

const plans = [
  {
    name: "MVP App",
    subtitle: "Start small. Launch your idea.",
    price: "24,999",
    description:
      "Everything you need to turn your business idea into a working mobile application.",
    features: [
      "Android application",
      "Up to 5 core screens",
      "Modern UI design",
      "User registration & login",
      "Basic backend integration",
      "Database integration",
      "Basic API integration",
      "Testing & bug fixing",
      "2 revision rounds",
    ],
    delivery: "3–5 Weeks",
    popular: false,
  },
  {
    name: "Business App",
    subtitle: "Built to grow your business.",
    price: "49,999",
    description:
      "A feature-rich mobile application designed to streamline your business operations.",
    features: [
      "Android application",
      "Up to 10 core screens",
      "Custom UI/UX design",
      "User authentication",
      "Backend & database integration",
      "API integrations",
      "Push notifications",
      "Basic admin dashboard",
      "Testing & optimization",
      "3 revision rounds",
    ],
    delivery: "5–8 Weeks",
    popular: true,
  },
  {
    name: "Professional App",
    subtitle: "Advanced features. Bigger possibilities.",
    price: "89,999",
    description:
      "A scalable cross-platform application for businesses with advanced requirements.",
    features: [
      "Android & iOS application",
      "Up to 15 core screens",
      "Advanced UI/UX design",
      "User roles & authentication",
      "Advanced backend integration",
      "Payment gateway integration",
      "Push notifications",
      "Admin dashboard",
      "Analytics integration",
      "Testing & performance optimization",
      "4 revision rounds",
    ],
    delivery: "8–12 Weeks",
    popular: false,
  },
];

const appTypes = [
  "E-commerce Apps",
  "Food Delivery Apps",
  "Booking Apps",
  "Business Apps",
  "On-demand Apps",
  "Custom Startup Apps",
];

export default function AppPricing() {
  return (
    <section
      id="app-pricing"
      className="relative overflow-hidden bg-[#111827] py-24 sm:py-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            App Development Pricing
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            The Right App for Your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
              Next Big Idea
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Whether you're launching a startup or expanding your business, we
            build mobile applications that turn ideas into meaningful digital
            experiences.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 sm:p-8 ${
                plan.popular
                  ? "border-purple-400/60 bg-gradient-to-b from-purple-950/70 to-[#171b2b] shadow-[0_0_55px_rgba(124,58,237,0.15)]"
                  : "border-white/10 bg-white/[0.035] hover:border-purple-400/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-1.5 text-[11px] font-bold tracking-wider text-white shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Plan heading */}
              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-purple-300">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mt-7 border-b border-white/10 pb-7">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-gray-300">₹</span>
                  <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400">+</span>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Starting price · One-time
                </p>

                <p className="mt-5 text-sm leading-6 text-gray-400">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="mt-7 flex-1">
                <p className="mb-5 text-sm font-semibold text-white">
                  What's included
                </p>

                <ul className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-xs text-purple-300">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="mb-5 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Estimated delivery</span>
                  <span className="font-semibold text-gray-200">
                    {plan.delivery}
                  </span>
                </div>

                <Link
                  href={`/contact?service=App%20Development&plan=${encodeURIComponent(plan.name)}`}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-purple-400"
                      : "border border-white/15 bg-white/5 text-white hover:border-purple-400/50 hover:bg-purple-500/10"
                  }`}
                >
                  Get Started <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom app banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-r from-[#211d2c] via-[#191b2b] to-[#171827] p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-amber-400/10 blur-[90px]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Beyond Standard Packages
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Have a Unique App Idea?
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
                From complex business applications to custom startup products,
                let's build an application around your exact requirements.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {appTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:min-w-[210px]">
              <p className="text-sm text-gray-400">Custom development</p>

              <p className="mt-2 text-3xl font-bold text-white">
                Let's Discuss
              </p>

              <Link
                href="/contact?service=Custom%20App%20Development"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-gray-950 transition hover:bg-amber-300"
              >
                Request a Quote <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* What's included note */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <h3 className="text-base font-bold text-white">
            Project Information
          </h3>

          <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2">
            <p>• Prices are starting estimates and depend on project scope.</p>
            <p>
              • Server, hosting, SMS and third-party API charges are separate.
            </p>
            <p>• Google Play and Apple Developer account fees are separate.</p>
            <p>• 50% advance is required to begin the project.</p>
            <p>• Remaining payment is due before final handover.</p>
            <p>• Delivery starts after scope approval and required content.</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">
            Not sure which app package fits your idea?
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-500/10"
          >
            Let's Talk About Your App <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
