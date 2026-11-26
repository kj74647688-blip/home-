import React from 'react';
import { Film, Rss, MessageSquare, Mic, Users, Video, Radio, Sparkles, ArrowRight } from 'lucide-react';

const APP_URL = "https://myzora.netlify.app/";

const featuresList = [
  {
    icon: Film,
    title: "Short-Form Reels",
    description: "Create, edit, and discover captivating vertical video reels with advanced filters, audio tracks, and instant reactions.",
    gradient: "from-purple-500 to-indigo-600",
    badge: "Creator Favorite"
  },
  {
    icon: Rss,
    title: "Social Feed & 24-Hour Stories",
    description: "Share your daily moments through immersive stories that vanish in 24 hours, alongside an engaging rich media social feed.",
    gradient: "from-indigo-500 to-cyan-500",
    badge: "Real-Time"
  },
  {
    icon: MessageSquare,
    title: "Personal & Group Messaging",
    description: "Connect instantly with friends and teams through lightning-fast encrypted chats, read receipts, and rich media attachments.",
    gradient: "from-pink-500 to-purple-600",
    badge: "Instant"
  },
  {
    icon: Mic,
    title: "Voice Notes & Media Sharing",
    description: "Express yourself effortlessly with high-fidelity voice notes, photos, documents, and high-definition video sharing.",
    gradient: "from-purple-600 to-pink-500",
    badge: "Expressive"
  },
  {
    icon: Users,
    title: "Communities & Discussion Channels",
    description: "Build or join specialized communities around your passions with dedicated topic channels, polls, and member moderation.",
    gradient: "from-blue-600 to-indigo-600",
    badge: "Vibrant"
  },
  {
    icon: Video,
    title: "Video Meetings & Screen Sharing",
    description: "Host seamless HD video conferences, study sessions, or hangouts with built-in screen sharing and collaborative tools.",
    gradient: "from-indigo-600 to-purple-700",
    badge: "HD Quality"
  },
  {
    icon: Radio,
    title: "Live Broadcasting",
    description: "Go live to your followers and community instantly with interactive live chat, live Q&A, and virtual tipping.",
    gradient: "from-pink-600 to-purple-500",
    badge: "Interactive"
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Built For Modern Connection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-6">
            Everything You Need in One <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
              Unified Social Universe
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Discover a comprehensive suite of social features designed to bring people closer together, spark creativity, and build thriving communities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresList.map((feature, idx) => {
            const Icon = feature.icon;
            const isFeatured = idx === 0; // Make the first one slightly span wider on desktop if desired or keep uniform
            return (
              <div 
                key={idx}
                className={`group relative rounded-3xl bg-slate-900/80 border border-slate-800 p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col justify-between ${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  {/* Top row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${feature.gradient} flex items-center justify-center text-white shadow-lg shadow-purple-900/30 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-950 text-purple-300 border border-slate-800">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-['Outfit'] group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-purple-400">Explore in NEXORA</span>
                  <a 
                    href={APP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all"
                    aria-label={`Open ${feature.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
