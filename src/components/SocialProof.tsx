import React from 'react';

const SocialProof = () => {
  const stats = [
    { value: "50K+", label: "Calls handled monthly" },
    { value: "98%", label: "Caller satisfaction" },
    { value: "24/7", label: "Always available" },
    { value: "<1s", label: "Average response time" }
  ];

  return (
    <section className="py-20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-transparent to-cyan-600/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-center text-sm font-medium text-white/30 uppercase tracking-widest mb-12">
          Powering voice automation for growing businesses
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
