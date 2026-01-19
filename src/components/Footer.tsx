import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onBookDemo: () => void;
}

const Footer = ({ onBookDemo }: FooterProps) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <button onClick={scrollToTop} className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">Pulzivo</span>
            </button>
            <p className="text-white/40 max-w-sm leading-relaxed">
              The AI receptionist that answers calls, books appointments, and captures leads 24/7.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => scrollToSection(e, 'how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a 
                  href="#use-cases" 
                  onClick={(e) => scrollToSection(e, 'use-cases')}
                  className="hover:text-white transition-colors"
                >
                  Templates
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => scrollToSection(e, 'pricing')}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <button 
                  onClick={onBookDemo}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={onBookDemo}
                  className="hover:text-white transition-colors text-left"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-sm text-white/30 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pulzivo. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;