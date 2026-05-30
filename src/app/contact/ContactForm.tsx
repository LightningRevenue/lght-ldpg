"use client";

import React, { useState } from "react";

const serviceOptions = [
  "PPC Management",
  "SEO Optimization",
  "Web Development",
  "Software Development",
  "Social Media Management",
  "UI/UX Design",
  "Lead Generation",
  "Sales Tools Set-Up",
  "Custom Scope",
];

const budgetOptions = ["Under $5k", "$5k - $15k", "$15k - $50k", "$50k - $150k", "$150k+"];
const timelineOptions = ["Immediately", "This month", "This quarter", "Planning ahead"];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setSubmitError("");
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "The request could not be submitted.");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "The request could not be submitted.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(event) => updateField("name", event.target.value)}
          required
          className="w-full rounded-2xl border border-black/10 bg-[#fafafa] px-5 py-4 text-sm text-black outline-none transition-colors placeholder:text-black/30 focus:border-[#2f5b7c]"
        />
        <input
          type="email"
          placeholder="Work Email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          required
          className="w-full rounded-2xl border border-black/10 bg-[#fafafa] px-5 py-4 text-sm text-black outline-none transition-colors placeholder:text-black/30 focus:border-[#2f5b7c]"
        />
      </div>

      <input
        type="text"
        placeholder="Company URL or Name"
        value={formData.company}
        onChange={(event) => updateField("company", event.target.value)}
        className="mt-4 w-full rounded-2xl border border-black/10 bg-[#fafafa] px-5 py-4 text-sm text-black outline-none transition-colors placeholder:text-black/30 focus:border-[#2f5b7c]"
      />

      <div className="mt-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-3">Service</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-2">
          {serviceOptions.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => updateField("service", service)}
              className={`min-h-14 rounded-2xl border px-4 py-3 text-left text-sm font-medium leading-snug transition-all ${
                formData.service === service
                  ? "border-black bg-black text-white shadow-lg"
                  : "border-black/10 bg-[#fafafa] text-black/70 hover:border-black/30"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-3">Budget</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-2">
            {budgetOptions.map((budget) => (
              <button
                key={budget}
                type="button"
                onClick={() => updateField("budget", budget)}
                className={`min-h-12 rounded-2xl border px-4 py-3 text-left text-sm font-medium leading-snug transition-all ${
                  formData.budget === budget
                    ? "border-[#2f5b7c] bg-[#2f5b7c] text-white shadow-lg"
                    : "border-black/10 bg-[#fafafa] text-black/70 hover:border-black/30"
                }`}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-3">Timeline</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-2">
            {timelineOptions.map((timeline) => (
              <button
                key={timeline}
                type="button"
                onClick={() => updateField("timeline", timeline)}
                className={`min-h-12 rounded-2xl border px-4 py-3 text-left text-sm font-medium leading-snug transition-all ${
                  formData.timeline === timeline
                    ? "border-black bg-black text-white shadow-lg"
                    : "border-black/10 bg-[#fafafa] text-black/70 hover:border-black/30"
                }`}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>
      </div>

      <textarea
        placeholder="What should we know before we talk?"
        value={formData.message}
        onChange={(event) => updateField("message", event.target.value)}
        required
        className="mt-6 h-36 w-full resize-none rounded-2xl border border-black/10 bg-[#fafafa] px-5 py-4 text-sm text-black outline-none transition-colors placeholder:text-black/30 focus:border-[#2f5b7c]"
      />

      {submitError && <p className="mt-4 text-sm text-red-600">{submitError}</p>}
      {isSubmitted && <p className="mt-4 text-sm text-emerald-600">Request submitted. We will get back to you shortly.</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-black px-8 py-4 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#2f5b7c] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
