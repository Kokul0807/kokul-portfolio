import { FileText, Download, Printer, X, Check, Mail, Globe, MapPin } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0e1017] border border-white/15 p-6 sm:p-10 shadow-2xl text-left">
        
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <FileText className="w-4 h-4 text-red-400" />
            <span>Recruiter Verification View</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-300" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#141622] border border-white/10 shadow-inner">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold uppercase text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h2>
                <div className="text-sm font-bold uppercase font-mono text-red-400 mt-0.5">
                  {PERSONAL_INFO.title}
                </div>
              </div>

              <div className="text-xs font-mono text-neutral-400 space-y-1 text-left sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5 text-neutral-300">
                  <Mail className="w-3.5 h-3.5 text-red-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-300 mt-4 leading-relaxed italic">
              "{PERSONAL_INFO.quote}"
            </p>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase text-red-400 font-bold tracking-wider mb-2">
              Professional Summary
            </h3>
            <p className="text-xs text-neutral-200 leading-relaxed">
              {PERSONAL_INFO.aboutMe} {PERSONAL_INFO.whatIDo} Dedicated full-stack software engineer with deep proficiency in C++, Python, Java, and modern web interfaces (HTML/CSS). Focused on clean architecture, low-latency execution, and dependable user experiences.
            </p>
          </div>

          {/* Technical Competencies */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase text-red-400 font-bold tracking-wider mb-2.5">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                <span className="text-white font-bold block mb-1">Core Languages:</span>
                <span className="text-neutral-300">C++, Python, Java</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                <span className="text-white font-bold block mb-1">Web & Frontend:</span>
                <span className="text-neutral-300">HTML5, CSS3, Modern JavaScript, Responsive Design</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                <span className="text-white font-bold block mb-1">Backend & Systems:</span>
                <span className="text-neutral-300">RESTful APIs, Multithreading, Memory Optimization, Microservices</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                <span className="text-white font-bold block mb-1">Tools & Practices:</span>
                <span className="text-neutral-300">Git, Linux, CI/CD, OOP, Data Structures & Algorithms</span>
              </div>
            </div>
          </div>

          {/* Featured Key Projects */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase text-red-400 font-bold tracking-wider mb-3">
              Selected Projects & Engineering Accomplishments
            </h3>
            <div className="space-y-3">
              {PROJECTS_DATA.slice(0, 3).map((p) => (
                <div key={p.id} className="p-3 rounded-lg bg-black/20 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase text-white font-mono">{p.title}</span>
                    <span className="text-[10px] font-mono text-red-400">{p.tags.slice(0, 3).join(' • ')}</span>
                  </div>
                  <p className="text-xs text-neutral-300 mb-2 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="space-y-1">
                    {p.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-400">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase text-red-400 font-bold tracking-wider mb-2">
              Education & Foundations
            </h3>
            <div className="p-3 rounded-lg bg-black/20 border border-white/5 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-white font-bold block">Bachelor of Engineering / Technology</span>
                <span className="text-neutral-400">Computer Science & Engineering</span>
              </div>
              <span className="text-neutral-400">First Class Distinction</span>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6 print:hidden">
          <span className="text-xs font-mono text-neutral-400">
            A. Kokul prasanth • Portfolio Resume
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
