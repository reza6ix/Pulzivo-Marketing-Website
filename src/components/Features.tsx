import React from 'react';
import { Calendar, MessageSquare, Clock, Shield, Share2, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Smart Booking",
      description: "Direct calendar integration books appointments in real-time."
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Lead Capture",
      description: "Qualifies callers and collects info, even if they don't book."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "After-Hours Support",
      description: "Capture revenue while you sleep. Weekends and holidays included."
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Human Handoff",
      description: "Complex calls are instantly forwarded to your team."
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Call Summaries",
      description: "Transcripts and actionable summaries of every conversation."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant. Your data is encrypted and protected."
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Everything you need.
              <br />
              <span className="text-white/40">Nothing you don't.</span>
            </h2>
            <p className="text-lg text-white/40 mb-8 max-w-md">
              Built for local businesses that want results, not a new software platform to manage.
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
                  <div className="text-xs font-mono text-violet-400 mb-2">CALL SUMMARY</div>
                  <div className="text-sm text-white/60">Today, 3:42 PM • Duration: 2:34</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-white/40 mb-1">Caller Intent</div>
                    <div className="text-white font-medium">Book appointment for haircut</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-white/40 mb-1">Outcome</div>
                    <div className="text-emerald-400 font-medium flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      Appointment booked for Sat 10:00 AM
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-white/40 mb-1">Contact Captured</div>
                    <div className="text-white font-medium">john.doe@email.com</div>
                  </div>
                </div>

                <div className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/40 text-sm text-center">
                  Full transcript available in dashboard
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
