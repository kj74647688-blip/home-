import React, { useState } from 'react';
import { Film, MessageSquare, Rss, Users, Video, Radio, Sparkles, Heart, Send, CheckCircle2, Play, Mic, Shield } from 'lucide-react';

const APP_URL = "https://myzora.netlify.app/";

const showcaseTabs = [
  { id: 'reels', name: 'Reels Studio', icon: Film },
  { id: 'feed', name: 'Social Feed', icon: Rss },
  { id: 'messages', name: 'Messaging', icon: MessageSquare },
  { id: 'communities', name: 'Communities', icon: Users },
  { id: 'meetings', name: 'Video Meetings', icon: Video },
  { id: 'live', name: 'Live Streaming', icon: Radio },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('reels');

  return (
    <section id="showcase" className="py-24 md:py-32 bg-slate-900/50 relative overflow-hidden border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive Platform Preview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-6">
            Explore the NEXORA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
              Interface Experience
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Take a closer look at how our beautifully crafted, lightning-fast interface empowers your daily social interactions.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {showcaseTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'}`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Display Area */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 blur-[100px] pointer-events-none" />

          {/* Reels Studio Tab Content */}
          {activeTab === 'reels' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="md:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-300 text-xs font-semibold mb-4">
                  <Film className="w-3.5 h-3.5" /> Reels Studio
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Outfit']">
                  Create Cinematic Short-Form Reels
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Record, edit, and apply filters with our intuitive Reels studio. Add trending audio tracks, captions, and effects in seconds before broadcasting to your followers.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>High-definition vertical video encoding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Instant audio mixing and background music library</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Real-time comments, likes, and remixing tools</span>
                  </li>
                </ul>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>Open Reels Studio</span>
                </a>
              </div>

              <div className="md:col-span-6 flex justify-center">
                <div className="w-64 sm:w-72 h-[420px] rounded-3xl bg-slate-900 border border-slate-800 p-4 relative shadow-2xl flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/60 via-slate-900 to-indigo-950/60 z-0" />
                  <div className="relative z-10 flex items-center justify-between text-xs text-white">
                    <span className="bg-slate-950/80 px-2.5 py-1 rounded-full font-mono">LIVE REEL</span>
                    <span className="flex items-center gap-1 bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full"><Heart className="w-3 h-3 fill-pink-400 text-pink-400" /> 18.2K</span>
                  </div>
                  <div className="relative z-10 text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-purple-600/90 text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-600/40">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                    <div className="text-sm font-bold text-white">Exploring the Cosmos</div>
                    <div className="text-xs text-slate-400">@alex_creator</div>
                  </div>
                  <div className="relative z-10 bg-slate-950/90 rounded-2xl p-3 text-xs text-slate-300 flex items-center justify-between">
                    <span>Add comment...</span>
                    <Send className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Social Feed Tab Content */}
          {activeTab === 'feed' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="md:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-300 text-xs font-semibold mb-4">
                  <Rss className="w-3.5 h-3.5" /> Social Feed & Stories
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Outfit']">
                  Stay Connected With Your Circle
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Enjoy a clean, algorithmic-free or tailored social feed showcasing updates from friends and creators. Post text, photos, polls, and 24-hour stories effortlessly.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>24-hour disappearing stories with rich overlays</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Rich media posts with image galleries and links</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Chronological or Smart Feed preference toggles</span>
                  </li>
                </ul>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>Explore Feed</span>
                </a>
              </div>

              <div className="md:col-span-6">
                <div className="space-y-3">
                  <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-xs">JD</div>
                      <div>
                        <div className="text-xs font-bold text-white">Jessica Davis</div>
                        <div className="text-[10px] text-slate-400">10m ago</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300">Just published our new community design system on NEXORA! Check it out.</p>
                  </div>

                  <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-xs">MR</div>
                      <div>
                        <div className="text-xs font-bold text-white">Marcus Ross</div>
                        <div className="text-[10px] text-slate-400">1h ago</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300">Working on live audio spaces tonight. Who is joining the discussion?</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Messaging Tab Content */}
          {activeTab === 'messages' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="md:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-300 text-xs font-semibold mb-4">
                  <MessageSquare className="w-3.5 h-3.5" /> Instant Messaging
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Outfit']">
                  Lightning-Fast Encrypted Messaging
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Chat 1-on-1 or in group chats with end-to-end reliability. Send voice notes, photos, code snippets, and react with custom emojis instantly.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>High-fidelity voice notes with waveform preview</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Group chats with role management and file sharing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>End-to-end encrypted privacy guarantee</span>
                  </li>
                </ul>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>Start Messaging</span>
                </a>
              </div>

              <div className="md:col-span-6 bg-slate-900 rounded-2xl p-4 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center text-xs">EL</div>
                    <div>
                      <div className="text-xs font-bold text-white">Elena Rostova</div>
                      <div className="text-[10px] text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Online</div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl text-xs text-slate-300 max-w-[80%]">
                  Hey! Are we reviewing the community guidelines today?
                </div>
                <div className="bg-purple-600/20 border border-purple-500/30 p-3 rounded-xl text-xs text-purple-200 max-w-[80%] ml-auto">
                  Yes! Let is start the video meeting in 5 minutes.
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 bg-slate-950 px-3 py-2 rounded-xl text-xs text-slate-400">Type a message...</div>
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Communities Tab Content */}
          {activeTab === 'communities' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="md:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-300 text-xs font-semibold mb-4">
                  <Users className="w-3.5 h-3.5" /> Communities & Channels
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Outfit']">
                  Thriving Communities Around Your Passions
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Create or join specialized communities with dedicated channels for tech, art, gaming, music, and more. Engage in deep discussions and connect with kindred spirits.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Custom channel categories and topic categorization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Role-based permissions and community moderation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Polls, announcements, and pinned discussions</span>
                  </li>
                </ul>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>Browse Communities</span>
                </a>
              </div>

              <div className="md:col-span-6 bg-slate-900 rounded-2xl p-4 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2"># Featured Communities</div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-600/30 text-purple-300 flex items-center justify-center font-bold text-sm">🎨</div>
                    <div>
                      <div className="text-sm font-bold text-white">Digital Creators Hub</div>
                      <div className="text-xs text-slate-400">14.2k members • 42 channels</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-purple-950 text-purple-300 px-3 py-1 rounded-lg">Joined</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600/30 text-indigo-300 flex items-center justify-center font-bold text-sm">⚡</div>
                    <div>
                      <div className="text-sm font-bold text-white">Tech Innovators 2026</div>
                      <div className="text-xs text-slate-400">8.9k members • 18 channels</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-slate-900 text-slate-300 px-3 py-1 rounded-lg">Join</span>
                </div>
              </div>
            </div>
          )}

          {/* Video Meetings Tab Content */}
          {activeTab === 'meetings' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="md:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-300 text-xs font-semibold mb-4">
                  <Video className="w-3.5 h-3.5" /> Video Meetings
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Outfit']">
                  HD Video Meetings & Screen Sharing
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Host crystal-clear video conferences with peers or teams. Share your screen, collaborate on digital whiteboards, and record meetings effortlessly.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>HD video and low-latency audio transmission</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>One-click screen sharing and presentation mode</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>In-meeting chat and participant controls</span>
                  </li>
                </ul>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>Start Meeting</span>
                </a>
              </div>

              <div className="md:col-span-6 bg-slate-900 rounded-2xl p-4 border border-slate-800">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="h-28 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 text-xs text-slate-400 font-medium">
                    Participant 1
                  </div>
                  <div className="h-28 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 text-xs text-slate-400 font-medium">
                    Participant 2
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 bg-slate-950 p-3 rounded-xl">
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">🎙️</div>
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">📹</div>
                  <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">📞</div>
                </div>
              </div>
            </div>
          )}

          {/* Live Streaming Tab Content */}
          {activeTab === 'live' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="md:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-300 text-xs font-semibold mb-4">
                  <Radio className="w-3.5 h-3.5" /> Live Broadcasting
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Outfit']">
                  Go Live to Your Global Audience
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Broadcast live video streams directly to your followers and community channels. Engage viewers with live Q&A, interactive chat, and virtual tipping.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Ultra-low latency live broadcasting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Real-time audience chat and moderation tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Automatic stream recording and archiving</span>
                  </li>
                </ul>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>Start Live Stream</span>
                </a>
              </div>

              <div className="md:col-span-6 bg-slate-900 rounded-2xl p-4 border border-slate-800 text-center relative overflow-hidden">
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
                </div>
                <div className="h-44 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 mb-3 text-slate-400 text-sm">
                  Live Stream Video Output
                </div>
                <div className="text-xs text-slate-300">Broadcasting to 1,240 active viewers</div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
