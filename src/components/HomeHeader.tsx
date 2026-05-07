"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const helpData = [
  {
    serviceId: 'ppc',
    serviceName: 'PPC Management',
    serviceDesc: 'Data-driven pay-per-click scaling.',
    outcome: 'Scale ROAS and decrease Cost Per Acquisition.',
  },
  {
    serviceId: 'seo',
    serviceName: 'SEO Optimization',
    serviceDesc: 'Technical & content-driven optimization.',
    outcome: 'Dominate niche search terms with high-intent traffic.',
  },
  {
    serviceId: 'web',
    serviceName: 'Web Development',
    serviceDesc: 'High-performance marketing platforms.',
    outcome: 'A blazing-fast, premium marketing site.',
  },
  {
    serviceId: 'software',
    serviceName: 'Software Development',
    serviceDesc: 'Custom apps and internal tools.',
    outcome: 'Custom software that automates 90% of manual work.',
  },
  {
    serviceId: 'smm',
    serviceName: 'Social Media Management',
    serviceDesc: 'Organic community building & growth.',
    outcome: 'A highly engaged social media following.',
  },
  {
    serviceId: 'uiux',
    serviceName: 'UI/UX Design',
    serviceDesc: 'Premium interface and experience design.',
    outcome: 'A world-class user interface that drives conversions.',
  },
  {
    serviceId: 'lead',
    serviceName: 'Lead Generation',
    serviceDesc: 'Automated B2B outreach systems.',
    outcome: 'Automated meeting booking with qualified prospects.',
  },
  {
    serviceId: 'sales',
    serviceName: 'Sales Tools Set-Up',
    serviceDesc: 'CRM and pipeline architecture.',
    outcome: 'A crystal-clear CRM architecture and short sales cycles.',
  }
];

export default function HomeHeader() {
  const [scrollY, setScrollY] = useState(0);
  
  // Modal State
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState(1);
  
  // Form State
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', company: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 500, 0);
  const translateY = scrollY * 0.4;

  const toggleSelection = (id: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(id)) {
      setList(list.filter(item => item !== id));
    } else {
      setList([...list, id]);
    }
  };

  const calculateRecommendations = () => {
    setSelectedServices([...selectedOutcomes]); // Pre-select services matching the chosen outcomes
    setPhase(3);
  };

  const resetAndClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setPhase(1);
      setQ1('');
      setQ2('');
      setSelectedOutcomes([]);
      setSelectedServices([]);
      setContactInfo({ name: '', email: '', company: '' });
    }, 300);
  };

  return (
    <>
      <section className="relative w-full h-screen sticky top-0 overflow-hidden bg-[#fafafa] z-0">
        
        {/* Container */}
        <div 
          className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-start justify-center h-full px-6 pt-20"
          style={{ 
            opacity, 
            transform: `translateY(${translateY}px)`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
          }}
        >
          
          {/* Availability / Status */}
          <div className="flex items-center gap-3 mb-10 sm:mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[13px] font-medium text-black/50 tracking-wide uppercase">Accepting new projects</span>
          </div>

          {/* Massive Typography Hero */}
          <h1 className="text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11.5rem] font-medium tracking-[-0.04em] text-[#2f5b7c] leading-[0.85] -ml-1 sm:-ml-2">
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Digital</span>
            <span className="block text-[#2f5b7c]/20 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Excellence.</span>
          </h1>

          {/* Subtext and CTA - Asymmetric placement */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between mt-16 sm:mt-24 md:mt-32 gap-12">
            <p className="max-w-sm text-base sm:text-lg text-black/60 font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              We are the agency merging minimalist design with cutting-edge engineering to build elite digital experiences.
            </p>

            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <button onClick={() => setIsOpen(true)} className="group relative flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-black text-white hover:scale-[0.97] hover:bg-black/90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden pointer-events-auto cursor-pointer focus:outline-none">
                <span className="text-[13px] font-medium tracking-wide z-10 group-hover:-translate-y-2 transition-transform duration-500">Let's talk</span>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <svg className="w-4 h-4 text-white rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Discovery Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 transition-opacity">
          <div className="bg-[#fafafa] w-full max-w-4xl h-[85vh] rounded-[2rem] overflow-hidden relative flex flex-col shadow-2xl animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-black/5 bg-white z-10 shrink-0">
              <div className="flex items-center gap-4">
                <span className="font-bold tracking-tight text-sm uppercase text-black">Discovery Session</span>
                <span className="text-xs font-mono bg-black/5 text-black/50 px-2 py-1 rounded">Phase {phase} of 4</span>
              </div>
              <button onClick={resetAndClose} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-black/50 hover:text-black">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-12">
              <div className="max-w-2xl mx-auto h-full flex flex-col">
                
                {/* PHASE 1: Open Questions */}
                {phase === 1 && (
                  <div className="animate-fade-in-up flex-1 flex flex-col">
                    <h3 className="text-3xl font-medium mb-2 text-black">Tell us about your context.</h3>
                    <p className="text-black/50 font-light mb-8">Before we talk services, we want to understand your business reality.</p>
                    
                    <div className="flex flex-col gap-6 flex-1">
                      <div className="flex flex-col gap-3">
                        <label className="text-sm font-medium text-black">1. What is the biggest bottleneck in your business right now?</label>
                        <textarea 
                          value={q1}
                          onChange={(e) => setQ1(e.target.value)}
                          placeholder="e.g. We get traffic, but no one converts. Or our sales cycle takes 6 months..."
                          className="w-full h-28 p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-black/30 resize-none text-black placeholder:text-black/30 text-sm"
                        ></textarea>
                      </div>

                      <div className="flex flex-col gap-3">
                        <label className="text-sm font-medium text-black">2. Where do you want the company to be in 12 months?</label>
                        <textarea 
                          value={q2}
                          onChange={(e) => setQ2(e.target.value)}
                          placeholder="e.g. Hit $1M ARR, completely automate lead gen, redesign the core product..."
                          className="w-full h-28 p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-black/30 resize-none text-black placeholder:text-black/30 text-sm"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* PHASE 2: Outcomes */}
                {phase === 2 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-3xl font-medium mb-2 text-black">Select desired outcomes</h3>
                    <p className="text-black/50 font-light mb-8">Which of these concrete results would help you achieve those goals?</p>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {helpData.map(item => {
                        const isSelected = selectedOutcomes.includes(item.serviceId);
                        return (
                          <button 
                            key={item.serviceId}
                            onClick={() => toggleSelection(item.serviceId, selectedOutcomes, setSelectedOutcomes)}
                            className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${isSelected ? 'border-black bg-black text-white shadow-lg' : 'border-black/10 bg-white text-black hover:border-black/30'}`}
                          >
                            <div className={`w-5 h-5 rounded-md border shrink-0 flex items-center justify-center ${isSelected ? 'border-white bg-white text-black' : 'border-black/30'}`}>
                              {isSelected && (
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="font-light text-sm">{item.outcome}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* PHASE 3: Services (Action Plan) */}
                {phase === 3 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-3xl font-medium mb-2 text-black">Your Action Plan</h3>
                    <p className="text-black/50 font-light mb-8">Based on your goals and desired outcomes, here are the exact services that map to your needs.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {helpData.map(item => {
                        const isRecommended = selectedOutcomes.includes(item.serviceId);
                        const isSelected = selectedServices.includes(item.serviceId);
                        return (
                          <button 
                            key={item.serviceId}
                            onClick={() => toggleSelection(item.serviceId, selectedServices, setSelectedServices)}
                            className={`relative text-left p-5 rounded-2xl border transition-all duration-300 ${isSelected ? 'border-black bg-black text-white shadow-lg' : 'border-black/10 bg-white text-black hover:border-black/30'}`}
                          >
                            {isRecommended && (
                              <div className="absolute -top-2.5 -right-2.5 bg-emerald-500 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-md z-10">
                                Match
                              </div>
                            )}
                            <div className="font-medium mb-1 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-white bg-white text-black' : 'border-black/30'}`}>
                                  {isSelected && (
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                                {item.serviceName}
                              </div>
                            </div>
                            <div className={`text-xs font-light pl-6 mt-1 ${isSelected ? 'text-white/70' : 'text-black/60'}`}>{item.serviceDesc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* PHASE 4: Contact Info */}
                {phase === 4 && (
                  <div className="animate-fade-in-up flex-1 flex flex-col justify-center">
                    <h3 className="text-3xl font-medium mb-2 text-black text-center">Let's build this.</h3>
                    <p className="text-black/50 font-light mb-10 text-center">Enter your details and our senior strategist will review your situation before we talk.</p>
                    
                    <div className="flex flex-col gap-5 max-w-md mx-auto w-full">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                        className="w-full p-4 rounded-xl border border-black/10 bg-white text-black focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
                      />
                      <input 
                        type="email" 
                        placeholder="Work Email" 
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                        className="w-full p-4 rounded-xl border border-black/10 bg-white text-black focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
                      />
                      <input 
                        type="text" 
                        placeholder="Company URL" 
                        value={contactInfo.company}
                        onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
                        className="w-full p-4 rounded-xl border border-black/10 bg-white text-black focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
                      />
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Modal Footer / Navigation */}
            <div className="p-6 border-t border-black/5 bg-white shrink-0 flex items-center justify-between">
              {phase === 1 ? (
                <div></div>
              ) : (
                <button 
                  onClick={() => setPhase(phase - 1)} 
                  className="px-6 py-3 text-sm font-medium text-black/50 hover:text-black transition-colors"
                >
                  Back
                </button>
              )}

              {phase === 1 ? (
                <button 
                  onClick={() => setPhase(2)} 
                  className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors shadow-lg"
                >
                  Next: Outcomes
                </button>
              ) : phase === 2 ? (
                <button 
                  onClick={calculateRecommendations}
                  className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors shadow-lg"
                >
                  Analyze Matches
                </button>
              ) : phase === 3 ? (
                <button 
                  onClick={() => setPhase(4)} 
                  className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors shadow-lg"
                >
                  Continue to Contact
                </button>
              ) : (
                <button 
                  onClick={() => {
                    alert('Submission received! (Demo)');
                    resetAndClose();
                  }}
                  className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors shadow-lg"
                >
                  Submit Request
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
