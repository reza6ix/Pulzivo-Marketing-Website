import React from 'react';
import { 
  Gamepad2, 
  Dumbbell, 
  Wrench, 
  Stethoscope, 
  Scissors, 
  Building2,
  ArrowUpRight
} from 'lucide-react';

const UseCases = () => {
  const industries = [
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Bowling & Entertainment",
      tasks: ["Book lanes & party rooms", "Answer pricing questions", "Handle group reservations"],
      color: "violet"
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Sports Facilities",
      tasks: ["Reserve courts & fields", "Manage memberships", "League sign-ups"],
      color: "cyan"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Home Services",
      tasks: ["Schedule estimates", "Qualify leads", "Emergency dispatch"],
      color: "orange"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Medical & Dental",
      tasks: ["Book appointments", "Answer FAQs", "Pre-visit instructions"],
      color: "emerald"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Salons & Spas",
      tasks: ["Schedule treatments", "Handle cancellations", "Manage waitlists"],
      color: "pink"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Property Management",
      tasks: ["Maintenance requests", "Leasing inquiries", "Tenant support"],
      color: "blue"
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' }
  };

  return (
    <section id="use-cases" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Built for high-volume
              <br />
              <span className="text-gradient">local businesses</span>
            </h2>
            <p className="text-lg text-white/40 max-w-lg">
              Trained on your industry knowledge to handle calls like your best team member.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => {
            const colors = colorClasses[industry.color];
            return (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center ${colors.text}`}>
                    {industry.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{industry.title}</h3>
                <ul className="space-y-2">
                  {industry.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/40 text-sm">
                      <div className={`w-1 h-1 rounded-full ${colors.text.replace('text-', 'bg-')}`}></div>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
