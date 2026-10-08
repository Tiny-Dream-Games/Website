"use client";

import { useState } from "react";

export default function ContactForm() {
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

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
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
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setStatus({
        type: "success",
        message:
          "Your inquiry has been sent successfully. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-white"
        >
          Name <span className="text-[#A78BFA]">*</span>
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#7C3AED]/60 focus:bg-white/[0.06]"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-white"
        >
          Email <span className="text-[#A78BFA]">*</span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#7C3AED]/60 focus:bg-white/[0.06]"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-white"
        >
          Phone / WhatsApp
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#7C3AED]/60 focus:bg-white/[0.06]"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-medium text-white"
        >
          Service <span className="text-[#A78BFA]">*</span>
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-xl border border-white/[0.08] bg-[#151a2b] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#7C3AED]/60"
        >
          <option value="" disabled>
            Select a service
          </option>

          <option value="Game Development">
            Game Development
          </option>

          <option value="Web Development">
            Web Development
          </option>

          <option value="App Development">
            App Development
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label
          htmlFor="budget"
          className="mb-2 block text-sm font-medium text-white"
        >
          Estimated Budget
        </label>

        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="w-full rounded-xl border border-white/[0.08] bg-[#151a2b] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#7C3AED]/60"
        >
          <option value="" disabled>
            Select your budget
          </option>

          <option value="Under ₹50,000">
            Under ₹50,000
          </option>

          <option value="₹50,000 – ₹1,00,000">
            ₹50,000 – ₹1,00,000
          </option>

          <option value="₹1,00,000 – ₹3,00,000">
            ₹1,00,000 – ₹3,00,000
          </option>

          <option value="₹3,00,000+">
            ₹3,00,000+
          </option>

          <option value="Not sure yet">
            Not sure yet
          </option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-white"
        >
          Project Message <span className="text-[#A78BFA]">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your project, idea, requirements or goals..."
          className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#7C3AED]/60 focus:bg-white/[0.06]"
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
        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#7C3AED] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Inquiry"}

        {!loading && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </button>

      <p className="text-center text-xs text-white/35">
        We usually respond within 1–2 business days.
      </p>
    </form>
  );
}