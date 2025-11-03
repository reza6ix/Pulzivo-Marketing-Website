import React, { useEffect, useRef, useState } from 'react';

type Card = {
  key: string;
  title: string;
  caption: string;
  beforePercent: number;
  afterPercent: number;
  beforeText: string;
  afterText: string;
};

const BEFORE_COLOR = '#f97316';
const AFTER_COLOR = '#22d3ee';

const cards: Card[] = [
  {
    key: 'efficiency',
    title: 'Response Time',
    caption: 'Average time to respond to customer inquiries',
    beforePercent: 100,
    afterPercent: 8,
    beforeText: 'Before: 2h',
    afterText: 'After: 30s'
  },
  {
    key: 'growth',
    title: 'Lead Conversion Rate',
    caption: 'Percentage of leads converted to customers',
    beforePercent: 25,
    afterPercent: 100,
    beforeText: 'Before: 15%',
    afterText: 'After: 60%'
  }
];

const ImpactSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-24 bg-black grid-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="font-mono text-sm tracking-wide text-gray-400 mb-2">&gt; IMPACT</div>
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-3 text-white">AUTOMATION CHANGES EVERYTHING</h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto font-light">Before AI Automation vs After AI Automation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const leftHeight = inView ? `${card.beforePercent}%` : '0%';
            const rightHeight = inView ? `${card.afterPercent}%` : '0%';
            const delayBase = 100 + idx * 100;
            return (
              <div
                key={card.key}
                className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-cyan-300/20 hover:shadow-xl hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-sm md:text-base tracking-wide text-white">{card.title}</div>
                  <div className="hidden md:block font-mono text-xs text-gray-400">Before vs After</div>
                </div>

                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-full max-w-lg mx-auto">
                    <div className="relative h-80 w-full flex items-end justify-center gap-16 px-8">
                      <div className="flex flex-col items-center w-32">
                        <div className="relative w-full" style={{ height: '320px' }}>
                          <div className="absolute bottom-0 w-full bg-gradient-to-t from-white/10 to-white/5 border-2 border-white/20 flex items-end" style={{ height: '100%' }}>
                            <div 
                              className="w-full glow-orange" 
                              style={{ 
                                height: leftHeight, 
                                backgroundColor: BEFORE_COLOR, 
                                transition: 'height 1200ms cubic-bezier(0.4, 0, 0.2, 1)', 
                                transitionDelay: `${delayBase}ms`
                              }} 
                            />
                          </div>
                        </div>
                        <div className="mt-4 font-mono text-sm font-medium text-orange-400">{card.beforeText}</div>
                      </div>
                      <div className="flex flex-col items-center w-32">
                        <div className="relative w-full" style={{ height: '320px' }}>
                          <div className="absolute bottom-0 w-full bg-gradient-to-t from-white/10 to-white/5 border-2 border-white/20 flex items-end" style={{ height: '100%' }}>
                            <div 
                              className="w-full glow-cyan" 
                              style={{ 
                                height: rightHeight, 
                                backgroundColor: AFTER_COLOR, 
                                transition: 'height 1200ms cubic-bezier(0.4, 0, 0.2, 1)', 
                                transitionDelay: `${delayBase + 150}ms`
                              }} 
                            />
                          </div>
                        </div>
                        <div className="mt-4 font-mono text-sm font-medium text-cyan-400">{card.afterText}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs md:text-sm text-gray-400 font-light text-center">{card.caption}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;


