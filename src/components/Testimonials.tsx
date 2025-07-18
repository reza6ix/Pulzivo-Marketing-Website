import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Systems Administrator',
      company: 'FitZone Fitness',
      content: 'Implementation was seamless. Our AI agent now handles 80% of member inquiries autonomously. ROI achieved within 60 days.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      metrics: '80% automation rate'
    },
    {
      name: 'Dr. Marcus Chen',
      role: 'Chief Technology Officer',
      company: 'Wellness Medical Center',
      content: 'Patient scheduling complexity reduced to zero. The system integrates perfectly with our existing infrastructure.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      metrics: '99% accuracy rate'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Operations Director',
      company: 'Luxe Beauty Studio',
      content: 'Client acquisition increased 150% in Q1. The AI understands our service catalog better than most staff members.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      metrics: '150% growth rate'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="font-mono text-sm tracking-wide text-gray-400 mb-4 animate-fade-in-up">
            &gt; CLIENT_TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8 animate-fade-in-up delay-200">
            <span className="text-white">VERIFIED</span>
            <br />
            <span className="text-white">RESULTS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light animate-fade-in-up delay-300">
            Real performance data from production deployments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover-lift bg-white/5 backdrop-blur-sm animate-fade-in-up delay-${400 + index * 150}`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white/30 mb-6" />

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white mr-1" />
                ))}
                <span className="ml-2 font-mono text-xs text-gray-400">
                  {testimonial.metrics}
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-8 font-light">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 border border-white/20 mr-4 group-hover:border-white/50 transition-colors duration-300"
                />
                <div>
                  <div className="font-mono text-sm tracking-wide text-white">
                    {testimonial.name}
                  </div>
                  <div className="font-mono text-xs text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="font-mono text-xs text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                  <span>STATUS: VERIFIED</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 border border-white/20 font-mono text-sm tracking-wide">
            <div className="flex items-center space-x-6 text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                500+ ACTIVE_CLIENTS
              </span>
              <div className="w-px h-4 bg-white/20"></div>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse delay-500"></div>
                1M+ CONVERSATIONS
              </span>
              <div className="w-px h-4 bg-white/20"></div>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse delay-1000"></div>
                99.9% UPTIME
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;