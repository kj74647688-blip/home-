import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

const APP_URL = "https://myzora.netlify.app/";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
                NEXORA
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Your people. Your stories. Your social universe. One unified platform for reels, messaging, communities, and live broadcasting.
            </p>
            <a 
              href={APP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Launch NEXORA Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Outfit']">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Product Showcase</a></li>
              <li><a href="#why-nexora" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Features Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Outfit']">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Reels Studio</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Social Feed & Stories</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Encrypted Messaging</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Communities</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Live Broadcasting</a></li>
            </ul>
          </div>

          {/* Legal / Policy Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Outfit']">Legal & App</h4>
            <ul className="space-y-3 text-sm">
              <li><a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><span>Login / App</span> <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} NEXORA. All rights reserved. Built for modern social connection.
          </div>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#faq" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Open App</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
