import React from 'react';

const uiuxInfo = [
  {
    title: 'Behavioral Psychology',
    desc: "We don't guess. We design for human cognitive patterns. Every button placement, color contrast, and typographic hierarchy is chosen to drive a specific user action.",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Wireframing & Prototyping',
    desc: 'We map out entire user journeys in Figma before a single line of code is written. Allowing us to validate complex logic and flows with zero technical debt.',
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
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    title: 'Micro-Interactions',
    desc: 'The difference between a good product and a great one is in the details. We implement subtle animations that provide instant feedback and delight users.',
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
    title: 'Design Systems',
    desc: 'We build scalable, tokenized component libraries. Ensuring that as your product grows to hundreds of pages, your brand aesthetic remains 100% consistent.',
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: 'WCAG Accessibility',
    desc: 'Inclusive design is a legal and ethical requirement. We ensure high-contrast ratios, screen-reader compatibility, and full keyboard navigation across your platform.',
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
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Conversion Rate Optimization',
    desc: 'Design must serve revenue. We continuously analyze heatmaps and run A/B tests on landing pages to mathematically guarantee the highest possible conversion rate.',
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function UIUXAbout() {
  return (
    <section className="relative z-10 py-32 px-6 bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-6">
            The Anatomy of Elite UI/UX.
          </h2>
          <p className="text-black/50 font-light text-lg">
            Every pixel serves a purpose. We combine psychological principles
            with rigorous data analysis to build interfaces that feel effortless
            and convert ruthlessly.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-32">
          {uiuxInfo.map((item, idx) => (
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
              How much revenue is hidden <br className="hidden sm:block" /> in
              bad design?
            </h3>
            <p className="text-white/70 font-light leading-relaxed max-w-xl text-lg">
              When users are confused, they leave. When an interface feels
              premium and intuitive, trust skyrockets. A properly architected UX
              redesign typically yields a{' '}
              <strong className="text-white font-medium">
                35% higher checkout conversion rate
              </strong>{' '}
              within the first 60 days, while completely unifying your visual
              identity across all platforms.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-5xl font-medium text-white mb-1">
                35<span className="text-[#2f5b7c]">%</span>
              </span>
              <span className="text-xs tracking-widest text-white/50 uppercase font-medium">
                Higher CVR
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-5xl font-medium text-white mb-1">
                100<span className="text-[#2f5b7c]">%</span>
              </span>
              <span className="text-xs tracking-widest text-white/50 uppercase font-medium">
                Consistency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
