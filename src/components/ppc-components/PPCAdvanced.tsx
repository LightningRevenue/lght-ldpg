import React from 'react';

const advancedFeatures = [
  {
    title: 'Precision Geo-Fencing',
    description: 'Beyond standard radius targeting. We deploy hyper-local geofencing to intercept high-value traffic around specific competitor headquarters, industry conferences, or precise zip codes.'
  },
  {
    title: 'Server-Side Tracking (CAPI)',
    description: 'Bypassing ad-blockers and iOS privacy restrictions. We build server-to-server data pipelines to feed the advertising algorithms with 100% accurate conversion data.'
  },
  {
    title: 'Predictive Bid Automation',
    description: 'Using custom scripts to manipulate your bids in real-time based on external APIs. We can automatically adjust your ad spend based on local weather changes or B2B market hours.'
  },
  {
    title: 'Multi-Touch Attribution',
    description: 'Stop guessing which ad actually worked. We track the entire 90-day user journey across Google, Meta, and LinkedIn to find the exact combination of touchpoints that drives revenue.'
  }
];

export default function PPCAdvanced() {
  return (
    <section className="relative w-full bg-[#fafafa] z-10 py-32 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Title */}
        <div className="w-full md:w-1/3">
          <div className="sticky top-32">
            <div className="text-xs font-bold text-black/40 mb-6 uppercase tracking-widest">Advanced Toolkit</div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-black leading-tight mb-6">
              Beyond standard <br />campaigns.
            </h2>
            <p className="text-black/50 font-light text-base sm:text-lg max-w-sm">
              We move past basic keyword targeting by integrating custom scripts, server-side tracking, and multi-channel attribution.
            </p>
          </div>
        </div>

        {/* Right Side: Table-like List */}
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="border-t border-black/10 w-full"></div>
          {advancedFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group py-8 sm:py-12 flex flex-col sm:flex-row gap-4 sm:gap-12 border-b border-black/10 hover:bg-black/[0.02] transition-colors duration-500 -mx-6 px-6 sm:mx-0 sm:px-0 justify-between items-start"
            >
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-black w-full sm:w-1/2 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {feature.title}
              </h3>
              <p className="text-black/60 font-light leading-relaxed w-full sm:w-1/2 text-base sm:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
