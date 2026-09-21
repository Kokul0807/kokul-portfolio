import { useState } from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhilosophyQuoteProps {
  currentPhoto: string;
}

export default function PhilosophyQuote({ currentPhoto }: PhilosophyQuoteProps) {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);

  const quotes = [
    {
      main: PERSONAL_INFO.quote,
      author: PERSONAL_INFO.name,
      context: "Digital Architecture Manifesto",
    },
    {
      main: PERSONAL_INFO.secondaryQuote,
      author: "Josef Müller-Brockmann",
      context: "Structural Design Principle",
    }
  ];

  return (
    <section className="py-16 bg-[#0f1118] border-y border-white/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Big Editorial Quote matching video at 00:23 */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-4">
              <Quote className="w-4 h-4 text-red-400" />
              <span>LEARNING THROUGH PROJECTS</span>
            </div>

            <div className="relative">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading mb-6">
                "{quotes[activeQuoteIdx].main}"
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold px-3 py-1 rounded-md bg-red-950/50 border border-red-500/30">
                  {quotes[activeQuoteIdx].author}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  — {quotes[activeQuoteIdx].context}
                </span>
              </div>
            </div>

            {/* Micro action tags matching video */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="text-white font-semibold">Learn</span>
                <span className="text-red-500">•</span>
                <span className="text-white font-semibold">Build</span>
                <span className="text-red-500">•</span>
                <span className="text-white font-semibold">Experiment</span>
                <span className="text-red-500">•</span>
                <span className="text-white font-semibold">Improve</span>
              </div>

              {/* Quote toggle button */}
              <button
                onClick={() => setActiveQuoteIdx((prev) => (prev === 0 ? 1 : 0))}
                className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1 rounded bg-white/5 border border-white/10 hover:border-red-500/40 transition-colors cursor-pointer"
              >
                Switch Quote ↻
              </button>
            </div>

          </div>

          {/* Right Column: High Contrast Cinematic Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src={currentPhoto}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                <span>{PERSONAL_INFO.name}</span>
                <span className="text-red-400">Full Stack Dev</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
