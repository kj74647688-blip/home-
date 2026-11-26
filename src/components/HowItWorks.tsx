import React from 'react';
import { Globe, UserPlus, Compass, Share2, Sparkles, ArrowRight } from 'lucide-react';

const APP_URL = "https://myzora.netlify.app/";

const steps = [
  {
    step: "01",
    icon: Globe,
    title: "Visit NEXORA",
    description: "Head over to the NEXORA platform with a single click from any modern web browser or mobile device."
  },
  {
    step: "02",
    icon: UserPlus,
    title: "Create an Account",
    description: "Sign up in seconds with your preferred credentials and set up your personalized creator or personal profile."
  },
  {
    step: "03",
    icon: Compass,
    title: "Discover People & Communities",
    description: "Explore vibrant communities, find friends, and follow your favorite creators across diverse discussion channels."
  },
  {
    step: "04",
    icon: Share2,
    title: "Create & Share Content",
    description: "Publish reels, share stories, broadcast live, and chat in real-time with your audience and loved ones."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-900/40 relative overflow-hidden border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Simple Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-6">
            How NEXORA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
              Works in 4 Easy Steps
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Getting started with your new social universe takes less than a minute. Here is how you dive in.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-3xl bg-slate-950 border border-slate-800 p-8 relative flex flex-col justify-between group hover:border-purple-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-purple-400/40 font-['Outfit']">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-['Outfit']">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/35 transition-all transform hover:-translate-y-0.5"
          >
            <span>Start Your NEXORA Journey</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
