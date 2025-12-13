import React from 'react';
import { Wrench, Clock, Users, Sparkles } from 'lucide-react';

const Differentiation = () => {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "We handle the tech",
      description: "No drag-and-drop builders. No prompt engineering. We build your agent to match your business perfectly.",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Never miss a lead",
      description: "Whether it's 2 PM or 2 AM, every call is answered instantly and professionally. 24/7 coverage included.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Humans in control",
      description: "The AI handles the routine. Complex issues are instantly forwarded to your team when needed.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-white/60">The Pulzivo Difference</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            We don't give you software.
            <br />
            <span className="text-gradient">We give you results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative glass border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">
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
