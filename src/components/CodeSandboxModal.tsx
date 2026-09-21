import { useState } from 'react';
import { Terminal, Play, CheckCircle2, Copy, Check, X } from 'lucide-react';
import { CODE_DEMOS } from '../data/portfolioData';

interface CodeSandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CodeSandboxModal({ isOpen, onClose }: CodeSandboxModalProps) {
  const [selectedDemoId, setSelectedDemoId] = useState<string>('cpp-demo');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [ranOutput, setRanOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d0f17] border border-white/15 p-6 shadow-2xl text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide text-white">
                Interactive Code Sandbox
              </h2>
              <p className="text-xs font-mono text-neutral-400">
                Run verified code samples in C++, Python, Java & Web
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {CODE_DEMOS.map((demo) => (
            <button
              key={demo.id}
              onClick={() => {
                setSelectedDemoId(demo.id);
                setRanOutput(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedDemoId === demo.id
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {demo.title} ({demo.language})
            </button>
          ))}
        </div>

        {/* Editor Box */}
        <div className="rounded-xl border border-white/10 bg-[#090a10] overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-neutral-400 ml-2">
                main.{activeDemo.language === 'cpp' ? 'cpp' : activeDemo.language === 'python' ? 'py' : activeDemo.language === 'java' ? 'java' : 'html'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-neutral-300 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="px-3.5 py-1 rounded bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all shadow-md shadow-red-500/20"
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Compiling...' : 'Run Snippet'}</span>
              </button>
            </div>
          </div>

          <pre className="p-4 text-xs font-mono text-neutral-200 overflow-x-auto leading-relaxed max-h-[300px]">
            <code>{activeDemo.code}</code>
          </pre>

          {/* Terminal Output */}
          <div className="border-t border-white/10 bg-black/80 p-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-neutral-400 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
              <span>Execution Terminal Output</span>
            </div>
            <pre className="text-xs font-mono text-emerald-400/90 whitespace-pre-wrap">
              {isRunning ? (
                <span className="text-amber-400 animate-pulse">Running compilation & tests...</span>
              ) : ranOutput ? (
                ranOutput
              ) : (
                <span className="text-neutral-500 italic">Click "Run Snippet" to execute.</span>
              )}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
