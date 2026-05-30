"use client";

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter-approved", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "The subscription could not be saved.");
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "The subscription could not be saved.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-white z-10 py-32 px-6">
      <div className="max-w-4xl mx-auto text-center bg-[#fafafa] rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-20 border border-black/[0.05]">
        
        <div className="text-xs font-bold text-black/30 mb-6 uppercase tracking-[0.2em]">The Insight</div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-8">
          Weekly intelligence.
        </h2>
        
        <p className="text-black/50 font-light max-w-lg mx-auto text-base sm:text-lg mb-12 leading-relaxed">
          Join 5,000+ industry leaders who receive our unfiltered thoughts on digital scaling, technical execution, and agency operations.
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-md mx-auto flex items-center group">
          <input 
            type="email" 
            placeholder="name@company.com" 
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setSubmitError("");
              setIsSubmitted(false);
            }}
            required
            className="w-full bg-white border border-black/10 rounded-full py-4 pl-6 pr-36 text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500"
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white text-[13px] font-medium py-2.5 px-6 rounded-full hover:bg-black/90 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Saving..." : "Subscribe"}
          </button>
        </form>

        {submitError && (
          <p className="text-sm text-red-600 mt-5">{submitError}</p>
        )}
        {isSubmitted && (
          <p className="text-sm text-emerald-600 mt-5">You are on the approved insight list.</p>
        )}
        
        <p className="text-[11px] text-black/30 mt-6 font-light tracking-wide uppercase">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
