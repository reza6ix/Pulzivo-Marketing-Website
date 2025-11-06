import React from 'react';
import { Dumbbell, Stethoscope, Scissors, ArrowRight } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Dumbbell,
      industry: 'FITNESS_CENTERS',
      title: 'Member Acquisition System',
      metrics: ['94% lead response rate', '3x faster onboarding', '60% cost reduction'],
      features: [
        'Automated membership questionnaires',
        'Tour scheduling with availability sync',
        'Class reminders and updates',
        '24/7 inquiry handling'
      ],
      code: 'fitness.automate()'
    },
    {
      icon: Stethoscope,
      industry: 'HEALTHCARE_CLINICS',
      title: 'Patient Care Automation',
      metrics: ['99% appointment accuracy', '50% admin reduction', '24/7 availability'],
      features: [
        'Doctor availability scheduling',
        'Pre-screening questionnaires',
        'Appointment reminders',
        'Insurance verification'
      ],
      code: 'healthcare.optimize()'
    },
    {
      icon: Scissors,
      industry: 'BEAUTY_SALONS',
      title: 'Client Experience Platform',
      metrics: ['150% booking increase', '85% client satisfaction', '40% revenue growth'],
      features: [
        'Service-based scheduling',
        'Personalized recommendations',
        'Aftercare instructions',
        'Automated feedback collection'
      ],
      code: 'beauty.enhance()'
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-black grid-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="font-mono text-sm tracking-wide text-gray-400 mb-4 animate-fade-in-up">
            &gt; DEPLOYMENT_SCENARIOS
          </div>
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8 animate-fade-in-up delay-200">
            <span className="text-white">INDUSTRY</span>
            <br />
            <span className="text-white">SOLUTIONS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light animate-fade-in-up delay-300">
            Proven automation strategies for high-growth business sectors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.industry}
              className={`group p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover-lift bg-white/5 backdrop-blur-sm animate-fade-in-up delay-${400 + index * 200}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <useCase.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                <code className="font-mono text-xs text-gray-500 bg-white/5 px-2 py-1">
                  {useCase.code}
                </code>
              </div>

              {/* Industry label */}
              <div className="font-mono text-sm tracking-wide text-white mb-2">
                {useCase.industry}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-mono font-bold mb-6 text-white">
                {useCase.title}
              </h3>

              {/* Metrics */}
              <div className="mb-8">
                <div className="font-mono text-xs tracking-wide text-gray-400 mb-3">
                  PERFORMANCE_METRICS:
                </div>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-gray-300 font-light">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <div className="font-mono text-xs tracking-wide text-gray-400 mb-3">
                  FEATURE_SET:
                </div>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <span className="text-gray-500 mr-3 font-mono">→</span>
                      <span className="text-gray-300 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <button className="group/btn w-full flex items-center justify-between p-3 border border-white/20 hover:border-white/50 transition-all duration-300 hover:bg-white/5">
                <span className="font-mono text-sm tracking-wide text-white">
                  DEPLOY_SOLUTION
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '15+', label: 'ACTIVE_DEPLOYMENTS' },
            { value: '10K+', label: 'CONVERSATIONS_PROCESSED' },
            { value: '99.9%', label: 'SYSTEM_UPTIME' },
            { value: '24/7', label: 'OPERATIONAL_STATUS' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover-lift animate-fade-in-up delay-${1000 + index * 100}`}
            >
              <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs tracking-wide text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;