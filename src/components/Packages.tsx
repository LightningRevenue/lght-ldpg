"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const helpData = [
  {
    serviceId: 'ppc',
    serviceName: 'PPC Management',
    serviceDesc: 'Data-driven pay-per-click scaling.',
    painPoint: 'High ad spend with low conversion rates.',
    outcome: 'Scale ROAS and decrease Cost Per Acquisition.',
  },
  {
    serviceId: 'seo',
    serviceName: 'SEO Optimization',
    serviceDesc: 'Technical & content-driven optimization.',
    painPoint: 'Competitors consistently rank higher on Google.',
    outcome: 'Dominate niche search terms with high-intent traffic.',
  },
  {
    serviceId: 'web',
    serviceName: 'Web Development',
    serviceDesc: 'High-performance marketing platforms.',
    painPoint: 'Website is slow, hard to manage, or looks outdated.',
    outcome: 'A blazing-fast, premium marketing site.',
  },
  {
    serviceId: 'software',
    serviceName: 'Software Development',
    serviceDesc: 'Custom apps and internal tools.',
    painPoint: 'Internal operations rely on manual, broken processes.',
    outcome: 'Custom software that automates 90% of manual work.',
  },
  {
    serviceId: 'smm',
    serviceName: 'Social Media Management',
    serviceDesc: 'Organic community building & growth.',
    painPoint: 'Zero organic presence or community engagement.',
    outcome: 'A highly engaged social media following.',
  },
  {
    serviceId: 'uiux',
    serviceName: 'UI/UX Design',
    serviceDesc: 'Premium interface and experience design.',
    painPoint: 'High bounce rates and confusing user journeys.',
    outcome: 'A world-class user interface that drives conversions.',
  },
  {
    serviceId: 'lead',
    serviceName: 'Lead Generation',
    serviceDesc: 'Automated B2B outreach systems.',
    painPoint: 'Sales pipeline is empty, lacking predictable B2B leads.',
    outcome: 'Automated meeting booking with qualified prospects.',
  },
  {
    serviceId: 'sales',
    serviceName: 'Sales Tools Set-Up',
    serviceDesc: 'CRM and pipeline architecture.',
    painPoint: 'Closing takes too long and CRM data is a mess.',
    outcome: 'A crystal-clear CRM architecture and short sales cycles.',
  }
];

const expertiseOptions = [
  { id: 'sla', name: 'SLA', desc: 'Strict guaranteed performance metrics.', details: 'Financially-backed guarantees ensuring target KPIs, uptime, and minimum delivery thresholds are rigorously met.' },
  { id: 'account', name: 'Account Manager', desc: 'Dedicated strategic point of contact.', details: 'A senior strategist who acts as an extension of your internal team, available for weekly syncs and strategy pivots.' },
  { id: 'response', name: 'Response Time', desc: 'Prioritized communication channels.', details: 'Direct Slack/Teams integration with a guaranteed sub-1-hour response time during business hours.' },
  { id: 'resolution', name: 'Resolution Time', desc: 'Guaranteed timelines for technical fixes.', details: 'Pre-agreed maximum downtime and expedited engineering resources immediately allocated to critical incidents.' },
  { id: 'hosting', name: 'Hosting & Continuous Dev', desc: 'Enterprise server management & CI/CD.', details: 'Vercel/AWS infrastructure management, continuous integrations, and proactive security patching.' },
];

const foundationServices = [
  { id: 'f-web', name: 'Basic Web Development', desc: 'Up to 5 custom-designed pages (Home, About, Services, Contact), mobile responsive, fast-loading Next.js architecture.' },
  { id: 'f-seo', name: 'Basic SEO', desc: 'On-page optimization for your 5 pages, Google Search Console & Analytics setup, plus 1 initial technical audit.' },
  { id: 'f-ppc', name: 'Basic PPC', desc: '1 Active Search Campaign (Google Ads), up to 10 ad groups, basic conversion tracking, and monthly budget pacing.' },
  { id: 'f-uiux', name: 'Basic UI/UX', desc: 'Premium Figma wireframes adapted exactly to your brand guidelines, including 1 major round of revisions.' },
  { id: 'f-smm', name: 'Basic SMM', desc: '2 organic posts per week across 2 social channels (e.g., LinkedIn & Instagram), plus a monthly performance report.' },
];

export default function Packages() {
  const [activeModal, setActiveModal] = useState<'none' | 'custom' | 'foundation'>('none');
  const [phase, setPhase] = useState(1);
  
  // Custom Form State
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  
  // Foundation State
  const [selectedFoundationServices, setSelectedFoundationServices] = useState<string[]>(foundationServices.map(s => s.id));

  // Contact State (Shared)
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', company: '' });

  const toggleSelection = (id: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(id)) {
      setList(list.filter(item => item !== id));
    } else {
      setList([...list, id]);
    }
  };

  const calculateRecommendations = () => {
    const combined = Array.from(new Set([...selectedPainPoints, ...selectedOutcomes]));
    setSelectedServices(combined);
    setPhase(3);
  };

  const resetAndClose = () => {
    setActiveModal('none');
    setTimeout(() => {
      setPhase(1);
      setSelectedPainPoints([]);
      setSelectedOutcomes([]);
      setSelectedServices([]);
      setSelectedExpertise([]);
      setSelectedFoundationServices(foundationServices.map(s => s.id));
      setContactInfo({ name: '', email: '', company: '' });
    }, 300);
  };

  return (
    <>
      <section className="relative w-full bg-white z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-6">
              Engagement Models.
            </h2>
            <p className="text-black/50 font-light max-w-xl mx-auto text-base sm:text-lg">
              Choose a standardized framework or build a bespoke engagement tailored precisely to your current scale and velocity.
            </p>
          </div>

          {/* 3 Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Foundation */}
            <div className="flex flex-col p-8 sm:p-10 border border-black/10 hover:border-black/20 transition-all duration-500 rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div className="text-xs font-bold text-black/40 mb-8 uppercase tracking-widest">Start</div>
              <h3 className="text-3xl font-medium text-black mb-4">Foundation</h3>
              <p className="text-black/60 font-light mb-12 flex-1 leading-relaxed">
                Essential digital infrastructure and core marketing initiatives designed for emerging brands ready to enter the market.
              </p>
              <button onClick={() => setActiveModal('foundation')} className="w-full py-3.5 px-6 rounded-full border border-black/20 text-black text-center text-[14px] font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                Select Foundation
              </button>
            </div>

            {/* Momentum */}
            <div className="flex flex-col p-8 sm:p-10 border border-black bg-black text-white rounded-3xl shadow-2xl relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute top-0 right-10 w-48 h-48 bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>
              <div className="text-xs font-bold text-white/50 mb-8 uppercase tracking-widest relative z-10">Medium</div>
              <h3 className="text-3xl font-medium text-white mb-4 relative z-10">Momentum</h3>
              <p className="text-white/70 font-light mb-12 flex-1 leading-relaxed relative z-10">
                Aggressive growth strategies, advanced web development, and data-driven PPC scaling for operations gaining traction.
              </p>
              <Link href="/contact" className="w-full py-3.5 px-6 rounded-full bg-white text-black text-center text-[14px] font-semibold hover:bg-white/90 hover:shadow-lg transition-all duration-300 relative z-10">
                Select Momentum
              </Link>
            </div>

            {/* Apex */}
            <div className="flex flex-col p-8 sm:p-10 border border-black/10 hover:border-black/20 transition-all duration-500 rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div className="text-xs font-bold text-black/40 mb-8 uppercase tracking-widest">High</div>
              <h3 className="text-3xl font-medium text-black mb-4">Apex</h3>
              <p className="text-black/60 font-light mb-12 flex-1 leading-relaxed">
                Enterprise-grade solutions, omni-channel dominance, and dedicated elite teams for market leaders.
              </p>
              <Link href="/contact" className="w-full py-3.5 px-6 rounded-full border border-black/20 text-black text-center text-[14px] font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                Select Apex
              </Link>
            </div>
          </div>

          {/* Custom Package Banner */}
          <div className="w-full p-8 sm:p-12 border border-black/10 rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group hover:border-black/20 transition-colors duration-500">
            <div>
              <div className="text-xs font-bold text-black/40 mb-4 uppercase tracking-widest">Custom</div>
              <h3 className="text-2xl sm:text-3xl font-medium text-black mb-3">Make your own package</h3>
              <p className="text-black/60 font-light max-w-2xl leading-relaxed">
                Don't fit into a box? Let's sit down and craft a completely bespoke retainer or project scope that aligns perfectly with your unique business logic, timeline, and internal resources.
              </p>
            </div>
            
            <button onClick={() => setActiveModal('custom')} className="shrink-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fafafa] border border-black/10 text-black group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* ---------------- CUSTOM MODAL ---------------- */}
      {activeModal === 'custom' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 transition-opacity">
          <div className="bg-[#fafafa] w-full max-w-4xl h-[85vh] rounded-[2rem] overflow-hidden relative flex flex-col shadow-2xl animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-black/5 bg-white z-10 shrink-0">
              <div className="flex items-center gap-4">
                <span className="font-bold tracking-tight text-sm uppercase text-black">Project Scope Builder</span>
                <span className="text-xs font-mono bg-black/5 text-black/50 px-2 py-1 rounded">Step {phase} of 5</span>
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
                
                {/* PHASE 1: Pain Points */}
                {phase === 1 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-3xl font-medium mb-2 text-black">What challenges are you facing?</h3>
                    <p className="text-black/50 font-light mb-8">Select the primary pain points holding your business back right now.</p>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {helpData.map(item => {
                        const isSelected = selectedPainPoints.includes(item.serviceId);
                        return (
                          <button 
                            key={item.serviceId}
                            onClick={() => toggleSelection(item.serviceId, selectedPainPoints, setSelectedPainPoints)}
                            className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${isSelected ? 'border-black bg-black text-white shadow-lg' : 'border-black/10 bg-white text-black hover:border-black/30'}`}
                          >
                            <div className={`w-5 h-5 rounded-md border shrink-0 flex items-center justify-center ${isSelected ? 'border-white bg-white text-black' : 'border-black/30'}`}>
                              {isSelected && (
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="font-light text-sm">{item.painPoint}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* PHASE 2: Outcomes */}
                {phase === 2 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-3xl font-medium mb-2 text-black">What is the desired outcome?</h3>
                    <p className="text-black/50 font-light mb-8">Select the concrete results you are looking to achieve.</p>
                    
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
                    <p className="text-black/50 font-light mb-8">Based on your goals, here are the exact services that map to your needs. Deselect any you don't want.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {helpData.map(item => {
                        const isRecommended = selectedPainPoints.includes(item.serviceId) || selectedOutcomes.includes(item.serviceId);
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

                {/* PHASE 4: Expertise */}
                {phase === 4 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-3xl font-medium mb-2 text-black">Need specific expertise?</h3>
                    <p className="text-black/50 font-light mb-8">Choose operational or technical guarantees you'd like added to the retainer.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {expertiseOptions.map(exp => {
                        const isSelected = selectedExpertise.includes(exp.id);
                        return (
                          <button 
                            key={exp.id}
                            onClick={() => toggleSelection(exp.id, selectedExpertise, setSelectedExpertise)}
                            className={`relative text-left p-5 rounded-2xl border transition-all duration-300 ${isSelected ? 'border-black bg-black text-white shadow-lg' : 'border-black/10 bg-white text-black hover:border-black/30'}`}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <div className="font-medium pr-4">{exp.name}</div>
                              <div className="group/tooltip relative z-20 shrink-0">
                                <div 
                                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold cursor-help transition-colors ${isSelected ? 'bg-white/20 text-white hover:bg-white/40' : 'bg-black/5 text-black hover:bg-black/10'}`}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  ?
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none">
                                  <div className="bg-black text-white text-xs p-3 rounded-xl shadow-xl font-light leading-relaxed relative">
                                    {exp.details}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`text-xs font-light pr-4 ${isSelected ? 'text-white/60' : 'text-black/50'}`}>{exp.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* PHASE 5: Contact Info */}
                {phase === 5 && (
                  <div className="animate-fade-in-up flex-1 flex flex-col justify-center">
                    <h3 className="text-3xl font-medium mb-2 text-black text-center">Almost done.</h3>
                    <p className="text-black/50 font-light mb-10 text-center">Where should we send the proposed framework?</p>
                    
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
                <button 
                  onClick={() => setPhase(5)} 
                  className="px-6 py-3 text-sm font-medium text-black/50 hover:text-black transition-colors"
                >
                  Skip to Contact
                </button>
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
                  Next: Goals
                </button>
              ) : phase === 2 ? (
                <button 
                  onClick={calculateRecommendations}
                  className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors shadow-lg"
                >
                  Analyze Matches
                </button>
              ) : phase < 5 ? (
                <button 
                  onClick={() => setPhase(phase + 1)} 
                  className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors shadow-lg"
                >
                  Continue
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

      {/* ---------------- FOUNDATION MODAL ---------------- */}
      {activeModal === 'foundation' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 transition-opacity">
          <div className="bg-[#fafafa] w-full max-w-4xl h-[85vh] rounded-[2rem] overflow-hidden relative flex flex-col shadow-2xl animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-black/5 bg-white z-10 shrink-0">
              <div className="flex items-center gap-4">
                <span className="font-bold tracking-tight text-sm uppercase text-black">Foundation Tier Breakdown</span>
                <span className="text-xs font-mono bg-black/5 text-black/50 px-2 py-1 rounded">Step {phase} of 2</span>
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
                
                {/* PHASE 1: Breakdown */}
                {phase === 1 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-3xl font-medium mb-4 text-black">Here is exactly what you get.</h3>
                    <p className="text-black/60 font-light mb-8 text-lg">
                      The Foundation Tier is specifically designed for emerging brands. We pre-selected the core services below, but you can click to deselect anything you don't need right now.
                    </p>
                    
                    <div className="flex flex-col gap-3">
                      {foundationServices.map(item => {
                        const isSelected = selectedFoundationServices.includes(item.id);
                        return (
                          <button 
                            key={item.id}
                            onClick={() => toggleSelection(item.id, selectedFoundationServices, setSelectedFoundationServices)}
                            className={`text-left p-5 rounded-2xl border transition-all duration-300 ${isSelected ? 'border-black bg-black text-white shadow-lg' : 'border-black/10 bg-white text-black hover:border-black/30'}`}
                          >
                            <div className="font-medium mb-1 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-white bg-white text-black' : 'border-black/30'}`}>
                                  {isSelected && (
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                                {item.name}
                              </div>
                            </div>
                            <div className={`text-sm font-light pl-6 leading-relaxed ${isSelected ? 'text-white/70' : 'text-black/60'}`}>
                              {item.desc}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* PHASE 2: Contact Info */}
                {phase === 2 && (
                  <div className="animate-fade-in-up flex-1 flex flex-col justify-center">
                    <h3 className="text-3xl font-medium mb-2 text-black text-center">Ready to launch?</h3>
                    <p className="text-black/50 font-light mb-10 text-center">Enter your details and our team will prepare your Foundation setup.</p>
                    
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
                <div></div> // empty div for flex alignment
              ) : (
                <button 
                  onClick={() => setPhase(1)} 
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
                  Continue to Request
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
