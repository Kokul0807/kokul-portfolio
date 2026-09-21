import { useState, useRef } from 'react';
import { Cpu, Terminal, Layers, Sparkles, Orbit, Activity, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function InteractiveModelShowcase() {
  const [activeTab, setActiveTab] = useState<'web' | 'systems' | 'backend'>('web');
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

  const domainData = {
    web: {
      title: "WEB DEVELOPMENT",
      tech: "HTML5 • CSS3 • JavaScript • Responsive UX",
      desc: "Architecting responsive, accessible, pixel-perfect user interfaces with optimized render trees and modern styling.",
      metrics: "60 FPS • 100% Mobile Ready • Zero Layout Shifts",
    },
    systems: {
      title: "SYSTEMS & ALGORITHMS",
      tech: "C++ • Data Structures • Multithreading • Memory Management",
      desc: "Engineering high-throughput asynchronous execution pipelines, custom data structures, and low-latency computation.",
      metrics: "Sub-millisecond latency • RAII Safe • Cache Optimized",
    },
    backend: {
      title: "BACKEND ARCHITECTURE",
      tech: "Python • Java • REST APIs • Microservices",
      desc: "Constructing robust server-side backends with scalable session security, rate-limiting, and distributed databases.",
      metrics: "Production Scalable • 99.9% Uptime Design • RBAC Security",
    }
  };

  return (
    <section id="showcase" className="py-20 relative overflow-hidden bg-[#0a0b0e]">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-red-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-orange-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Title matching video at 00:26 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Orbit className="w-3.5 h-3.5 animate-spin text-red-400" />
            <span>Interactive Tech Model</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
            I LEARN BY BUILDING. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              I GROW BY CREATING.
            </span>
          </h2>

          <p className="text-sm text-neutral-400 font-mono">
            Full stack proficiency spanning low-level system efficiency to polished modern user interfaces.
          </p>
        </div>

        {/* 3D Cyber Model Container matching video */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-2xl bg-[#0f1118]/90 border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden group"
        >
          {/* Subtle grid in background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Interactive domain selector tabs top */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 relative z-20">
            {(['web', 'systems', 'backend'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                    : 'bg-[#181a24] text-neutral-400 hover:text-white hover:bg-[#202330] border border-white/10'
                }`}
              >
                {tab === 'web' && 'Web Engineering'}
                {tab === 'systems' && 'C++ Systems'}
                {tab === 'backend' && 'Python & Java Backend'}
              </button>
            ))}
          </div>

          {/* Center 3D Model Display */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[420px]">
            
            {/* Left overlay card */}
            <div className="w-full lg:w-80 p-5 rounded-xl bg-[#141620]/90 border border-white/10 backdrop-blur-md relative z-20">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-2">
                <Activity className="w-3.5 h-3.5" />
                <span>Specialization Focus</span>
              </div>
              <h4 className="text-lg font-bold uppercase text-white mb-2">
                {domainData[activeTab].title}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                {domainData[activeTab].desc}
              </p>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-emerald-400">
                {domainData[activeTab].metrics}
              </div>
            </div>

            {/* Center: 3D Robot Figure with Interactive Mouse Tilt matching video */}
            <div className="relative w-full max-w-md aspect-video sm:aspect-[4/3] flex items-center justify-center">
              
              {/* Glowing red accent aura behind figure */}
              <div className="absolute w-64 h-64 bg-red-600/25 blur-[90px] rounded-full pointer-events-none" />

              <div
                className="relative w-full h-full max-h-[380px] rounded-xl overflow-hidden transition-transform duration-200 ease-out"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 20}deg) rotateX(${-mousePos.y * 20}deg) scale(1.02)`,
                }}
              >
                <img
                  src={PERSONAL_INFO.cyberFigure}
                  alt="Cybernetic 3D Figure"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />

                {/* Floating Interactive Hotspots matching video */}
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 group/node">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute h-4 w-4 rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative h-2.5 w-2.5 rounded-full bg-red-500 border border-white"></span>
                  </div>
                  <div className="opacity-0 group-hover/node:opacity-100 transition-opacity absolute left-5 top-0 bg-black/90 border border-red-500/40 text-[10px] font-mono text-white px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                    Logic Engine (C++)
                  </div>
                </div>

                <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 group/node">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute h-4 w-4 rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative h-2.5 w-2.5 rounded-full bg-amber-500 border border-white"></span>
                  </div>
                  <div className="opacity-0 group-hover/node:opacity-100 transition-opacity absolute right-5 top-0 bg-black/90 border border-amber-500/40 text-[10px] font-mono text-white px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                    Neural & Backend (Python)
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 group/node">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute h-4 w-4 rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-500 border border-white"></span>
                  </div>
                  <div className="opacity-0 group-hover/node:opacity-100 transition-opacity absolute left-5 top-0 bg-black/90 border border-cyan-500/40 text-[10px] font-mono text-white px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                    Visual Shell (HTML/CSS)
                  </div>
                </div>
              </div>

            </div>

            {/* Right overlay card */}
            <div className="w-full lg:w-80 p-5 rounded-xl bg-[#141620]/90 border border-white/10 backdrop-blur-md relative z-20">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                <span>Tech Stack Breakdown</span>
              </div>
              <p className="text-xs font-mono text-red-400 font-semibold mb-3">
                {domainData[activeTab].tech}
              </p>
              
              <div className="space-y-2 text-xs text-neutral-300">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-400">Concurrency:</span>
                  <span className="font-mono text-white">Thread Safe</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-400">Architecture:</span>
                  <span className="font-mono text-white">Modular Clean</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-neutral-400">Performance:</span>
                  <span className="font-mono text-emerald-400">Optimal</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom badge matching video: "Built with Spline / 3D Canvas" */}
          <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span>Interactive 3D Perspective Canvas</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[11px]">
              Move mouse over canvas to tilt
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
