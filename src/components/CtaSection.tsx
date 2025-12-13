import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onBookDemo: () => void;
}

const CtaSection = ({ onBookDemo }: CtaSectionProps) => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/10 to-violet-600/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-white/60">Limited Time: Free Setup ($500 value)</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
          Stop missing revenue.
          <br />
          <span className="text-gradient">Start today.</span>
        </h2>
        
        <p className="text-xl text-white/40 mb-12 max-w-xl mx-auto">
          Get your AI receptionist installed in less than 72 hours. 
          No credit card required to book a demo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onBookDemo}
            className="btn-primary group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[#0a0a0f] bg-white rounded-full hover:scale-105 transition-transform duration-300"
          >
            Book a free demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="#pricing"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white glass border border-white/10 rounded-full hover:border-white/30 transition-colors"
          >
            Get pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
