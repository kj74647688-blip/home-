import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

const APP_URL = "https://myzora.netlify.app/";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-purple-950/10 py-3.5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
            NEXORA
          </span>
        </a>

        {/* Zone 2: 4-5 Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0">Features</a>
          <a href="#showcase" className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0">Product</a>
          <a href="#why-nexora" className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0">About</a>
          <a href="#how-it-works" className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0">How It Works</a>
          <a href="#faq" className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0">FAQ</a>
        </nav>

        {/* Zone 3: Primary Action Buttons */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a 
            href={APP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Login
          </a>
          <a 
            href={APP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/25 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-300 hover:text-purple-400 py-2 border-b border-slate-900"
          >
            Features
          </a>
          <a 
            href="#showcase" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-300 hover:text-purple-400 py-2 border-b border-slate-900"
          >
            Product Showcase
          </a>
          <a 
            href="#why-nexora" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-300 hover:text-purple-400 py-2 border-b border-slate-900"
          >
            About NEXORA
          </a>
          <a 
            href="#how-it-works" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-300 hover:text-purple-400 py-2 border-b border-slate-900"
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-300 hover:text-purple-400 py-2 border-b border-slate-900"
          >
            FAQ
          </a>
          <div className="flex flex-col gap-3 pt-2">
            <a 
              href={APP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-800"
            >
              Login to NEXORA
            </a>
            <a 
              href={APP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
