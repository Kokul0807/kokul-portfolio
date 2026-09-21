import { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, Twitter, ArrowUpRight, Download, Heart, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export default function ContactSection({ onOpenResumeModal }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'],
    });

    setFormSubmitted(true);
  };

  return (
    <footer id="contact" className="py-24 bg-[#090a0e] border-t border-white/10 relative overflow-hidden text-left">
      
      {/* Cinematic ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/15 blur-[160px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Big Headline matching video at 00:39 */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-3">
            <span>[ 04 / CONTACT ]</span>
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            <span className="text-neutral-400">GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-4">
            LET'S BUILD <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              SOMETHING GOOD.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-mono max-w-xl">
            Open to internships, full-time opportunities, and interesting projects. Let's discuss how my full stack engineering can support your team.
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact on Left, Interactive Recruiter Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: Direct Info & Quick Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Email Card matching video */}
              <div className="p-6 rounded-2xl bg-[#12141d] border border-white/10">
                <span className="text-xs font-mono uppercase text-red-400 font-bold block mb-2">
                  Direct Inquiries
                </span>
                
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-lg sm:text-xl font-bold font-mono text-white hover:text-red-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Recruiter Quick Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={onOpenResumeModal}
                  className="flex-1 min-w-[160px] p-3.5 rounded-xl bg-[#171a26] hover:bg-[#202436] border border-white/15 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-red-400" />
                  <span>View Official Resume</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20for%20Full%20Stack%20Role`}
                  className="flex-1 min-w-[160px] p-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-600/30 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="p-4 rounded-xl bg-[#12141d]/80 border border-white/10">
                <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider font-bold block mb-3">
                  Professional Networks
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { name: 'GitHub', icon: Github, href: PERSONAL_INFO.github },
                    { name: 'LinkedIn', icon: Linkedin, href: PERSONAL_INFO.linkedin },
                    { name: 'Twitter / X', icon: Twitter, href: PERSONAL_INFO.twitter },
                  ].map((soc) => {
                    const Icon = soc.icon;
                    return (
                      <a
                        key={soc.name}
                        href={soc.href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono"
                      >
                        <Icon className="w-4 h-4 text-red-400" />
                        <span>{soc.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Philosophy Reminder */}
            <div className="mt-8 pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
              <span className="text-white font-semibold">Location:</span> {PERSONAL_INFO.location}
            </div>

          </div>

          {/* Right Column: Recruiter Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12141d] border border-white/10 shadow-xl">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold uppercase text-white">
                    Send Recruiter Message
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    Delivered directly to {PERSONAL_INFO.name}.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  Fast Response (within 24h)
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-center animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase mb-1">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-neutral-300 font-mono mb-4">
                    Thank you, {formData.name}. I have received your message and will reply to {formData.email} promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-4 py-1.5 rounded-lg bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe (Recruiter)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090a0f] border border-white/10 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500/80 transition-colors font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090a0f] border border-white/10 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500/80 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Tech Startup / Enterprise"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090a0f] border border-white/10 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500/80 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Message / Opportunity Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Kokul, we loved your portfolio and would like to discuss a Full Stack Developer role..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090a0f] border border-white/10 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500/80 transition-colors font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-mono uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Footer Bottom Bar matching video */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Designed & Built with passion</span>
            <span className="text-red-500">♥</span>
            <span>in C++, Python, Java, HTML & CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
