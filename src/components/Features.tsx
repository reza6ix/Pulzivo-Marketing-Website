import React from 'react';
import { Terminal, Cpu, Users, BarChart3, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: 'NEURAL_PROCESSING',
      description: 'Advanced AI models that understand context and provide human-like responses',
      code: 'ai.process(input)'
    },
    {
      icon: Terminal,
      title: 'VISUAL_BUILDER',
      description: 'Drag-and-drop interface to build complex automation workflows without coding',
      code: 'workflow.build()'
    },
    {
      icon: Users,
      title: 'LEAD_QUALIFICATION',
      description: 'Automatically qualify and route leads based on custom business criteria',
      code: 'leads.qualify()'
    },
    {
      icon: Clock,
      title: 'CONTINUOUS_OPERATION',
      description: 'Your AI agents work 24/7, never missing an opportunity or customer inquiry',
      code: 'system.uptime()'
    },
    {
      icon: BarChart3,
      title: 'DATA_ANALYTICS',
      description: 'Track performance with detailed analytics and conversation insights',
      code: 'analytics.report()'
    },
    {
      icon: Shield,
      title: 'SECURITY_PROTOCOL',
      description: 'Enterprise-grade security with encryption and compliance standards',
      code: 'security.encrypt()'
    }
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="font-mono text-sm tracking-wide text-gray-400 mb-4 animate-fade-in-up">
            &gt; SYSTEM_FEATURES
          </div>
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8 animate-fade-in-up delay-200">
            <span className="text-white">ENTERPRISE</span>
            <br />
            <span className="text-white">CAPABILITIES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light animate-fade-in-up delay-300">
            Built for modern businesses that demand reliability, security, and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover-lift bg-white/5 backdrop-blur-sm animate-fade-in-up delay-${400 + index * 100}`}
            >
              <div className="flex items-center justify-between mb-6">
                <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                <code className="font-mono text-xs text-gray-500 bg-white/5 px-2 py-1">
                  {feature.code}
                </code>
              </div>
              
              <h3 className="font-mono text-lg tracking-wide mb-4 text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-light">
                {feature.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center text-xs font-mono text-gray-500">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  STATUS: ACTIVE
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration section */}
        <div className="mt-24 text-center">
          <div className="font-mono text-sm tracking-wide text-gray-400 mb-8">
            &gt; INTEGRATIONS_AVAILABLE
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {['VOICEFLOW', 'AIRTABLE', 'GOOGLE_CAL', 'ZAPIER', 'SLACK', 'HUBSPOT'].map((tool, index) => (
              <div
                key={tool}
                className={`p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover-lift animate-fade-in-up delay-${1000 + index * 100}`}
              >
                <div className="font-mono text-xs tracking-wide text-gray-400 hover:text-white transition-colors duration-300">
                  {tool}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;