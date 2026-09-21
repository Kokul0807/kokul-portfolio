import { useState } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2, Download, ExternalLink, Camera, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  currentPhoto: string;
  onOpenPhotoModal: () => void;
  onOpenResumeModal: () => void;
}

export default function HeroSection({ currentPhoto, onOpenPhotoModal, onOpenResumeModal }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Cinematic ambient background glow matching video */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-red-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Info, Center Hero Photo, Right Tech Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left order-2 lg:order-1">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono tracking-wide w-fit mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Available for Hire & Internships</span>
            </div>

            {/* Name & Title matching video */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08] mb-3">
              {PERSONAL_INFO.name}
            </h1>

            <div className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 mb-5">
              {PERSONAL_INFO.title}
            </div>

            {/* Sub-quote card matching video */}
            <div className="p-4 rounded-xl bg-[#141620]/90 border border-white/10 backdrop-blur-sm mb-6 relative group">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono tracking-wider text-red-400 font-semibold mb-1">
                    Philosophy
                  </p>
                  <p className="text-sm text-neutral-200 leading-relaxed italic">
                    "{PERSONAL_INFO.quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToWorks}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-red-600/30 hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-2.5 rounded-xl bg-[#1a1d29] hover:bg-[#232736] border border-white/15 text-white text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-red-400" />
                <span>Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-xs font-mono tracking-wider transition-colors cursor-pointer"
              >
                {copied ? '✓ Email Copied!' : 'Copy Email'}
              </button>
            </div>

          </div>

          {/* Center Column: Cinematic Portrait matching video (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 shadow-2xl group">
              
              {/* Subtle crimson background glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-red-600/30 via-transparent to-amber-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Portrait container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#12141c]">
                <img
                  src={currentPhoto}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-black/60 pointer-events-none" />

                {/* Quick Photo Switcher Tooltip button */}
                <button
                  onClick={onOpenPhotoModal}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-lg cursor-pointer flex items-center gap-1.5 px-3 text-xs"
                  title="Upload or Change Photo"
                >
                  <Camera className="w-3.5 h-3.5 text-red-400" />
                  <span className="font-medium text-[11px]">Upload Photo</span>
                </button>

                {/* Bottom Card inside portrait */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0f1118]/85 border border-white/10 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {PERSONAL_INFO.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">
                    C++ • Python • Java
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Skills & Recruiter Highlights (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-left order-3">
            
            {/* What I Do Card */}
            <div className="p-4 rounded-xl bg-[#141620]/80 border border-white/10 backdrop-blur-sm">
              <span className="text-[11px] uppercase font-mono tracking-wider text-red-400 font-bold block mb-1">
                What I Do
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {PERSONAL_INFO.whatIDo}
              </p>
            </div>

            {/* Core Competencies Box */}
            <div className="p-4 rounded-xl bg-[#141620]/80 border border-white/10 backdrop-blur-sm">
              <span className="text-[11px] uppercase font-mono tracking-wider text-neutral-400 font-bold block mb-2.5">
                Core Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["C++", "Python", "Java", "HTML5", "CSS3"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#1e2230] border border-white/10 text-neutral-200 hover:border-red-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#141620]/60 border border-white/5">
                  <div className="text-xl font-bold font-mono text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
