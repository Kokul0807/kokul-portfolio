import { useState, useRef } from 'react';
import { Sparkles, ArrowRight, Compass, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function CuriositySection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="py-20 bg-[#0d0f17] border-t border-white/10 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Title matching video at 00:36 */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-3">
            <Compass className="w-4 h-4" />
            <span>CONTINUOUS EVOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4">
            STILL LEARNING. <br />
            STILL BUILDING. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              STILL CURIOUS.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 font-mono">
            "I keep exploring, building projects, improving my skills."
          </p>
        </div>

        {/* 3D Floating Interactive Curiosity Module matching video */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-3xl mx-auto rounded-2xl bg-[#131622]/80 border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Ambient red spotlight inside module */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-600/20 blur-[100px] pointer-events-none" />

          {/* Left Text Block */}
          <div className="w-full md:w-1/2 text-left relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold block mb-2">
              Next-Gen Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-3 tracking-tight">
              ALWAYS LEARNING WHAT COMES NEXT.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
              Constantly pushing the boundaries of memory efficiency, clean modular design, and robust API scalability.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1 text-white">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Ready</span>
              </span>
              <span>•</span>
              <span className="text-red-400">High Reliability</span>
            </div>
          </div>

          {/* Right Floating 3D Cube Render matching video */}
          <div className="w-full md:w-1/2 flex justify-center relative z-10">
            <div
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl overflow-hidden shadow-2xl transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(800px) rotateY(${mousePos.x * 25}deg) rotateX(${-mousePos.y * 25}deg) scale(1.05)`,
              }}
            >
              <img
                src={PERSONAL_INFO.curiousCube}
                alt="3D Curiosity Cube"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-center text-[10px] font-mono text-white/80 bg-black/40 backdrop-blur-sm py-1 rounded border border-white/10">
                Interactive 3D Kinetic Object
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
