"use client";

import React, { useState } from 'react';

const softwareFaqs = [
  {
    question: "Do you take over existing legacy codebases?",
    answer: "Yes, but only after a rigorous technical audit. If the technical debt is too severe, we will recommend a strangler fig pattern to gradually rewrite the monolith into microservices, rather than building on a broken foundation."
  },
  {
    question: "What development methodology do you use?",
    answer: "We strictly adhere to Agile Scrum methodologies. You will have full transparency via Jira or Linear, daily stand-up notes, and two-week sprint deliverables. You are never left in the dark about progress."
  },
  {
    question: "How do you handle security and data compliance?",
    answer: "Security is engineered into our architecture from day one, not added as an afterthought. We implement SOC2 compliant practices, data encryption at rest and in transit, and conduct automated vulnerability scanning before every deployment."
  },
  {
    question: "Do we own the Intellectual Property (IP)?",
    answer: "Absolutely. We are an engineering partner, not a software licensing firm. Upon final invoice settlement, all source code, architecture diagrams, cloud environments, and IP are completely legally transferred to your company."
  }
];

export default function SoftwareFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-[#fafafa] z-10 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-16 text-center">
          Engineering Logistics.
        </h2>

        <div className="flex flex-col border-t border-black/10">
          {softwareFaqs.map((faq, index) => {
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
