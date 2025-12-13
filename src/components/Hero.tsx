import React from 'react';
import { ArrowRight, Phone, Calendar, Zap, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

const Hero = ({ onBookDemo }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-600/10 rounded-full blur-[150px]"></div>
        
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-white/80">Your AI receptionist is live</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
            <span className="block text-white">Never Miss</span>
            <span className="block text-white">Another Call.</span>
            <span className="block text-gradient mt-2">Ever.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-xl">
            We install a human-like AI receptionist that answers every call, books appointments, and captures leads—<span className="text-white/90 font-medium">24/7, on autopilot.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={onBookDemo}
              className="btn-primary group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0a0a0f] bg-white rounded-full hover:scale-105 transition-transform duration-300"
            >
              Book a demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white glass border border-white/10 rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              Get pricing
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Done-for-you setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>No prompt engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Live in 72 hours</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative z-20 w-full max-w-md animate-float">
            <div className="glass-strong border border-white/10 rounded-3xl p-6 glow-box">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Incoming Call</div>
                    <div className="text-xs text-white/40 font-mono">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-medium text-emerald-400">Live</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 h-16 mb-6 px-4">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 bg-gradient-to-t from-violet-500 to-cyan-400 rounded-full"
                    style={{ 
                      height: `${Math.random() * 60 + 20}%`,
                      animation: `pulse 1s ease-in-out ${i * 0.05}s infinite alternate`
                    }}
                  ></div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[10px] text-white/60">C</div>
                  <div className="flex-1 bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-sm">
                    <p className="text-sm text-white/70">"Hi, I'd like to book a lane for Saturday night, around 7pm for 6 people?"</p>
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1 bg-violet-500/10 border border-violet-500/20 p-3 rounded-2xl rounded-tr-sm">
                    <p className="text-sm text-violet-200">"Perfect! I have lanes available at 7:00 PM and 7:30 PM. Which works better for you?"</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/5">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-white/60">Booking...</span>
                </div>
                <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400">Lead Captured</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 -left-8 z-30 animate-float-delayed">
            <div className="glass border border-white/10 rounded-2xl p-4 glow-box">
              <div className="text-2xl font-bold text-white mb-1">847</div>
              <div className="text-xs text-white/40">Calls this month</div>
            </div>
          </div>

          <div className="absolute bottom-8 -right-4 z-30 animate-float" style={{ animationDelay: '1s' }}>
            <div className="glass border border-white/10 rounded-2xl p-4 glow-box">
              <div className="text-2xl font-bold text-emerald-400 mb-1">98.2%</div>
              <div className="text-xs text-white/40">Answer rate</div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full -z-10"></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
