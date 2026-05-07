import React from 'react';

const painPoints = [
  "Buying expensive, outdated databases where 60% of the emails bounce immediately.",
  "Sending manual emails from your main domain that get instantly flagged as spam by Google.",
  "Hiring expensive SDRs to do tedious manual prospecting instead of actually closing deals.",
  "Relying completely on unpredictable inbound marketing or expensive paid ads to feed your pipeline.",
];

const outcomes = [
  "Custom-built scraping systems that pull verified, real-time leads based on precise intent signals.",
  "Bulletproof email infrastructure with rotated secondary domains to guarantee 100% inbox placement.",
  "Automated sequencing tools running thousands of highly personalized touches per day on autopilot.",
  "An in-house, predictable outbound machine that your sales team owns and controls indefinitely.",
];

export default function LeadGenPainPoints() {
  return (
    <section className="relative z-10 py-32 px-6 bg-[#fafafa] w-full border-t border-black/5 rounded-t-[3rem] sm:rounded-t-[4rem] shadow-[0_-20px_40px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-black mb-4">
            From Manual SDRs to Automation.
          </h2>
          <p className="text-black/50 font-light text-lg max-w-2xl">
            Outbound sales isn't about hustle anymore. It's a technical engineering problem. We build the infrastructure to scale your outreach without breaking your domain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pain Points (The Reality) */}
          <div className="flex flex-col p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/40">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-black/80">Common Reality</h3>
            </div>
            
            <div className="flex flex-col gap-6 flex-1">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-black/30 transition-colors">
                    <span className="w-1.5 h-1.5 bg-black/20 rounded-full"></span>
                  </div>
                  <p className="text-black/60 font-light text-base sm:text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes (The LRVN Standard) */}
          <div className="flex flex-col p-8 sm:p-10 rounded-3xl bg-black border border-black shadow-2xl relative overflow-hidden transform lg:-translate-y-4">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2f5b7c]/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white">The LRVN Standard</h3>
            </div>
            
            <div className="relative z-10 flex flex-col gap-6 flex-1">
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full border border-[#2f5b7c]/50 bg-[#2f5b7c]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#2f5b7c]/30 transition-colors">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </div>
                  <p className="text-white/80 font-light text-base sm:text-lg leading-relaxed">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
