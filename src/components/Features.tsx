import React from 'react';
import { Calendar, MessageSquare, Clock, Shield, Share2, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Real-time Scheduling",
      description: "Direct calendar integration syncs availability instantly."
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Structured Data Capture",
      description: "Extracts and organizes lead information automatically."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Availability",
      description: "Zero downtime. Capture revenue nights and weekends."
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Intelligent Routing",
      description: "Forward complex queries to human staff instantly."
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Transcripts & Logs",
      description: "Full visibility into every conversation and outcome."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "SOC 2 Ready",
      description: "Enterprise-grade encryption and data protection."
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Complete Command Center.
            </h2>
            <p className="text-lg text-white/40 mb-8 max-w-md">
              Manage your agent, view transcripts, and track bookings from a single dashboard.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-violet-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10"></div>
              
              <div className="glass border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-2xl"></div>
                
                <div className="mb-6">
                  <div className="text-xs font-mono text-violet-400 mb-2">SESSION LOG</div>
                  <div className="text-sm text-white/60">ID: #8492-AC • Status: Completed</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-white/40 mb-1">Intent Detected</div>
                    <div className="text-white font-medium">Appointment Booking</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-white/40 mb-1">Action Triggered</div>
                    <div className="text-emerald-400 font-medium flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      Calendar Event Created
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-white/40 mb-1">Data Extracted</div>
                    <div className="text-white font-medium font-mono text-xs">
                      {`{
  "email": "user@example.com",
  "time": "10:00 AM",
  "date": "2024-03-20"
}`}
                    </div>
                  </div>
                </div>

                <div className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/40 text-sm text-center">
                  View full transcript
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;