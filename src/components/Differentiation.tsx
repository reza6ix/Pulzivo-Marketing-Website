import React from 'react';
import { Cpu, Layers, LayoutDashboard, Zap } from 'lucide-react';

const Differentiation = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Proprietary Inference",
      description: "Our low-latency architecture ensures instant, human-like response times.",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Vertical Templates",
      description: "Pre-trained models for specific industries deployable in one click.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Dashboard Control",
      description: "Real-time logs, call recordings, and analytics at your fingertips.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Elastic Infrastructure",
      description: "Handles infinite concurrent calls with zero performance degradation.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-white/60">Platform Signals</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Built for scale.
            <br />
            <span className="text-gradient">Engineered for speed.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative glass border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {feature.description}
              </p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;