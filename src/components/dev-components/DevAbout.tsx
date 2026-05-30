import React from 'react';

const devInfo = [
  {
    title: 'Modern Tech Stack',
    desc: 'We build exclusively on Next.js, React, and Tailwind CSS. This ensures your application is fast, secure, and ready to scale without legacy constraints.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Headless CMS',
    desc: 'Decoupling the frontend from the backend. We integrate Sanity or Contentful so your marketing team can edit content instantly while developers maintain full code control.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    title: 'Conversion UX/UI',
    desc: 'Every interface is designed with a singular goal: driving action. We utilize behavioral psychology principles to ensure a frictionless user journey.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Core Web Vitals',
    desc: 'Speed is a ranking factor. We aggressively optimize images, utilize edge caching, and minimize main-thread work to ensure perfect Lighthouse scores.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Custom Integrations',
    desc: "Your website shouldn't be an island. We build custom API bridges to seamlessly connect your new platform with Hubspot, Salesforce, or bespoke ERPs.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Security & Compliance',
    desc: 'Enterprise-grade protection. From automated SOC2 compliance checks to zero-trust server architectures, your data remains impenetrable.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function DevAbout() {
  return (
    <section className="relative z-10 py-32 px-6 bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-6">
            The Anatomy of Elite Web Dev.
          </h2>
          <p className="text-black/50 font-light text-lg">
            We don't just "make websites". We engineer digital products. Every
            line of code is optimized for speed, scalability, and a flawless
            user experience.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-32">
          {devInfo.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-[#fafafa] hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/20 transition-all duration-500 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium text-black mb-3">
                {item.title}
              </h3>
              <p className="text-black/60 font-light leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight / Growth Stat */}
        <div className="w-full relative rounded-3xl overflow-hidden bg-black text-white p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-black/10 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[#2f5b7c]/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 flex-1">
            <div className="text-xs font-bold text-white/50 mb-6 uppercase tracking-[0.2em]">
              The LightningRevenue Standard
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
              How much can you grow <br className="hidden sm:block" /> with a
              performance site?
            </h3>
            <p className="text-white/70 font-light leading-relaxed max-w-xl text-lg">
              When a website loads instantly and the user experience is
              friction-less, conversion rates naturally skyrocket. A properly
              re-architected Next.js platform typically yields a{' '}
              <strong className="text-white font-medium">
                60% increase in mobile conversion rates
              </strong>{' '}
              within the first month, while drastically dropping your Cost Per
              Acquisition (CPA) on ad platforms.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-5xl font-medium text-white mb-1">
                60<span className="text-[#2f5b7c]">%</span>
              </span>
              <span className="text-xs tracking-widest text-white/50 uppercase font-medium">
                Higher CVR
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-5xl font-medium text-white mb-1">
                &lt; 1s
              </span>
              <span className="text-xs tracking-widest text-white/50 uppercase font-medium">
                Load Time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
