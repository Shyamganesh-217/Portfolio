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
  badge?: string;
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
  const activeSection = useScrollSpy(navLinks.map((l) => l.id), 150);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
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
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-strong shadow-lg shadow-black/25 border-b border-border/40'
            : 'bg-bg/40 backdrop-blur-md border-b border-transparent lg:bg-transparent lg:backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo */}
            <motion.button
              onClick={() => scrollTo('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 cursor-pointer text-left group"
              aria-label="Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-base shadow-md shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                SG
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base md:text-lg tracking-tight leading-tight">
                  Shyam<span className="text-primary">Ganesh</span>
                </span>
                <span className="text-[10px] text-muted font-medium tracking-wider uppercase -mt-0.5 hidden sm:block">
                  Java Full Stack
                </span>
              </div>
            </motion.button>

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
                className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/25 text-primary text-xs font-semibold inline-flex items-center gap-1.5 active:scale-95 transition-transform"
                aria-label="Download Resume"
              >
                <Download size={13} />
                <span className="hidden xs:inline">Resume</span>
              </a>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2.5 rounded-xl glass border border-border/50 text-text hover:text-primary transition-colors cursor-pointer flex items-center justify-center"
                aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X size={22} className="text-primary transition-transform duration-200" />
                ) : (
                  <Menu size={22} className="transition-transform duration-200" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-[85vw] max-w-[340px] bg-[#0F172A]/95 backdrop-blur-2xl border-l border-border/40 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Drawer Top / Header */}
              <div className="p-5 border-b border-border/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-sm">
                      SG
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base leading-tight">
                        Shyam<span className="text-primary">Ganesh</span>
                      </h3>
                      <p className="text-[11px] text-muted">Java Full Stack</p>
                    </div>
                  </div>

                  {/* Dedicated Close Button inside Drawer */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileOpen(false)}
                    className="w-9 h-9 rounded-xl glass border border-border/50 flex items-center justify-center text-muted hover:text-primary transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="text-xs font-medium text-text">Available for Opportunities</span>
                </div>
              </div>

              {/* Scrollable Nav Item Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollTo(link.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-primary/20 via-primary/10 to-transparent text-primary border border-primary/30 font-semibold shadow-sm'
                          : 'text-muted hover:text-text hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            isActive
                              ? 'bg-primary text-white shadow-sm shadow-primary/30'
                              : 'bg-white/5 text-muted group-hover:text-text'
                          }`}
                        >
                          {link.icon}
                        </div>
                        <span>{link.label}</span>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 ${
                          isActive ? 'text-primary translate-x-0.5' : 'text-muted/40'
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* Drawer Bottom / Footer Actions */}
              <div className="p-5 border-t border-border/30 bg-bg-card/40 space-y-3.5">
                {/* Full Width Resume Button */}
                <a
                  href="/Shyamganesh_Resume.pdf"
                  download
                  className="btn-primary w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                >
                  <Download size={16} />
                  Download Resume
                </a>

                {/* Direct Social / Contact Shortcuts */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-muted">Chennai, TN, India</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/Shyamganesh-217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg glass border border-border/50 flex items-center justify-center text-muted hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <SiGithub size={15} />
                    </a>
                    <a
                      href="https://linkedin.com/in/shyamganesh-m"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg glass border border-border/50 flex items-center justify-center text-muted hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <SiLinkedin size={15} />
                    </a>
                    <a
                      href="mailto:shyamganesh217@gmail.com"
                      className="w-8 h-8 rounded-lg glass border border-border/50 flex items-center justify-center text-muted hover:text-primary transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={15} />
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
