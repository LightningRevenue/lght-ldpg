"use client";

import React, { useState } from 'react';
import { helpData } from '@/lib/help-data';

export default function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>([]);
  const [finalServices, setFinalServices] = useState<string[]>([]);
  
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', company: '' });

  const toggleSelection = (id: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(id)) {
      setList(list.filter(item => item !== id));
    } else {
      setList([...list, id]);
    }
  };

  const calculateRecommendations = () => {
    // Combine IDs from pain points and outcomes, deduplicate
    const combined = Array.from(new Set([...selectedPainPoints, ...selectedOutcomes]));
    setFinalServices(combined);
    setPhase(3);
  };

  const handleSubmit = async () => {
    if (isSubmitting) {
      return;
    }

    setSubmitError("");

    if (!contactInfo.name.trim() || !contactInfo.email.trim()) {
      setSubmitError("Name and email are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/help-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          company: contactInfo.company,
          selectedPainPoints,
          selectedOutcomes,
          finalServices,
        }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "The request could not be submitted.");
      }

      setIsSubmitted(true);
      setPhase(5);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "The request could not be submitted.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setPhase(1);
      setIsSubmitted(false);
      setSelectedPainPoints([]);
      setSelectedOutcomes([]);
      setFinalServices([]);
      setContactInfo({ name: '', email: '', company: '' });
      setSubmitError("");
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <>
      {/* Floating Ribbon Button */}
      <button 
        onClick={() => setIsOpen(true)}
        aria-label="Open growth diagnostic"
        className="fixed bottom-4 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-black/90 sm:left-0 sm:top-1/2 sm:h-auto sm:w-auto sm:-translate-y-1/2 sm:flex-col sm:gap-3 sm:rounded-l-none sm:rounded-r-xl sm:px-3 sm:py-4 sm:hover:scale-100 sm:hover:pl-4"
      >
        <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse sm:static"></div>
        <span className="text-lg font-bold leading-none sm:hidden">?</span>
        <span className="hidden text-xs font-bold uppercase tracking-[0.15em] sm:block" style={{ writingMode: 'vertical-lr' }}>How can we help?</span>
      </button>

      {/* Diagnostic Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 transition-opacity">
          <div className="bg-[#fafafa] w-full max-w-4xl h-[85vh] rounded-[2rem] overflow-hidden relative flex flex-col shadow-2xl animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-black/5 bg-white z-10 shrink-0">
              <div className="flex items-center gap-4">
                <span className="font-bold tracking-tight text-sm uppercase text-black">Growth Diagnostic</span>
                <span className="text-xs font-mono bg-black/5 text-black/50 px-2 py-1 rounded">{isSubmitted ? 'Complete' : `Phase ${phase} of 4`}</span>
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

                {/* PHASE 3: Recommended Services */}
                {phase === 3 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-3xl font-medium mb-2 text-black">Your Action Plan</h3>
                    <p className="text-black/50 font-light mb-8">
                      Based on your challenges and goals, here are the exact services that map to your needs. You can deselect any you don't want to discuss right now.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {helpData.map(item => {
                        const isRecommended = selectedPainPoints.includes(item.serviceId) || selectedOutcomes.includes(item.serviceId);
                        const isSelected = finalServices.includes(item.serviceId);
                        
                        // We only show items that are recommended, or we can show all and highlight.
                        // Let's show all, but pre-select the recommended ones.
                        
                        return (
                          <button 
                            key={item.serviceId}
                            onClick={() => toggleSelection(item.serviceId, finalServices, setFinalServices)}
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
                            <div className={`text-xs font-light pl-6 leading-relaxed mt-1 ${isSelected ? 'text-white/70' : 'text-black/60'}`}>
                              {item.serviceDesc}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* PHASE 4: Contact Info */}
                {phase === 4 && (
                  <div className="animate-fade-in-up flex-1 flex flex-col justify-center">
                    <h3 className="text-3xl font-medium mb-2 text-black text-center">Let&apos;s solve this.</h3>
                    <p className="text-black/50 font-light mb-10 text-center">Leave your details and an expert will reach out with a concrete action plan.</p>
                    
                    <div className="flex flex-col gap-5 max-w-md mx-auto w-full">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                        required
                        className="w-full p-4 rounded-xl border border-black/10 bg-white text-black focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
                      />
                      <input 
                        type="email" 
                        placeholder="Work Email" 
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                        required
                        className="w-full p-4 rounded-xl border border-black/10 bg-white text-black focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
                      />
                      <input 
                        type="text" 
                        placeholder="Company URL" 
                        value={contactInfo.company}
                        onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
                        className="w-full p-4 rounded-xl border border-black/10 bg-white text-black focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
                      />
                      {submitError && (
                        <p className="text-sm text-red-600 text-center">{submitError}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* PHASE 5: Confirmation Page */}
                {phase === 5 && (
                  <div className="animate-fade-in-up flex-1 flex flex-col items-center justify-center text-center">
                    {/* Animated Checkmark */}
                    <div className="relative w-24 h-24 mb-8">
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                      <div className="absolute inset-0 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ animation: 'checkDraw 0.5s ease-out 0.3s both' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-3xl font-medium mb-3 text-black">Request Submitted</h3>
                    <p className="text-black/50 font-light mb-10 max-w-sm leading-relaxed">
                      Thank you, <span className="text-black font-medium">{contactInfo.name || 'there'}</span>. 
                      A growth specialist will review your diagnostic and reach out within <span className="text-black font-medium">24 hours</span> with a tailored action plan.
                    </p>

                    {/* Summary Card */}
                    <div className="w-full max-w-md bg-white border border-black/5 rounded-2xl p-6 text-left shadow-sm">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 mb-4">Submission Summary</div>
                      
                      <div className="space-y-3">
                        {contactInfo.email && (
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center shrink-0">
                              <svg className="w-4 h-4 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="text-black/60 font-light">{contactInfo.email}</span>
                          </div>
                        )}
                        {contactInfo.company && (
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center shrink-0">
                              <svg className="w-4 h-4 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            </div>
                            <span className="text-black/60 font-light">{contactInfo.company}</span>
                          </div>
                        )}
                        <div className="pt-3 mt-3 border-t border-black/5">
                          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 mb-3">Selected Services</div>
                          <div className="flex flex-wrap gap-2">
                            {finalServices.map(id => {
                              const service = helpData.find(s => s.serviceId === id);
                              return service ? (
                                <span key={id} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-full">
                                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                                  {service.serviceName}
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Modal Footer / Navigation */}
            <div className="p-6 border-t border-black/5 bg-white shrink-0 flex items-center justify-between">
              {phase === 1 || phase === 5 ? (
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
                  Next: Goals
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
              ) : phase === 4 ? (
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              ) : (
                <button 
                  onClick={resetAndClose}
                  className="px-8 py-3 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors shadow-lg"
                >
                  Done — Close
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
