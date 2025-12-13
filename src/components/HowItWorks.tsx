import React from 'react';
import { Bot, PhoneCall, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      number: "01",
      title: "We Learn",
      description: "We ingest your website, pricing, and calendar to build a custom knowledge base that speaks your language.",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-white" />,
      number: "02",
      title: "We Install",
      description: "We set up your phone lines and integrate with your booking software. No complex IT required.",
      gradient: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      number: "03",
      title: "You Grow",
      description: "We go live. The AI starts answering calls, filling your calendar, and capturing leads 24/7.",
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-600/5 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Live in <span className="text-gradient">72 hours</span>
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto">
            We handle the heavy lifting. You get the results.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-px bg-gradient-to-r from-violet-500/50 via-fuchsia-500/50 to-orange-500/50"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  {/* Step Number Circle */}
                  <div className="relative inline-flex mb-8">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity`}></div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-xs font-mono text-white/20 mb-4 tracking-widest">{step.number}</div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/40 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
