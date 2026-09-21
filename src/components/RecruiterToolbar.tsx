import { useState } from 'react';
import { FileText, Camera, Terminal, Mail, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RecruiterToolbarProps {
  onOpenResume: () => void;
  onOpenPhoto: () => void;
  onOpenSandbox: () => void;
}

export default function RecruiterToolbar({
  onOpenResume,
  onOpenPhoto,
  onOpenSandbox,
}: RecruiterToolbarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside
      className="fixed bottom-5 right-5 z-40 flex items-center gap-1.5 p-1.5 rounded-full bg-[#12141f]/90 border border-white/20 backdrop-blur-xl shadow-2xl transition-all hover:border-red-500/50"
      aria-label="Recruiter Quick Actions"
    >
      <div className="hidden sm:flex items-center gap-2 pl-3 pr-2 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
        <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
        <span>Recruiter Toolkit</span>
      </div>

      <button
        onClick={onOpenResume}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-red-500 hover:text-white text-neutral-200 text-xs font-mono font-medium transition-all cursor-pointer"
        title="View & Download PDF Resume"
      >
        <FileText className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Resume</span>
      </button>

      <button
        onClick={onOpenPhoto}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-mono font-medium transition-all cursor-pointer"
        title="Customize / Upload Profile Photo"
      >
        <Camera className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">Photo</span>
      </button>

      <button
        onClick={onOpenSandbox}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-mono font-medium transition-all cursor-pointer"
        title="Open Code Sandbox (C++, Python, Java)"
      >
        <Terminal className="w-3.5 h-3.5 text-rose-400" />
        <span className="hidden sm:inline">Sandbox</span>
      </button>

      <button
        onClick={handleCopyEmail}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white text-xs font-mono font-medium transition-all cursor-pointer border border-red-500/30"
        title="Copy Email Address"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Email'}</span>
      </button>
    </aside>
  );
}
