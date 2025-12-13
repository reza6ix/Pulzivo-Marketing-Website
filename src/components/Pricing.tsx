import React from 'react';
import { Check, Sparkles } from 'lucide-react';

interface PricingProps {
  onBookDemo: () => void;
}

const Pricing = ({ onBookDemo }: PricingProps) => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col hover:border-white/20 transition-colors">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Starter</h3>
              <p className="text-sm text-white/40 mt-1">For growing shops</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$499</span>
              <span className="text-white/40">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Up to 500 mins/mo",
                "Standard voice model",
                "Basic calendar integration",
                "Email support",
                "Call recordings"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <Check className="w-5 h-5 text-white/20 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={onBookDemo}
              className="w-full py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Get Started
            </button>
          </div>

          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 flex flex-col md:-translate-y-4 glow-box">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Professional</h3>
              <p className="text-sm text-white/40 mt-1">For high-volume locations</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$999</span>
              <span className="text-white/40">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Up to 1,500 mins/mo",
                "Premium human-like voices",
                "Advanced CRM integration",
                "Priority support",
                "Call summaries & analytics",
                "Custom knowledge base"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <Check className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={onBookDemo}
              className="w-full py-4 rounded-full bg-white text-[#0a0a0f] font-semibold hover:scale-[1.02] transition-transform"
            >
              Get Started
            </button>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col hover:border-white/20 transition-colors">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Enterprise</h3>
              <p className="text-sm text-white/40 mt-1">For franchises & chains</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Unlimited minutes",
                "Custom voice cloning",
                "Full API access",
                "Dedicated account manager",
                "White-label options",
                "Multi-location support"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <Check className="w-5 h-5 text-white/20 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={onBookDemo}
              className="w-full py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
