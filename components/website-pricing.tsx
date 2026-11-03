import Link from "next/link";

const plans = [
  {
    name: "Starter Website",
    subtitle: "Perfect for individuals and small businesses.",
    price: "7,999",
    description: "Everything you need to establish your online presence.",
    features: [
      "Up to 3 website pages",
      "Modern responsive design",
      "Mobile & tablet optimization",
      "Contact form integration",
      "WhatsApp integration",
      "Social media integration",
      "Basic on-page SEO",
      "2 revision rounds",
    ],
    delivery: "5–7 working days",
    featured: false,
    button: "Get Started",
  },
  {
    name: "Business Website",
    subtitle: "Built to attract customers and grow your business.",
    price: "17,999",
    description: "A professional website designed to generate enquiries.",
    features: [
      "Up to 6 website pages",
      "Premium custom UI design",
      "Mobile & tablet optimization",
      "Contact & enquiry forms",
      "WhatsApp integration",
      "Google Maps integration",
      "On-page SEO setup",
      "Speed optimization",
      "3 revision rounds",
    ],
    delivery: "10–14 working days",
    featured: true,
    button: "Choose Business",
  },
  {
    name: "Professional Website",
    subtitle: "Advanced solutions for growing brands.",
    price: "29,999",
    description: "More flexibility, functionality and customization.",
    features: [
      "Up to 10 website pages",
      "Fully custom UI/UX design",
      "Advanced animations",
      "Advanced enquiry forms",
      "Blog or portfolio section",
      "Technical SEO setup",
      "XML sitemap & robots.txt",
      "Analytics integration",
      "Performance optimization",
      "4 revision rounds",
    ],
    delivery: "15–21 working days",
    featured: false,
    button: "Get Started",
  },
];

const ecommerceFeatures = [
  "Custom e-commerce website design",
  "Product catalogue (up to 20 products)",
  "Shopping cart & checkout",
  "Payment gateway integration",
  "Order management",
  "Mobile responsive design",
  "Basic SEO setup",
  "WhatsApp integration",
  "Store management training",
];

export default function WebsitePricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#111827] py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-purple-700/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            Transparent Pricing
          </span>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Websites That Fit Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-amber-300 bg-clip-text text-transparent">
              Business & Budget
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            From a simple business website to a fully customized digital
            experience, choose a plan that matches your goals. No hidden
            surprises, just clear pricing.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 sm:p-8 ${
                plan.featured
                  ? "border-purple-400/70 bg-gradient-to-b from-purple-950/80 to-[#171b2b] shadow-[0_0_50px_rgba(124,58,237,0.16)]"
                  : "border-white/10 bg-white/[0.035] hover:border-purple-400/40"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>

                <p className="mt-2 min-h-10 text-sm leading-6 text-gray-400">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-6 border-b border-white/10 pb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-gray-300">₹</span>
                  <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400">+</span>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Starting price · One-time payment
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1">
                <p className="mb-5 text-sm font-semibold text-white">
                  What's included:
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-xs text-purple-300">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-5 text-xs text-gray-400">
                  Estimated delivery:{" "}
                  <span className="font-semibold text-gray-200">
                    {plan.delivery}
                  </span>
                </p>

                <Link
                  href={`/contact?service=Website%20Development&plan=${encodeURIComponent(plan.name)}`}
                  className={`flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    plan.featured
                      ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-purple-400"
                      : "border border-white/15 bg-white/5 text-white hover:border-purple-400/50 hover:bg-purple-500/10"
                  }`}
                >
                  {plan.button}
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* E-commerce Plan */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-r from-[#201d29] via-[#191b2b] to-[#171827]">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:p-12">
            <div>
              <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                Online Store Solution
              </span>

              <h3 className="mt-5 text-3xl font-bold text-white">
                E-commerce Website
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                Take your business online with a customized shopping experience.
                Let your customers browse, order and shop with ease.
              </p>

              <div className="mt-7">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-gray-300">₹</span>
                  <span className="text-5xl font-bold text-white">39,999</span>
                  <span className="text-sm text-gray-400">+</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Starting price · One-time payment
                </p>
              </div>

              <p className="mt-5 text-xs text-gray-400">
                Estimated delivery: 20–30 working days
              </p>

              <Link
                href="/contact?service=E-commerce%20Website"
                className="mt-7 inline-flex items-center rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-bold text-gray-950 transition hover:bg-amber-300"
              >
                Discuss Your Project <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="grid content-center gap-4 sm:grid-cols-2">
              {ecommerceFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-xs text-amber-300">
                    ✓
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Quote */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white">
            Need Something More Customized?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400">
            Have a unique idea or specific requirements? Let's discuss your
            project and create a solution tailored to your business.
          </p>
          <Link
            href="/contact?service=Custom%20Website"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-purple-300 transition hover:text-purple-200"
          >
            Request a Custom Quote <span>→</span>
          </Link>
        </div>

        {/* Pricing Notes */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <h3 className="text-base font-bold text-white">
            A Few Things to Know
          </h3>

          <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2">
            <p>• Domain and hosting charges are separate.</p>
            <p>
              • Premium plugins, paid assets and third-party services are extra.
            </p>
            <p>• 50% advance is required to begin the project.</p>
            <p>• Remaining 50% is payable before final launch.</p>
            <p>
              • Delivery timelines start after receiving the advance and
              required content.
            </p>
            <p>• Additional pages and features are quoted separately.</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">
            Not sure which plan is right for you?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-purple-500/10"
          >
            Talk to Our Team <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
