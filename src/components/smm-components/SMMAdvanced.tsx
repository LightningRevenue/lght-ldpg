import React from 'react';

const advancedFeatures = [
  {
    title: 'Social Listening APIs',
    description: 'Monitoring global brand sentiment and intercepting competitor complaints in real-time. We use tools like Brandwatch to find users actively looking for your solution.'
  },
  {
    title: 'Employee Advocacy Programs',
    description: 'Turning your entire C-suite and workforce into a synchronized LinkedIn distribution network, exponentially increasing B2B reach without ad spend.'
  },
  {
    title: 'Micro-Targeted Whitelisting',
    description: 'Running dark posts and paid social campaigns directly through creator and influencer handles to drastically reduce CPA and instantly boost trust.'
  },
  {
    title: 'Cross-Platform Pixel Tracking',
    description: 'Mapping the complex user journey from an initial organic TikTok view to a closed B2B deal 60 days later, proving the exact ROI of your organic social.'
  }
];

export default function SMMAdvanced() {
  return (
    <section className="relative w-full bg-[#fafafa] z-10 py-32 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Title */}
        <div className="w-full md:w-1/3">
          <div className="sticky top-32">
            <div className="text-xs font-bold text-black/40 mb-6 uppercase tracking-widest">Advanced Distribution</div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-black leading-tight mb-6">
              Beyond basic <br />posting.
            </h2>
            <p className="text-black/50 font-light text-base sm:text-lg max-w-sm">
              We move past standard content calendars by integrating employee advocacy, creator whitelisting, and advanced social listening APIs.
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
