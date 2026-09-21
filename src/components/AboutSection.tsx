import { ArrowRight, Code, Layers, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  currentPhoto: string;
  onOpenPhotoModal: () => void;
}

export default function AboutSection({ currentPhoto, onOpenPhotoModal }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching video */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest font-bold mb-2">
              <span>[ 01 / ABOUT ]</span>
              <span className="w-8 h-[1px] bg-red-500/50"></span>
              <span className="text-neutral-400">WHO I AM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              ABOUT <span className="text-neutral-400 font-light">Me</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono">
            Bridging algorithmic logic with intuitive digital design. Ready to solve complex problems.
          </p>
        </div>

        {/* Bento Grid: 3 Distinct Cards matching video at 00:10 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 01: WHO I AM (MD 4 Cols) */}
          <div className="md:col-span-4 rounded-2xl bg-[#13151f] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black font-mono text-neutral-500 group-hover:text-white transition-colors">
                  01
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  Profile
                </span>
              </div>

              {/* Portrait Thumbnail */}
              <div className="w-20 h-20 rounded-xl overflow-hidden mb-6 border border-white/20 shadow-md relative group/thumb">
                <img
                  src={currentPhoto}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold uppercase text-white mb-3 tracking-tight">
                WHO <span className="text-red-500">I AM</span>
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {PERSONAL_INFO.aboutMe}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Full Stack Developer</span>
              <span className="text-red-400">C++ • Python • Java</span>
            </div>

          </div>

          {/* Card 02: WHAT I DO - Crimson Card with 3D Sneaker/Craft design (MD 4 Cols) */}
          <div className="md:col-span-4 rounded-2xl bg-gradient-to-br from-red-700 via-red-600 to-rose-700 p-6 text-white flex flex-col justify-between shadow-xl shadow-red-900/30 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group">
            
            {/* Background design illustration matching video */}
            <div className="absolute right-0 bottom-12 w-44 h-32 opacity-80 mix-blend-screen pointer-events-none group-hover:scale-110 transition-transform duration-500">
              <img
                src={PERSONAL_INFO.craftDesign}
                alt="Craft & Design"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black font-mono text-white/70">
                  02
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white bg-black/30 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                  Specialization
                </span>
              </div>

              <h3 className="text-2xl font-bold uppercase text-white mb-3 tracking-tight">
                WHAT <span className="text-black/80">I DO</span>
              </h3>

              <p className="text-sm text-red-50 font-medium leading-relaxed max-w-[280px]">
                {PERSONAL_INFO.whatIDo}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20 relative z-10">
              <div className="flex flex-wrap gap-1.5">
                {["Frontend (HTML/CSS)", "Backend (Python/Java)", "Core Systems (C++)"].map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-black/25 text-white border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Card 03: PHILOSOPHY / ARCHITECTURE (MD 4 Cols) */}
          <div className="md:col-span-4 rounded-2xl bg-[#13151f] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black font-mono text-neutral-500 group-hover:text-white transition-colors">
                  03
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  Vision
                </span>
              </div>

              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold uppercase text-white mb-3 tracking-tight">
                MY <span className="text-red-500">PHILOSOPHY</span>
              </h3>

              <blockquote className="text-sm text-neutral-300 leading-relaxed italic border-l-2 border-red-500 pl-3 my-3 font-serif">
                "{PERSONAL_INFO.quote}"
              </blockquote>

              <p className="text-xs text-neutral-400 leading-relaxed font-mono mt-3">
                Writing maintainable code, respecting design constraints, and delivering software that scales gracefully under real-world workloads.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-emerald-400">100% Committed</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
