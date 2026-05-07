import React from 'react';

const reasons = [
  {
    title: "Data-Backed Strategies.",
    description: "We don't do guesswork. Every campaign, design choice, and line of code is driven by hard data and user behavior analysis to ensure predictable and scalable growth."
  },
  {
    title: "Uncompromising Quality.",
    description: "We believe in digital craftsmanship. No templates, no shortcuts. We build bespoke solutions that perform flawlessly and position your brand at the premium level."
  },
  {
    title: "True Partnership.",
    description: "We aren't just an agency; we act as an extension of your internal team. We offer transparent communication, aligned goals, and a shared commitment to dominating your market."
  }
];

export default function WhyWorkWithUs() {
  return (
    <section className="relative w-full bg-[#fafafa] z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Sticky Title */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black leading-[1.05] mb-6">
              Why work<br />with us.
            </h2>
            <p className="text-black/50 font-light text-base sm:text-lg max-w-sm">
              We don't just deliver services; we build high-performance growth engines. Here is what sets our agency apart.
            </p>
            
            {/* Minimalist Decoration */}
            <div className="mt-12 w-12 h-[1px] bg-black/20"></div>
          </div>
        </div>

        {/* Right Side: Features List */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="border-t border-black/10 w-full"></div>
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group py-12 sm:py-16 flex flex-col sm:flex-row gap-4 sm:gap-12 border-b border-black/10 hover:bg-black/[0.02] transition-colors duration-500 -mx-6 px-6 sm:mx-0 sm:px-0"
            >
              <div className="font-mono text-xs sm:text-sm text-black/30 font-medium pt-1 sm:pt-2 w-8">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black mb-4 sm:mb-6 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {reason.title}
                </h3>
                <p className="text-black/60 font-light leading-relaxed max-w-xl text-base sm:text-lg">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
