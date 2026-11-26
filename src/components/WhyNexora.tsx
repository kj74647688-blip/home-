import React from 'react';
import { Layers, Users, Zap, Compass, Smile, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: "All-in-One Social Experience",
    description: "No need to juggle multiple apps for messaging, video meetings, reels, and feeds. NEXORA brings your entire social universe into a single cohesive platform."
  },
  {
    icon: Users,
    title: "Community-Focused Features",
    description: "Built from the ground up to foster deep connections. Create channels, host group discussions, and engage with people who share your true passions."
  },
  {
    icon: Zap,
    title: "Modern Responsive Interface",
    description: "Engineered with cutting-edge web technologies for lightning-fast loading, buttery-smooth animations, and flawless responsiveness across all devices."
  },
  {
    icon: Compass,
    title: "Simple Onboarding",
    description: "Get started in seconds. Create your profile, discover recommended creators and communities, and dive straight into the conversation."
  },
  {
    icon: Smile,
    title: "User-Friendly Experience",
    description: "An intuitive, distraction-free interface designed for humans. Clean navigation, dark mode optimization, and delightful micro-interactions."
  }
];

export default function WhyNexora() {
  return (
    <section id="why-nexora" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>The NEXORA Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-6">
            Why Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
              NEXORA?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We are redefining how people connect, share stories, and build communities online with uncompromising performance and elegance.
          </p>
        </div>

        {/* Grid of Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/30 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-900/30">
                    <Icon className="w-6 h-6" />
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

          {/* Callout Card in Grid */}
          <div className="rounded-3xl bg-gradient-to-br from-purple-900/40 via-indigo-950 to-slate-900 border border-purple-500/30 p-8 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
                Ready to Join?
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-['Outfit']">
                Experience the Future of Social Networking
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Join thousands of creators, friends, and communities already connecting on NEXORA.
              </p>
            </div>
            <a
              href="https://myzora.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
            >
              Get Started Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
