export default function MarqueeBanner() {
  return (
    <div className="w-full overflow-hidden my-8 select-none">
      
      {/* Top High-Contrast Banner matching video */}
      <div className="bg-[#f3f4f6] text-[#0f1117] py-8 sm:py-12 border-y border-neutral-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-neutral-500 mb-2">
            Architecture & Design Philosophy
          </div>

          <div className="relative inline-block">
            {/* Playful block sticker tags matching video style */}
            <span className="absolute -top-3 -left-3 sm:-left-8 bg-amber-400 text-black text-[10px] sm:text-xs font-mono font-black uppercase px-2 py-0.5 rounded shadow-sm rotate-[-4deg] z-10">
              OPTIMIZED
            </span>
            <span className="absolute -bottom-2 -right-2 sm:-right-8 bg-red-600 text-white text-[10px] sm:text-xs font-mono font-black uppercase px-2 py-0.5 rounded shadow-sm rotate-[3deg] z-10">
              SCALABLE
            </span>
            <span className="hidden sm:inline-block absolute top-1/2 -right-16 bg-cyan-400 text-black text-[9px] font-mono font-black uppercase px-1.5 py-0.5 rounded shadow-sm rotate-[6deg] z-10">
              C++ • PYTHON • JAVA
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-neutral-900 leading-[0.95]">
              WHERE <span className="text-red-600">CODE</span> MEETS <br className="hidden sm:inline" />
              CREATIVE <span className="underline decoration-red-500 decoration-wavy decoration-2">THINKING</span>
            </h2>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl mx-auto">
            Transforming conceptual algorithms into dependable, responsive, and production-grade full-stack solutions.
          </p>

        </div>
      </div>

      {/* Running Crimson Marquee Strip matching video */}
      <div className="bg-red-600 py-3 text-white overflow-hidden flex whitespace-nowrap shadow-md">
        <div className="animate-marquee flex items-center gap-8 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-mono">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span>FUNCTIONAL & BEAUTIFUL DESIGNS FOR STARTUPS</span>
              <span className="w-2 h-2 rounded-full bg-white/60"></span>
              <span>READY TO SCALE</span>
              <span className="w-2 h-2 rounded-full bg-white/60"></span>
              <span>ROBUST SERVER-SIDE APPLICATIONS</span>
              <span className="w-2 h-2 rounded-full bg-white/60"></span>
              <span>LEARNING THROUGH PROJECTS</span>
              <span className="w-2 h-2 rounded-full bg-white/60"></span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
