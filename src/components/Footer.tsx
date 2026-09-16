import { motion } from 'framer-motion';
import { ChevronUp, SiGithub, SiLinkedin, Mail } from '@/utils/icons';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const socialLinks = [
  { icon: <SiGithub size={18} />, href: 'https://github.com/Shyamganesh-217', label: 'GitHub' },
  { icon: <SiLinkedin size={18} />, href: 'https://linkedin.com/in/shyamganesh-m', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:shyamganesh217@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/30">
      {/* Gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-xs sm:text-sm shadow-md shadow-primary/20">
                SG
              </div>
              <span className="font-display font-bold text-base sm:text-lg">
                Shyam<span className="text-primary">Ganesh</span>
              </span>
            </div>
            <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-sm mb-5 sm:mb-6">
              Java Full Stack Developer passionate about building scalable web applications
              with Spring Boot, Angular, and modern technologies.
            </p>
            <div className="flex gap-2.5 sm:gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass border border-border/50 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-text mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-muted text-xs sm:text-sm hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-text mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-muted">
              <li>
                <a href="mailto:shyamganesh217@gmail.com" className="hover:text-primary transition-colors break-all">
                  shyamganesh217@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917539977762" className="hover:text-primary transition-colors">
                  +91 75399 77762
                </a>
              </li>
              <li>Chennai, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/20 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-muted">
            © {new Date().getFullYear()} Shyam Ganesh M. Built with React & Tailwind CSS.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass border border-border/50 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all cursor-pointer shadow-sm"
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
