import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetY = Math.max(0, elementTop - headerHeight - 8);
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-black'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Terminal className="w-8 h-8 text-white" />
            <span className="text-2xl font-mono font-bold tracking-wider text-white">
              PULZIVO
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-12">
            {['Features', 'Use Cases', 'Impact', 'Demo'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="font-mono text-sm tracking-wide text-white hover:text-gray-300 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('demo')}
            className="hidden md:inline-flex items-center px-6 py-3 bg-white text-black font-mono text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 hover-lift border-glow-hover"
          >
            BOOK_DEMO()
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

          {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
            <div className="px-6 py-8 space-y-6">
              {['Features', 'Use Cases', 'Impact', 'Demo'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block font-mono text-sm tracking-wide text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('demo')}
                className="w-full px-6 py-3 bg-white text-black font-mono text-sm tracking-wide hover:bg-gray-100 transition-all duration-300"
              >
                BOOK_DEMO()
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;