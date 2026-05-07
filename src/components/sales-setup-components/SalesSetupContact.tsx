"use client";

import React, { useState } from 'react';

export default function SalesSetupContact() {
  const [phase, setPhase] = useState(1);
  const [formData, setFormData] = useState({
    challenge: '',
    teamSize: '',
    crm: '',
    name: '',
    email: '',
  });

  const handleSubmit = () => {
    alert("Operations Audit request submitted! We'll be in touch shortly.");
    setPhase(1);
    setFormData({ challenge: '', teamSize: '', crm: '', name: '', email: '' });
  };

  return (
    <section id="contact-sales-setup" className="relative z-10 py-32 px-6 bg-white w-full border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-4">
            Request an Operations Audit.
          </h2>
          <p className="text-black/50 font-light text-lg">
            Our RevOps engineers will review your current technical stack and map out a high-efficiency architecture.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#fafafa] w-full rounded-[2rem] overflow-hidden border border-black/10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] flex flex-col relative h-[500px]">
          
          {/* Header */}
          <div className="flex justify-between items-center px-8 py-6 border-b border-black/5 bg-white z-10 shrink-0">
            <div className="flex items-center gap-4">
              <span className="font-bold tracking-tight text-sm uppercase text-black">Infrastructure Scoping</span>
              <span className="text-xs font-mono bg-black/5 text-black/50 px-2 py-1 rounded">Phase {phase} of 4</span>
            </div>
            
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border border-white bg-slate-200"></div>
              <div className="w-6 h-6 rounded-full border border-white bg-[#2f5b7c]"></div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-8 sm:p-12 flex flex-col">
            <div className="max-w-xl mx-auto w-full h-full flex flex-col justify-center">
              
              {/* Phase 1: Challenge */}
              {phase === 1 && (
                <div className="animate-fade-in-up w-full">
                  <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-black">What's the main operational bottleneck?</h3>
                  <p className="text-black/50 font-light mb-8">Tell us where your sales team is wasting the most time.</p>
                  
                  <textarea 
                    value={formData.challenge}
                    onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                    placeholder="e.g. Reps hate updating Hubspot so the pipeline is always outdated, or our emails keep going to spam..."
                    className="w-full h-32 p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-[#2f5b7c] resize-none text-black placeholder:text-black/30 text-sm"
                  ></textarea>
                </div>
              )}

              {/* Phase 2: Team Size */}
              {phase === 2 && (
                <div className="animate-fade-in-up w-full">
                  <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-black">Current Sales Team Size</h3>
                  <p className="text-black/50 font-light mb-8">This determines the complexity of the routing logic and permissions we need to build.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['1 - 3 Reps', '4 - 10 Reps', '11 - 25 Reps', '25+ Reps'].map(sizeTier => (
                      <button 
                        key={sizeTier}
                        onClick={() => setFormData({...formData, teamSize: sizeTier})}
                        className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${formData.teamSize === sizeTier ? 'border-[#2f5b7c] bg-[#2f5b7c] text-white shadow-lg' : 'border-black/10 bg-white text-black hover:border-black/30'}`}
                      >
                        <div className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center ${formData.teamSize === sizeTier ? 'border-white bg-white' : 'border-black/30'}`}>
                          {formData.teamSize === sizeTier && (
                            <span className="w-2.5 h-2.5 rounded-full bg-[#2f5b7c]"></span>
                          )}
                        </div>
                        <div className="font-medium text-sm">{sizeTier}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Phase 3: CRM */}
              {phase === 3 && (
                <div className="animate-fade-in-up w-full">
                  <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-black">Current CRM</h3>
                  <p className="text-black/50 font-light mb-8">What is your current source of truth?</p>
                  
                  <input 
                    type="text" 
                    value={formData.crm}
                    onChange={(e) => setFormData({...formData, crm: e.target.value})}
                    placeholder="e.g. Hubspot, Salesforce, Pipedrive, or Excel..."
                    className="w-full p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-[#2f5b7c] text-black placeholder:text-black/30 text-sm"
                  />
                </div>
              )}

              {/* Phase 4: Contact */}
              {phase === 4 && (
                <div className="animate-fade-in-up w-full text-center">
                  <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-black">Where should we send the audit?</h3>
                  <p className="text-black/50 font-light mb-10">We'll review your stack and email you a direct video breakdown.</p>
                  
                  <div className="flex flex-col gap-4 max-w-sm mx-auto">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-[#2f5b7c] text-black placeholder:text-black/30 text-sm"
                    />
                    <input 
                      type="email" 
                      placeholder="Work Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-[#2f5b7c] text-black placeholder:text-black/30 text-sm"
                    />
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Footer Navigation */}
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

            {phase < 4 ? (
              <button 
                onClick={() => setPhase(phase + 1)} 
                disabled={(phase === 1 && !formData.challenge) || (phase === 2 && !formData.teamSize) || (phase === 3 && !formData.crm)}
                className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-[#2f5b7c] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email}
                className="px-8 py-3 bg-[#2f5b7c] text-white rounded-full text-sm font-medium hover:bg-black transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Request Audit
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
