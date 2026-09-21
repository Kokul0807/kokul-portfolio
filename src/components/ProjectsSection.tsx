import { useState } from 'react';
import { ArrowUpRight, Code, ExternalLink, Check, Layers, Sparkles, Terminal } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

export default function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const tags = ['All', 'C++', 'Python', 'Java', 'HTML', 'CSS'];

  const filteredProjects = selectedTag === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.tags.includes(selectedTag));

  return (
    <section id="works" className="py-24 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-red-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching video at 00:17 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest font-bold mb-2">
              <span>[ 02 / SELECTED WORKS ]</span>
              <span className="w-8 h-[1px] bg-red-500/50"></span>
              <span className="text-neutral-400">PORTFOLIO</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">
              My Selected <span className="text-red-500">Works</span>
            </h2>

            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-400">
              BUILT WITH PASSION, DRIVEN BY CREATIVITY.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-[#151722] text-neutral-400 hover:text-white hover:bg-[#202332] border border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#12141d] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-red-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-red-950/20"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#181a26]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold">
                    {project.category}
                  </div>

                  <div className="absolute top-3 right-3 text-xs font-mono text-neutral-400 bg-black/50 px-2 py-0.5 rounded">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold uppercase text-white mb-2 tracking-tight group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlights preview */}
                  <div className="space-y-1.5 mb-4">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-6 pt-0 border-t border-white/5 mt-2 flex items-center justify-between">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                >
                  <span>Project Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.codeSnippet && (
                  <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
                    <Terminal className="w-3 h-3" />
                    <span>{project.codeSnippet.language}</span>
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#11131a] border border-white/15 p-6 shadow-2xl text-left">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-red-400 font-bold tracking-wider">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-2xl font-bold uppercase text-white mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {activeProjectModal.description}
            </p>

            {/* Key Engineering Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider font-bold mb-3">
                Key Engineering Highlights
              </h4>
              <div className="space-y-2">
                {activeProjectModal.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200 p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet if present */}
            {activeProjectModal.codeSnippet && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider font-bold">
                    Core Implementation ({activeProjectModal.codeSnippet.language})
                  </span>
                  <span className="text-[10px] font-mono text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-500/30">
                    Production Snippet
                  </span>
                </div>
                <div className="rounded-xl bg-[#090a0f] border border-white/10 p-4 font-mono text-xs text-neutral-300 overflow-x-auto">
                  <pre className="text-emerald-400 leading-relaxed">
                    <code>{activeProjectModal.codeSnippet.code}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {activeProjectModal.tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-md text-xs font-mono bg-red-950/30 border border-red-500/30 text-red-300">
                  {t}
                </span>
              ))}
            </div>

            {/* Close Button */}
            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
