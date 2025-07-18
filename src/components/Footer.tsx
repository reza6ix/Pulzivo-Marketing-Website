import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Terminal } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <Terminal className="w-10 h-10 text-white" />
              <span className="text-2xl font-mono font-bold tracking-wider text-white">
                PULZIVO
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-8 font-light">
              Enterprise-grade AI automation platform for small businesses. 
              Build intelligent conversational agents that operate autonomously 
              to capture leads, provide support, and schedule appointments.
            </p>
            <div className="flex space-x-4">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300 hover-lift"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-sm tracking-wide text-white mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-4">
              {['Features', 'Use Cases', 'Testimonials', 'Documentation', 'Support'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                    className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-sm tracking-wide text-white mb-6">
              CONTACT_INFO
            </h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-white" />
                <span className="font-mono text-sm">hello@pulzivo.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-white" />
                <span className="font-mono text-sm">+1.555.123.4567</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-white mt-0.5" />
                <span className="font-mono text-sm">
                  San Francisco, CA<br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="font-mono text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 PULZIVO. ALL_RIGHTS_RESERVED.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                <span className="font-mono text-xs text-gray-400">SYSTEM_OPERATIONAL</span>
              </div>
              <div className="flex space-x-4 font-mono text-xs">
                {['PRIVACY_POLICY', 'TERMS_OF_SERVICE', 'SECURITY'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;