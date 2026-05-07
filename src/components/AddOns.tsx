import React from 'react';

const addons = [
  {
    title: "SLA Guarantees",
    description: "99.9% guaranteed uptime and rigorous performance benchmarks, fully backed by financial penalties if we ever fall short."
  },
  {
    title: "Dedicated Account Manager",
    description: "A seasoned senior strategist acting as your single point of contact, ensuring perfect alignment, rapid execution, and complete transparency."
  },
  {
    title: "On-Page Engineer",
    description: "Direct access to elite technical talent for immediate architectural changes, custom code injections, and on-the-fly technical SEO."
  },
  {
    title: "Incident Response Time",
    description: "Guaranteed initial human response under 30 minutes for any critical issues, accessible via your direct priority communication channels."
  },
  {
    title: "Fast-Track Resolution Time",
    description: "Immediate priority queue placement ensuring that critical blockers are fully diagnosed and resolved, typically within 2-4 hours."
  }
];

export default function AddOns() {
  return (
    <section className="relative w-full bg-[#fafafa] z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Title */}
        <div className="w-full md:w-1/3">
          <div className="sticky top-32">
            <div className="text-xs font-bold text-black/40 mb-6 uppercase tracking-widest">Enhancements</div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-black leading-tight mb-6">
              Add-On Services & <br />Guarantees.
            </h2>
            <p className="text-black/50 font-light text-base sm:text-lg max-w-sm">
              Fortify any engagement model with enterprise-level security, dedicated top-tier human resources, and iron-clad SLAs.
            </p>
          </div>
        </div>

        {/* Right Side: Table-like List */}
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="border-t border-black/10 w-full"></div>
          {addons.map((addon, index) => (
            <div 
              key={index} 
              className="group py-8 sm:py-12 flex flex-col sm:flex-row gap-4 sm:gap-12 border-b border-black/10 hover:bg-black/[0.02] transition-colors duration-500 -mx-6 px-6 sm:mx-0 sm:px-0 justify-between items-start"
            >
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-black w-full sm:w-1/2 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {addon.title}
              </h3>
              <p className="text-black/60 font-light leading-relaxed w-full sm:w-1/2 text-base sm:text-lg">
                {addon.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
