import React from 'react';

export default function Newsletter() {
  return (
    <section className="relative w-full bg-white z-10 py-32 px-6">
      <div className="max-w-4xl mx-auto text-center bg-[#fafafa] rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-20 border border-black/[0.05]">
        
        <div className="text-xs font-bold text-black/30 mb-6 uppercase tracking-[0.2em]">The Insight</div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-8">
          Weekly intelligence.
        </h2>
        
        <p className="text-black/50 font-light max-w-lg mx-auto text-base sm:text-lg mb-12 leading-relaxed">
          Join 5,000+ industry leaders who receive our unfiltered thoughts on digital scaling, technical execution, and agency operations.
        </p>

        <form className="relative max-w-md mx-auto flex items-center group">
          <input 
            type="email" 
            placeholder="name@company.com" 
            required
            className="w-full bg-white border border-black/10 rounded-full py-4 pl-6 pr-36 text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500"
          />
          <button 
            type="submit" 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white text-[13px] font-medium py-2.5 px-6 rounded-full hover:bg-black/90 hover:scale-[1.02] transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-[11px] text-black/30 mt-6 font-light tracking-wide uppercase">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
