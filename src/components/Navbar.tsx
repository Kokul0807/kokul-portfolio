import { useState, useEffect } from 'react';
import { Code2, ArrowUpRight, Camera, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenPhotoModal: () => void;
  onOpenResumeModal: () => void;
}

export default function Navbar({ onOpenPhotoModal, onOpenResumeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'showcase', 'skills', 'works', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-[#0b0c10]/85 backdrop-blur-md border-b border-white/10' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Code Symbol Logo matching video */}
        <button 
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="Home"
        >
          <div className="w-10 h-10 rounded-xl bg-[#171923] border border-white/15 flex items-center justify-center text-white group-hover:border-red-500/80 group-hover:text-red-400 transition-all duration-300 shadow-md">
            <span className="font-mono font-bold text-base tracking-tighter">&lt;/&gt;</span>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
              {PERSONAL_INFO.title}
            </span>
          </div>
        </button>

        {/* Center: Pill Navigation Menu matching template video */}
        <nav className="hidden md:flex items-center gap-1 bg-[#161822]/90 border border-white/10 rounded-full p-1.5 shadow-xl backdrop-blur-md">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'showcase', label: 'Showcase' },
            { id: 'skills', label: 'Skills' },
            { id: 'works', label: 'Projects' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Quick actions & "Let's Talk" button matching video */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenResumeModal}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            title="View Resume"
          >
            <FileText className="w-3.5 h-3.5 text-red-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenPhotoModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            title="Change or Upload Profile Photo"
          >
            <Camera className="w-3.5 h-3.5 text-red-400" />
            <span className="hidden sm:inline">Photo</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white text-xs uppercase font-bold tracking-wider transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:scale-[1.02] cursor-pointer"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
