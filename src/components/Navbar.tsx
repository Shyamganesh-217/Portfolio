import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Download, Home, User, Code2, Briefcase,
  GraduationCap, Award, Send, ChevronRight, SiGithub, SiLinkedin, Mail
} from '@/utils/icons';
import { useScrollSpy } from '@/hooks/useAnimations';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navLinks: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={18} /> },
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'skills', label: 'Skills', icon: <Code2 size={18} /> },
  { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
  { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
  { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> },
  { id: 'contact', label: 'Contact', icon: <Send size={18} /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id), 120);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#0F172A]/95 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-border/50'
            : 'bg-[#0F172A]/90 backdrop-blur-md border-b border-border/20 lg:bg-transparent lg:backdrop-blur-none lg:border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Brand Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 cursor-pointer text-left focus:outline-none group"
              aria-label="Shyam Ganesh Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-sm sm:text-base shadow-md shadow-primary/25 shrink-0 group-hover:scale-105 transition-transform">
                SG
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight leading-tight text-text">
                  Shyam<span className="text-primary">Ganesh</span>
                </span>
                <span className="text-[10px] text-muted font-medium tracking-wider uppercase leading-none hidden xs:block">
                  Java Full Stack
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === link.id
                      ? 'text-primary font-semibold'
                      : 'text-muted hover:text-text hover:bg-white/5'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
              <a
                href="/Shyamganesh_Resume.pdf"
                download
                className="ml-3 btn-primary text-sm py-2 px-5 rounded-lg inline-flex items-center gap-2 font-semibold shadow-md shadow-primary/20"
              >
                <Download size={15} />
                Resume
              </a>
            </div>

            {/* Mobile Actions: Mini Resume Pill + Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="/Shyamganesh_Resume.pdf"
                download
                className="px-2.5 py-1.5 rounded-lg bg-primary/15 border border-primary/30 text-primary text-xs font-semibold flex items-center gap-1.5 active:scale-95 transition-transform"
                aria-label="Download Resume"
              >
                <Download size={13} />
                <span>Resume</span>
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 text-text hover:text-primary flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X size={20} className="text-primary" />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-[84vw] max-w-[320px] h-[100dvh] bg-[#0F172A] border-l border-slate-700/60 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Drawer Top / Header */}
              <div className="p-4 sm:p-5 border-b border-border/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-xs shadow-md">
                      SG
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm leading-tight text-text">
                        Shyam<span className="text-primary">Ganesh</span>
                      </h3>
                      <p className="text-[10px] text-muted">Java Full Stack Dev</p>
                    </div>
                  </div>

                  {/* Dedicated Close Button */}
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-muted hover:text-primary transition-colors cursor-pointer active:scale-95"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="text-[11px] font-medium text-text">Open to Opportunities</span>
                </div>
              </div>

              {/* Scrollable Nav Item Links */}
              <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer text-left ${
                        isActive
                          ? 'bg-gradient-to-r from-primary/20 via-primary/10 to-transparent text-primary border border-primary/30 font-semibold'
                          : 'text-muted hover:text-text hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                            isActive
                              ? 'bg-primary text-white shadow-sm shadow-primary/30'
                              : 'bg-white/5 text-muted'
                          }`}
                        >
                          {link.icon}
                        </div>
                        <span>{link.label}</span>
                      </div>
                      <ChevronRight
                        size={15}
                        className={`transition-transform duration-150 ${
                          isActive ? 'text-primary translate-x-0.5' : 'text-muted/30'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Drawer Bottom / Footer Actions */}
              <div className="p-4 border-t border-border/30 bg-slate-900/60 space-y-3">
                {/* Full Width Resume Button */}
                <a
                  href="/Shyamganesh_Resume.pdf"
                  download
                  className="btn-primary w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-primary/20"
                >
                  <Download size={14} />
                  Download Resume
                </a>

                {/* Direct Social / Contact Shortcuts */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-muted">Chennai, India</span>
                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://github.com/Shyamganesh-217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-muted hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <SiGithub size={13} />
                    </a>
                    <a
                      href="https://linkedin.com/in/shyamganesh-m"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-muted hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <SiLinkedin size={13} />
                    </a>
                    <a
                      href="mailto:shyamganesh217@gmail.com"
                      className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-muted hover:text-primary transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
