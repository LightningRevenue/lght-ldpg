import React from 'react';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'PPC',
    href: '/services/ppc',
    description: 'Data-driven pay-per-click campaigns designed to maximize ROI, targeting the right audience at the perfect moment for your brand.',
  },
  {
    number: '02',
    title: 'Web Development',
    href: '/services/web-development',
    description: 'Ultra-fast, meticulously designed websites tailored for conversion, merging aesthetics with high-performance architectures.',
  },
  {
    number: '03',
    title: 'Software Development',
    href: '/services/software-development',
    description: 'Custom scalable applications and internal tools built from the ground up to solve complex business challenges securely.',
  },
  {
    number: '04',
    title: 'On-Demand Lead Generation Systems',
    href: '/services/lead-generation',
    description: 'Automated, predictable inbound lead engines that feed your sales pipeline 24/7 without manual prospecting.',
  }
];

export default function MainServices() {
  return (
    <section className="relative w-full bg-white z-10 py-32 px-6 rounded-t-[3rem] sm:rounded-t-[4rem] shadow-[0_-20px_40px_rgba(0,0,0,0.03)] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-black mb-4">Core Services.</h2>
            <p className="text-slate-500 font-light max-w-md">Our focused expertise to accelerate your digital growth and operational efficiency.</p>
          </div>
          <Link href="/contact" className="text-[13px] font-bold uppercase tracking-wider text-black border-b border-black pb-1 hover:text-black/60 transition-colors">
            View All Capabilities
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <Link key={service.href} href={service.href} className="group block cursor-pointer">
              <div className="border-t border-black/10 pt-6 transition-colors duration-500 group-hover:border-black/40">
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black">
                    {service.title}
                  </h3>
                  <span className="text-sm font-medium text-black/30 font-mono">
                    {service.number}
                  </span>
                </div>
                <p className="text-black/60 font-light leading-relaxed max-w-sm mb-8">
                  {service.description}
                </p>
                
                {/* Minimalist Arrow */}
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <svg className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300 -rotate-45 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
