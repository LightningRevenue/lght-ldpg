"use client";

import React, { useState } from 'react';

const seoFaqs = [
  {
    question: "How long does SEO actually take?",
    answer: "Unlike PPC, SEO is a compounding long-term asset. We typically see initial ranking movements and crawl improvements within the first 45 days, but significant revenue-generating pipeline usually scales between months 4 and 6, depending on your industry's competitiveness."
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer: "No credible agency guarantees specific rankings because no agency controls Google's algorithm. We guarantee flawless technical execution, high-DR editorial link acquisition, and content that perfectly matches search intent—the exact inputs required to dominate organic search."
  },
  {
    question: "Who writes the actual content?",
    answer: "We don't use cheap freelancers or unedited AI. Our in-house editorial team works directly with your Subject Matter Experts (SMEs) to produce authoritative, technically accurate content that demonstrates genuine E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)."
  },
  {
    question: "What happens during a Google Core Update?",
    answer: "Because we build strictly on a foundation of technical excellence and white-hat link building, our clients typically see traffic increases during core updates. We never rely on temporary loopholes or manipulative tactics that trigger algorithmic penalties."
  }
];

export default function SEOFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-[#fafafa] z-10 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-16 text-center">
          SEO Logistics.
        </h2>

        <div className="flex flex-col border-t border-black/10">
          {seoFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-black/10">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-8 sm:py-10 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-xl sm:text-2xl font-medium tracking-tight text-black group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pr-8">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border border-black/10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-45 bg-black text-white border-black' : 'text-black group-hover:border-black/30'}`}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-black/60 font-light text-lg leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
