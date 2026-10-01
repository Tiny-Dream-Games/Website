"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Client Name",
    role: "Game Project",
    company: "Project / Company",
    avatar: "CN",
    review:
      "Working with Tiny Dream Games was a smooth experience. They understood our idea, helped shape the gameplay direction, and kept the development process easy to follow.",
  },
  {
    name: "Client Name",
    role: "Mobile Game",
    company: "Project / Company",
    avatar: "CN",
    review:
      "The team was easy to communicate with and paid attention to the details that mattered. The overall development experience was clear and well organised.",
  },
  {
    name: "Client Name",
    role: "Indie Project",
    company: "Project / Company",
    avatar: "CN",
    review:
      "From the initial concept through development, the project stayed focused. Tiny Dream Games helped turn an early idea into something much more tangible.",
  },
  {
    name: "Client Name",
    role: "Game Development",
    company: "Project / Company",
    avatar: "CN",
    review:
      "We appreciated the attention given to gameplay, usability and performance. Communication throughout the project made it easy to understand the progress.",
  },
  {
    name: "Client Name",
    role: "Mobile Project",
    company: "Project / Company",
    avatar: "CN",
    review:
      "The development process felt collaborative from the beginning. The team listened to our requirements and worked towards a practical final product.",
  },
];

export default function REVIEWS() {
  const [current, setCurrent] = useState(0);

  const total = reviews.length;

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const previousReview = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-y border-white/10 bg-[#0D1422]">
      <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              Client Reviews
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built together. Remembered together.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
              Feedback from the people and teams we work with.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={previousReview}
              aria-label="Previous review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextReview}
              aria-label="Next review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* REVIEW SLIDER */}
        <div className="relative mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full shrink-0">
                <div className="grid gap-6 md:grid-cols-3">
                  {/* MAIN REVIEW */}
                  <div className="rounded-[28px] border border-white/10 bg-[#111827] p-8 md:col-span-2 lg:p-10">
                    <div className="flex items-center gap-4">
                      {/* AVATAR */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] text-sm font-bold text-white">
                        {review.avatar}
                      </div>

                      <div>
                        <p className="font-semibold text-white">
                          {review.name}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    {/* QUOTE */}
                    <div className="mt-10">
                      <span className="text-5xl leading-none text-[#7C3AED]">
                        “
                      </span>

                      <p className="-mt-2 max-w-3xl text-xl leading-9 text-gray-200 sm:text-2xl">
                        {review.review}
                      </p>
                    </div>

                    <div className="mt-9 flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-sm text-gray-500">
                        {review.company}
                      </span>

                      <span className="text-sm font-medium text-[#A78BFA]">
                        Verified feedback
                      </span>
                    </div>
                  </div>

                  {/* SIDE CARD */}
                  <div className="relative hidden overflow-hidden rounded-[28px] border border-purple-400/10 bg-gradient-to-br from-[#241449] via-[#171E31] to-[#111827] p-8 md:block">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-[#A78BFA]"
                          >
                            <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 9.7 9.7 0 0 1-4-.9L3 20l1.3-4.3A8.4 8.4 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />
                          </svg>
                        </div>

                        <p className="mt-8 text-lg font-medium leading-8 text-gray-200">
                          Real collaboration creates better games.
                        </p>
                      </div>

                      <div>
                        <div className="mb-3 h-px w-full bg-white/10" />

                        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                          Tiny Dream Games
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-[#7C3AED]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* PLACEHOLDER NOTICE */}
        <p className="mt-8 text-center text-xs text-gray-600">
          Testimonials will be replaced with verified client feedback.
        </p>
      </div>
    </section>
  );
}
