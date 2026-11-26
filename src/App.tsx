import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import ProductShowcase from './components/ProductShowcase';
import WhyNexora from './components/WhyNexora';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans'] selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <ProductShowcase />
        <WhyNexora />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
