"use client";

import React, { useEffect, useState } from 'react';

export default function PPCHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 500, 0);
  const translateY = scrollY * 0.4;

  return (
    <section className="relative w-full h-screen sticky top-0 overflow-hidden bg-[#fafafa] z-0">
      
      {/* Container */}
      <div 
        className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-start justify-center h-full px-6 pt-20"
        style={{ 
          opacity, 
          transform: `translateY(${translateY}px)`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
        }}
      >
        
        {/* Availability / Category */}
        <div className="flex items-center gap-3 mb-10 sm:mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-30"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black/60"></span>
          </div>
          <span className="text-[13px] font-medium text-black/50 tracking-wide uppercase">Performance Marketing</span>
        </div>

        {/* Massive Typography Hero */}
        <h1 className="text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11.5rem] font-medium tracking-[-0.04em] text-[#2f5b7c] leading-[0.85] -ml-1 sm:-ml-2">
          <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Data-Driven</span>
          <span className="block text-[#2f5b7c]/20 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>PPC Scaling.</span>
        </h1>

        {/* Subtext and CTA - Asymmetric placement */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between mt-16 sm:mt-24 md:mt-32 gap-12">
          <p className="max-w-sm text-base sm:text-lg text-black/60 font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            We engineer high-converting paid search and social campaigns. Maximizing return on ad spend through rigorous optimization.
          </p>

          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }} 
              className="group relative flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-black text-white hover:scale-[0.97] hover:bg-black/90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden pointer-events-auto cursor-pointer focus:outline-none"
            >
              <span className="text-[13px] font-medium tracking-wide z-10 group-hover:-translate-y-2 transition-transform duration-500">Audit my account</span>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <svg className="w-4 h-4 text-white rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
