"use client";

import { useState } from "react";

export default function ProjectEnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const projectType = formData.get("projectType") as string;

    const serviceMap: Record<string, string> = {
      game: "Game Development",
      website: "Web Development",
      app: "App Development",
      other: "Other",
    };

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: "",
      service: serviceMap[projectType] || "Other",
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your enquiry.");
      }

      setStatus({
        type: "success",
        message:
          "Your enquiry has been sent successfully. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("Project enquiry error:", error);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your enquiry right now.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-9">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium text-white/50"
            >
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#7C3AED]/50 focus:bg-white/[0.05]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium text-white/50"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#7C3AED]/50 focus:bg-white/[0.05]"
            />
          </div>
        </div>

        {/* Project Type */}
        <div>
          <label className="mb-3 block text-xs font-medium text-white/50">
            What are you building?
          </label>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <label className="group cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value="game"
                required
                className="peer sr-only"
              />

              <span className="flex h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 text-xs text-white/40 transition peer-checked:border-[#7C3AED]/50 peer-checked:bg-[#7C3AED]/10 peer-checked:text-[#A78BFA] group-hover:border-white/15">
                Game
              </span>
            </label>

            <label className="group cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value="website"
                className="peer sr-only"
              />

              <span className="flex h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 text-xs text-white/40 transition peer-checked:border-[#A78BFA]/50 peer-checked:bg-[#A78BFA]/10 peer-checked:text-[#C084FC] group-hover:border-white/15">
                Website
              </span>
            </label>

            <label className="group cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value="app"
                className="peer sr-only"
              />

              <span className="flex h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 text-xs text-white/40 transition peer-checked:border-[#FACC15]/50 peer-checked:bg-[#FACC15]/10 peer-checked:text-[#FACC15] group-hover:border-white/15">
                App
              </span>
            </label>

            <label className="group cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value="other"
                className="peer sr-only"
              />

              <span className="flex h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 text-xs text-white/40 transition peer-checked:border-white/20 peer-checked:bg-white/[0.07] peer-checked:text-white group-hover:border-white/15">
                Other
              </span>
            </label>
          </div>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="mb-2 block text-xs font-medium text-white/50"
          >
            Estimated Budget
          </label>

          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="h-12 w-full appearance-none rounded-xl border border-white/[0.08] bg-[#171B2A] px-4 text-sm text-white/50 outline-none transition focus:border-[#7C3AED]/50"
          >
            <option value="" disabled>
              Select a budget range
            </option>

            <option value="Under ₹25,000">Under ₹25,000</option>

            <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>

            <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>

            <option value="₹1,00,000 – ₹3,00,000">₹1,00,000 – ₹3,00,000</option>

            <option value="₹3,00,000+">₹3,00,000+</option>

            <option value="Let's discuss">Let's discuss</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-medium text-white/50"
          >
            Tell us about your project
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your idea, goals, features or anything else you'd like us to know..."
            className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition focus:border-[#7C3AED]/50 focus:bg-white/[0.05]"
          />
        </div>

        {/* Status */}
        {status && (
          <div
            className={`rounded-xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                : "border-red-400/20 bg-red-400/10 text-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(124,58,237,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(124,58,237,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Project Enquiry"}

          {!loading && (
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          )}
        </button>

        <p className="text-center text-[10px] leading-5 text-white/20">
          We'll review your idea and get back to you with the next steps.
        </p>
      </form>
    </div>
  );
}
