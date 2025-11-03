import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import ImpactSection from './components/ImpactSection';
import Demo from './components/Demo';
import Footer from './components/Footer';
import SplineSection from './components/SplineSection';

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <SplineSection />
        <Features />
        <UseCases />
        <ImpactSection />
        <Demo />
      </main>
      <Footer />
    </>
  );
}

export default App;