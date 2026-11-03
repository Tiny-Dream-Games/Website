import Link from "next/link";

const plans = [
  {
    name: "2D Game Development",
    subtitle: "Bring your game idea to life.",
    price: "29,999",
    description:
      "A great starting point for casual, arcade and mobile 2D games.",
    features: [
      "Unity 2D game development",
      "Core gameplay mechanics",
      "Player movement & controls",
      "Basic game UI and menus",
      "Scoring system",
      "Sound effects integration",
      "Basic game testing",
      "2 revision rounds",
    ],
    delivery: "3–5 Weeks",
    popular: false,
  },
  {
    name: "Indie Game Development",
    subtitle: "Create engaging gaming experiences.",
    price: "79,999",
    description:
      "A complete indie game solution with engaging gameplay and polished mechanics.",
    features: [
      "2D or basic 3D game development",
      "Custom gameplay mechanics",
      "Character & enemy systems",
      "Level design & progression",
      "Game UI/UX development",
      "Audio & visual effects",
      "Score & save systems",
      "Performance optimization",
      "Testing & bug fixing",
      "3 revision rounds",
    ],
    delivery: "6–10 Weeks",
    popular: true,
  },
  {
    name: "Advanced 3D Game",
    subtitle: "Build bigger. Create more.",
    price: "1,49,999",
    description: "Advanced 3D game experiences for ambitious gaming projects.",
    features: [
      "Custom 3D game development",
      "Advanced player mechanics",
      "Enemy AI & interactions",
      "3D environments & levels",
      "Advanced UI systems",
      "Animation & VFX integration",
      "Audio implementation",
      "Performance optimization",
      "Testing & bug fixing",
      "4 revision rounds",
    ],
    delivery: "10–16 Weeks",
    popular: false,
  },
];

const gameTypes = [
  "2D Mobile Games",
  "3D Games",
  "Hyper-casual Games",
  "Endless Runner Games",
  "FPS & Shooting Games",
  "Simulation Games",
  "Arcade Games",
  "Educational Games",
];

const additionalServices = [
  { name: "Game Prototype", price: "₹9,999+" },
  { name: "2D Game UI Development", price: "₹7,999+" },
  { name: "3D Environment Integration", price: "₹14,999+" },
  { name: "Game Bug Fixing", price: "₹2,999+" },
  { name: "Game Optimization", price: "₹4,999+" },
  { name: "Ads Integration", price: "₹4,999+" },
  { name: "Store Publishing Assistance", price: "₹3,999+" },
  { name: "Game Maintenance", price: "₹4,999/month" },
];

export default function GamePricing() {
  return (
    <section
      id="game-pricing"
      className="relative overflow-hidden bg-[#111827] py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            Game Development Pricing
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            From Game Ideas to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
              Playable Experiences
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Whether you're creating a simple 2D mobile game or an immersive 3D
            experience, we help turn your vision into a playable reality.
          </p>
        </div>

        {/* Pricing cards */}
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

              {/* Card footer */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="mb-5 flex items-center justify-between gap-2 text-xs">
                  <span className="text-gray-500">Estimated delivery</span>
                  <span className="font-semibold text-gray-200">
                    {plan.delivery}
                  </span>
                </div>

                <Link
                  href={`/contact?service=Game%20Development&plan=${encodeURIComponent(plan.name)}`}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-purple-400"
                      : "border border-white/15 bg-white/5 text-white hover:border-purple-400/50 hover:bg-purple-500/10"
                  }`}
                >
                  Discuss This Plan <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom game development */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-r from-[#211d2c] via-[#191b2b] to-[#171827] p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-amber-400/10 blur-[90px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Beyond Standard Packages
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Have a Unique Game Idea?
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
                Have something different in mind? From original gameplay
                mechanics to custom gaming experiences, let's discuss your idea
                and build something unique.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {gameTypes.map((type) => (
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
                href="/contact?service=Custom%20Game%20Development"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-gray-950 transition hover:bg-amber-300"
              >
                Request a Quote <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional services */}
        <div className="mt-20">
          <div className="mb-9 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              Flexible Add-ons
            </span>

            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Additional Game Services
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400">
              Need extra functionality or support? Add individual services to
              your game project.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-purple-400/40 hover:bg-purple-500/[0.06]"
              >
                <h4 className="text-sm font-semibold text-gray-200">
                  {service.name}
                </h4>

                <p className="mt-3 text-lg font-bold text-purple-300">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-20 border-y border-white/10 py-10">
          <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our Game Development Technology
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "Unity",
              "C#",
              "Android",
              "Windows",
              "2D Development",
              "3D Development",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project information */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <h3 className="text-base font-bold text-white">
            Project Information
          </h3>

          <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2">
            <p>• Prices are starting estimates based on project scope.</p>
            <p>• Premium assets, plugins and third-party licenses are extra.</p>
            <p>
              • Multiplayer, backend servers and live services require custom
              quotes.
            </p>
            <p>• Store developer account fees are separate.</p>
            <p>• 50% advance is required to begin development.</p>
            <p>• Remaining payment is due before final handover.</p>
            <p>• Delivery starts after scope approval and required assets.</p>
            <p>
              • Source code handover and post-launch support are agreed
              separately.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">
            Not sure which game development package is right for you?
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-500/10"
          >
            Let's Talk About Your Game <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
