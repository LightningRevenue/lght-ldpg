import React from 'react';

const ppcInfo = [
  {
    title: 'Immediate Traction',
    desc: 'Unlike organic methods that take months, properly structured PPC campaigns put your offer at the top of Page 1 instantly. Capture high-intent traffic the day we launch.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Hyper-Targeted Audiences',
    desc: 'We don\'t rely on hope. We target users based on precise search intent, specific competitor interests, B2B job titles, or exact firmographic data.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: 'Complete Cost Control',
    desc: 'Stop ad spend bleeding. Every dollar is tracked down to the exact keyword that generated the sale. You have complete transparency over your daily budgets.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'A/B Tested Creatives',
    desc: 'We run dozens of micro-variations of ad copy, headlines, and visuals simultaneously. The data tells us exactly what makes your specific audience click.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: 'Retargeting Architecture',
    desc: '98% of users don\'t convert on their first visit. We build aggressive, cross-platform retargeting funnels that follow them until they buy.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'Data-Driven Scaling',
    desc: 'Once we establish a profitable Return on Ad Spend (ROAS), we systemically increase the budget. You buy revenue, not just clicks.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function PPCAbout() {
  return (
    <section className="relative z-10 py-32 px-6 bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-6">
            The Anatomy of Correct PPC.
          </h2>
          <p className="text-black/50 font-light text-lg">
            We don't just "run ads". We engineer financial engines. Every campaign is built to lower your Customer Acquisition Cost while scaling your volume.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-32">
          {ppcInfo.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-[#fafafa] hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/20 transition-all duration-500 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium text-black mb-3">{item.title}</h3>
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
            <div className="text-xs font-bold text-white/50 mb-6 uppercase tracking-[0.2em]">The LRVN Standard</div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
              How much can you grow <br className="hidden sm:block"/> with elite PPC?
            </h3>
            <p className="text-white/70 font-light leading-relaxed max-w-xl text-lg">
              When conversion tracking is flawless, creatives are rigorously tested, and bidding strategies are automated through machine learning, the results are exponential. A properly audited and restructured PPC account typically sees a <strong className="text-white font-medium">300% increase in qualified lead volume</strong> within the first 60 days, while simultaneously dropping the Cost Per Acquisition (CPA).
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-5xl font-medium text-white mb-1">300<span className="text-[#2f5b7c]">%</span></span>
              <span className="text-xs tracking-widest text-white/50 uppercase font-medium">More Leads</span>
            </div>
            <div className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-5xl font-medium text-white mb-1">-40<span className="text-[#2f5b7c]">%</span></span>
              <span className="text-xs tracking-widest text-white/50 uppercase font-medium">Lower CPA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
