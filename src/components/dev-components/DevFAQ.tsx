"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getLanguageFromPathname } from '@/i18n/config';
import { getServicesDictionary } from '@/i18n/get-services-dictionary';

export default function DevFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = getServicesDictionary(
    getLanguageFromPathname(usePathname())
  ).webDevelopment.faq;

  return (
    <section className="relative w-full bg-[#fafafa] z-10 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-16 text-center">
          {t.title}
        </h2>

        <div className="flex flex-col border-t border-black/10">
          {t.items.map((faq, index) => {
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
