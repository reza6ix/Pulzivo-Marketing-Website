import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Differentiation from './components/Differentiation';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Header onBookDemo={openDemo} />
      <main>
        <Hero onBookDemo={openDemo} />
        <SocialProof />
        <Differentiation />
        <UseCases />
        <HowItWorks />
        <Features />
        <Pricing onBookDemo={openDemo} />
        <FAQ />
        <CtaSection onBookDemo={openDemo} />
      </main>
      <Footer onBookDemo={openDemo} />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
}

export default App;
