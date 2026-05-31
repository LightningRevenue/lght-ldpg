"use client";

import React, { useState } from 'react';
import { submitServiceRequest } from '@/lib/service-request-client';
import { usePathname } from 'next/navigation';
import { getLanguageFromPathname } from '@/lib/i18n';
import { getServicesDictionary } from '@/i18n/get-services-dictionary';

export default function PPCContact() {
  const t = getServicesDictionary(getLanguageFromPathname(usePathname())).ppc.contact;
  const [phase, setPhase] = useState(1);
  const [formData, setFormData] = useState({
    challenge: '',
    spend: '',
    website: '',
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setSubmitError("");
    setIsSubmitting(true);

    try {
      await submitServiceRequest({ service: "ppc", ...formData });
      setIsSubmitted(true);
      setPhase(1);
      setFormData({ challenge: '', spend: '', website: '', name: '', email: '' });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-ppc" className="relative z-10 py-32 px-6 bg-white w-full border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-4">
            {t.title}
          </h2>
          <p className="text-black/50 font-light text-lg">
            {t.description}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#fafafa] w-full rounded-[2rem] overflow-hidden border border-black/10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] flex flex-col relative h-[500px]">
          
          {/* Header */}
          <div className="flex justify-between items-center px-8 py-6 border-b border-black/5 bg-white z-10 shrink-0">
            <div className="flex items-center gap-4">
              <span className="font-bold tracking-tight text-sm uppercase text-black">{t.formTitle}</span>
              <span className="text-xs font-mono bg-black/5 text-black/50 px-2 py-1 rounded">{t.phaseLabel(phase)}</span>
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
                  <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-black">{t.challengeTitle}</h3>
                  <p className="text-black/50 font-light mb-8">{t.challengeDescription}</p>
                  
                  <textarea 
                    value={formData.challenge}
                    onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                    placeholder={t.challengePlaceholder}
                    className="w-full h-32 p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-[#2f5b7c] resize-none text-black placeholder:text-black/30 text-sm"
                  ></textarea>
                </div>
              )}

              {/* Phase 2: Spend */}
              {phase === 2 && (
                <div className="animate-fade-in-up w-full">
                  <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-black">{t.spendTitle}</h3>
                  <p className="text-black/50 font-light mb-8">{t.spendDescription}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.spendOptions.map(spendTier => (
                      <button 
                        key={spendTier}
                        onClick={() => setFormData({...formData, spend: spendTier})}
                        className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${formData.spend === spendTier ? 'border-[#2f5b7c] bg-[#2f5b7c] text-white shadow-lg' : 'border-black/10 bg-white text-black hover:border-black/30'}`}
                      >
                        <div className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center ${formData.spend === spendTier ? 'border-white bg-white' : 'border-black/30'}`}>
                          {formData.spend === spendTier && (
                            <span className="w-2.5 h-2.5 rounded-full bg-[#2f5b7c]"></span>
                          )}
                        </div>
                        <div className="font-medium text-sm">{spendTier}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Phase 3: Website */}
              {phase === 3 && (
                <div className="animate-fade-in-up w-full">
                  <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-black">{t.websiteTitle}</h3>
                  <p className="text-black/50 font-light mb-8">{t.websiteDescription}</p>
                  
                  <input 
                    type="url" 
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    placeholder={t.websitePlaceholder}
                    className="w-full p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-[#2f5b7c] text-black placeholder:text-black/30 text-sm"
                  />
                </div>
              )}

              {/* Phase 4: Contact */}
              {phase === 4 && (
                <div className="animate-fade-in-up w-full text-center">
                  <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-black">{t.contactTitle}</h3>
                  <p className="text-black/50 font-light mb-10">{t.contactDescription}</p>
                  
                  <div className="flex flex-col gap-4 max-w-sm mx-auto">
                    <input 
                      type="text" 
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-[#2f5b7c] text-black placeholder:text-black/30 text-sm"
                    />
                    <input 
                      type="email" 
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-5 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-[#2f5b7c] text-black placeholder:text-black/30 text-sm"
                    />
                    {submitError && (
                      <p className="text-sm text-red-600">{submitError}</p>
                    )}
                    {isSubmitted && (
                      <p className="text-sm text-emerald-600">{t.success}</p>
                    )}
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
                {t.back}
              </button>
            )}

            {phase < 4 ? (
              <button 
                onClick={() => setPhase(phase + 1)} 
                disabled={(phase === 1 && !formData.challenge) || (phase === 2 && !formData.spend) || (phase === 3 && !formData.website)}
                className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-[#2f5b7c] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t.nextStep}
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || isSubmitting}
                className="px-8 py-3 bg-[#2f5b7c] text-white rounded-full text-sm font-medium hover:bg-black transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.submitting : t.submit}
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
