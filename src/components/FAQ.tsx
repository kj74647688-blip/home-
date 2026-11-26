import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "How do I register and create an account on NEXORA?",
    answer: "Registration is completely free and takes seconds. Simply click any 'Get Started' or 'Join NEXORA' button on this site to visit the platform, enter your credentials, and you'll be ready to connect."
  },
  {
    question: "Is messaging and voice note sharing secure?",
    answer: "Yes! NEXORA uses industry-standard encryption protocols for personal and group messaging, ensuring your conversations and voice notes remain private and secure."
  },
  {
    question: "Can I create or join custom communities?",
    answer: "Absolutely. You can explore public communities across diverse topics or create your own private or public community with custom discussion channels and role-based permissions."
  },
  {
    question: "How do 24-hour stories work?",
    answer: "Stories allow you to share photos, short video snippets, and text updates with your followers that automatically disappear after 24 hours, keeping your profile fresh and engaging."
  },
  {
    question: "What devices and platforms are supported?",
    answer: "NEXORA is a fully responsive web-based platform optimized for all modern desktop browsers, tablets, and mobile smartphones without requiring bulky app store downloads."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-6">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Find clear answers to common questions about joining and using NEXORA.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-white hover:text-purple-300 transition-colors"
                >
                  <span className="text-base sm:text-lg font-['Outfit']">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-400 bg-purple-950/60' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
