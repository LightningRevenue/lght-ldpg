import React from 'react';

const advancedFeatures = [
  {
    title: 'Kubernetes Orchestration',
    description: 'Containerizing your applications using Docker and managing them with Kubernetes. Allowing specific microservices to automatically scale up during traffic spikes.'
  },
  {
    title: 'Machine Learning Integration',
    description: 'Connecting custom software to powerful LLMs (OpenAI, Anthropic) or deploying proprietary Python-based ML models directly into your production pipelines.'
  },
  {
    title: 'Event-Driven Architectures',
    description: 'Utilizing Apache Kafka or AWS EventBridge to build systems that react instantly to data changes, decoupling services for maximum resilience.'
  },
  {
    title: 'Big Data ETL Pipelines',
    description: 'Engineering massive data processing workflows to Extract, Transform, and Load (ETL) terabytes of information into highly structured data warehouses like Snowflake.'
  }
];

export default function SoftwareAdvanced() {
  return (
    <section className="relative w-full bg-[#fafafa] z-10 py-32 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Title */}
        <div className="w-full md:w-1/3">
          <div className="sticky top-32">
            <div className="text-xs font-bold text-black/40 mb-6 uppercase tracking-widest">Advanced Engineering</div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-black leading-tight mb-6">
              Beyond standard <br />applications.
            </h2>
            <p className="text-black/50 font-light text-base sm:text-lg max-w-sm">
              We engineer deep-tech solutions by integrating Kubernetes orchestration, AI logic, and asynchronous event-driven architectures.
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
