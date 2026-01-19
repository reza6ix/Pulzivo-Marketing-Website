import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookDemo: () => void;
}

const Header = ({ onBookDemo }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={scrollToTop} className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-white">Pulzivo</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#how-it-works" 
            onClick={(e) => handleNavClick(e, 'how-it-works')}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            How it works
          </a>
          <a 
            href="#use-cases" 
            onClick={(e) => handleNavClick(e, 'use-cases')}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Templates
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleNavClick(e, 'pricing')}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <button 
            onClick={onBookDemo}
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-[#0a0a0f] hover:scale-105 transition-transform"
          >
            Get Started
          </button>
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full glass border-b border-white/10 p-6 flex flex-col gap-6">
          <a 
            href="#how-it-works" 
            onClick={(e) => handleNavClick(e, 'how-it-works')}
            className="text-lg text-white/80"
          >
            How it works
          </a>
          <a 
            href="#use-cases" 
            onClick={(e) => handleNavClick(e, 'use-cases')}
            className="text-lg text-white/80"
          >
            Templates
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleNavClick(e, 'pricing')}
            className="text-lg text-white/80"
          >
            Pricing
          </a>
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onBookDemo(); }}
            className="bg-white text-[#0a0a0f] w-full py-3 rounded-full font-semibold"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;