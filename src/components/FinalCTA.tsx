import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const APP_URL = "https://myzora.netlify.app/";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="rounded-3xl bg-gradient-to-br from-purple-900/30 via-slate-900 to-indigo-950 border border-purple-500/30 p-10 sm:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Join The Global Community</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight mb-6">
            Your Social Universe <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
              Is Waiting.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience seamless reels, instant messaging, vibrant communities, and live broadcasting today. No downloads required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>JOIN NEXORA NOW</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
