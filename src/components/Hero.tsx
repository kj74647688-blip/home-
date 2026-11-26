import React from 'react';
import { ArrowRight, Play, Sparkles, MessageCircle, Heart, Share2, Video, Globe, ShieldCheck } from 'lucide-react';

const APP_URL = "https://myzora.netlify.app/";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[450px] h-[300px] bg-pink-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Next-Generation Social Universe</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.1] mb-6">
              Your People. Your Stories. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                Your Social Universe.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-normal">
              One platform. Endless ways to connect, create and share. Experience seamless reels, real-time messaging, vibrant communities, and immersive live broadcasting built for modern creators.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/35 transition-all transform hover:-translate-y-0.5"
              >
                <span>Join NEXORA</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-all"
              >
                <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
                <span>Explore Features</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 flex items-center justify-center text-purple-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Global</div>
                  <div className="text-xs text-slate-400">Connected Network</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 flex items-center justify-center text-purple-400 shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">HD Media</div>
                  <div className="text-xs text-slate-400">Reels & Live Streams</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 flex items-center justify-center text-purple-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Secure</div>
                  <div className="text-xs text-slate-400">End-to-End Ready</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Interface Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none animate-float">
              
              {/* Decorative Backglow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-xl" />

              {/* Mockup Frame */}
              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-5 overflow-hidden">
                
                {/* App Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-purple-400 bg-purple-950/60 px-2.5 py-0.5 rounded-full">
                    app.nexora.social
                  </span>
                  <div className="w-6" />
                </div>

                {/* Simulated Feed Post */}
                <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800/80 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        NX
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>NEXORA Creator</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        </div>
                        <div className="text-xs text-slate-400">2 hours ago • Public</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-purple-400 bg-purple-950/80 px-2.5 py-1 rounded-lg">
                      Following
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                    Launching our brand new creator reels studio today! Share your stories in crystal clear quality with instant community reactions. 🚀✨
                  </p>

                  {/* Simulated Media Preview */}
                  <div className="relative rounded-xl bg-gradient-to-br from-purple-900/40 via-indigo-950 to-slate-900 h-44 flex items-center justify-center border border-purple-500/20 overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
                    <div className="w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-xl shadow-purple-600/40 z-10 group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white z-10">
                      <span className="bg-slate-900/80 px-2 py-0.5 rounded-md backdrop-blur-sm">0:15 / 1:00</span>
                      <span className="bg-purple-600/80 px-2 py-0.5 rounded-md">HD Reels</span>
                    </div>
                  </div>

                  {/* Engagement Bar */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-900 text-slate-400 text-xs">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 hover:text-pink-400 transition-colors">
                        <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                        <span>2.4k</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>384</span>
                      </button>
                    </div>
                    <button className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Quick Message Notification */}
                <div className="bg-slate-950 rounded-2xl p-3.5 border border-slate-800/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                    SK
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate">Sarah Jenkins</span>
                      <span className="text-[10px] text-slate-500">Just now</span>
                    </div>
                    <p className="text-xs text-slate-400 truncate">Are you joining the live stream community chat tonight?</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
