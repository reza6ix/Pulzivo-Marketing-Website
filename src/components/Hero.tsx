import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, MessageSquare, Calendar } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AI_AUTOMATION_PLATFORM';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black grid-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-px h-96 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-px h-64 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Status indicator */}
          <div className="inline-flex items-center px-4 py-2 border border-white/20 font-mono text-sm tracking-wide mb-12 animate-fade-in-up">
            <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
            SYSTEM_STATUS: OPERATIONAL
          </div>

          {/* Main headline with typewriter effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold mb-8 leading-tight animate-fade-in-up delay-200">
            <div className="mb-4">
              <span className="text-white">BUILD.</span>
            </div>
            <div className="mb-4">
              <span className="text-white">AUTOMATE.</span>
            </div>
            <div>
              <span className="text-white">SCALE.</span>
            </div>
          </h1>

          {/* Typewriter subtitle */}
          <div className="font-mono text-xl md:text-2xl text-gray-400 mb-4 h-8 animate-fade-in-up delay-400">
            &gt; {displayText}
            <span className="animate-pulse">|</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up delay-500">
            No-code AI automation platform for small businesses. Build intelligent chatbots and voice agents 
            that capture leads, handle support, and schedule appointments automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-in-up delay-700">
            <button
              onClick={scrollToDemo}
              className="group inline-flex items-center px-8 py-4 bg-white text-black font-mono text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 hover-lift border-glow-hover"
            >
              INITIALIZE_DEMO()
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-mono text-sm tracking-wide hover:border-white hover:bg-white/5 transition-all duration-300">
              VIEW_DOCUMENTATION
            </button>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Code, title: 'NO_CODE_BUILDER', desc: 'Drag & drop interface' },
              { icon: MessageSquare, title: 'AI_CONVERSATIONS', desc: 'Natural language processing' },
              { icon: Calendar, title: 'AUTO_SCHEDULING', desc: 'Smart appointment booking' }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover-lift bg-white/5 backdrop-blur-sm animate-fade-in-up delay-${800 + index * 100}`}
              >
                <feature.icon className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-mono text-sm tracking-wide mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/30 flex justify-center">
          <div className="w-px h-3 bg-white/50 mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;