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

      <div className="section-container !py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-sm">
                SG
              </div>
              <span className="font-display font-bold text-lg">
                Shyam<span className="text-primary">Ganesh</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              Java Full Stack Developer passionate about building scalable web applications
              with Spring Boot, Angular, and modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass border border-border/50 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-text mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-muted text-sm hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-text mb-4 text-sm">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a href="mailto:shyamganesh217@gmail.com" className="hover:text-primary transition-colors">
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
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Shyam Ganesh M. Built with React & Tailwind CSS.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl glass border border-border/50 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
