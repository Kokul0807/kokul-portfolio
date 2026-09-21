import { useState } from 'react';
import { Terminal, Code2, Cpu, Layout, Palette, Play, CheckCircle2, Copy, Check } from 'lucide-react';
import { SKILLS_DATA, CODE_DEMOS } from '../data/portfolioData';

export default function SkillsSection() {
  const [selectedDemoId, setSelectedDemoId] = useState<string>('cpp-demo');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [ranOutput, setRanOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const activeDemo = CODE_DEMOS.find((d) => d.id === selectedDemoId) || CODE_DEMOS[0];

  const handleRunCode = () => {
    setIsRunning(true);
    setRanOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setRanOutput(activeDemo.output);
    }, 450);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeDemo.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-red-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-rose-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-emerald-400" />;
      default: return <Code2 className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0a0c12] border-t border-white/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching video at 00:32 */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest font-bold mb-3">
            <span>[ 03 / THE SKILLS ]</span>
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            <span className="text-neutral-400">ENGINEERING PROFICIENCY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
            LEARNING THROUGH CODE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              BUILDING THROUGH CURIOSITY.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 font-mono max-w-xl">
            By exploring by building, experimenting, and improving with every project. A rigorous foundation in core systems and modern web technologies.
          </p>
        </div>

        {/* 5 Core Skills Cards (C++, Python, Java, HTML, CSS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-[#12141c] border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-colors">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-neutral-400 font-semibold border border-white/5">
                    {skill.experienceLevel}
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase text-white mb-2 group-hover:text-red-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div>
                {/* Progress bar */}
                <div className="space-y-1.5 mb-3">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                    <span>Proficiency</span>
                    <span className="text-white font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-700"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                {/* Tag */}
                <div className="text-[10px] font-mono text-neutral-400 truncate">
                  Key: <span className="text-white font-medium">{skill.highlightProjects[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Code Runner & Sandbox for Recruiters */}
        <div className="rounded-2xl bg-[#11131a] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-white/10 gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-1">
                <Terminal className="w-4 h-4" />
                <span>Interactive Recruiter Code Sandbox</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white">
                Live Code Verification
              </h3>
            </div>

            {/* Language Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {CODE_DEMOS.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => {
                    setSelectedDemoId(demo.id);
                    setRanOutput(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                    selectedDemoId === demo.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'bg-[#1a1d28] text-neutral-400 hover:text-white hover:bg-[#232738] border border-white/10'
                  }`}
                >
                  {demo.language}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Code Editor view (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-[#090a0f] border border-white/10 overflow-hidden">
              <div className="px-4 py-2.5 bg-[#141620] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-400">
                    {activeDemo.title}
                  </span>
                </div>
                
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-4 font-mono text-xs sm:text-[13px] text-neutral-200 overflow-x-auto min-h-[220px]">
                <pre className="text-neutral-300 leading-relaxed font-mono">
                  <code>{activeDemo.code}</code>
                </pre>
              </div>

              <div className="p-3 bg-[#11131a] border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400">
                  {activeDemo.description}
                </span>
                
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-emerald-600/30 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'Compiling...' : 'Run Code'}</span>
                </button>
              </div>
            </div>

            {/* Terminal Output View (5 cols) */}
            <div className="lg:col-span-5 rounded-xl bg-[#090a0f] border border-white/10 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Terminal / Execution Console</span>
                  </div>
                  <span>Bash / GCC</span>
                </div>

                <div className="font-mono text-xs text-neutral-300 leading-relaxed space-y-2">
                  <div className="text-neutral-500">$ {activeDemo.language} --execute source.code</div>
                  
                  {ranOutput ? (
                    <div className="p-3 rounded-lg bg-[#141722] border border-emerald-500/20 text-emerald-400 whitespace-pre-wrap animate-in fade-in">
                      {ranOutput}
                    </div>
                  ) : isRunning ? (
                    <div className="text-amber-400 flex items-center gap-2 py-4">
                      <span className="animate-spin inline-block w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full" />
                      <span>Allocating memory pool and compiling...</span>
                    </div>
                  ) : (
                    <div className="text-neutral-500 italic py-6 text-center">
                      Click <span className="text-emerald-400 font-semibold">"Run Code"</span> to compile and inspect live terminal execution results.
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Status: <span className="text-emerald-400">Ready</span></span>
                <span>Sandbox: <span className="text-white">Active</span></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
