import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { Mail, Phone, MapPin, Send, SiGithub, SiLinkedin, Download, Sparkles } from '@/utils/icons';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'shyamganesh217@gmail.com',
    href: 'mailto:shyamganesh217@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 75399 77762',
    href: 'tel:+917539977762',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: <SiLinkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shyamganesh-m',
    color: 'hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400',
  },
  {
    icon: <SiGithub size={20} />,
    label: 'GitHub',
    href: 'https://github.com/Shyamganesh-217',
    color: 'hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-400',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's connect and discuss opportunities, collaborations, or just say hello"
          icon={<Send size={24} />}
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Left – Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                variants={staggerItem}
                href={info.href}
                whileHover={{ x: 6 }}
                className="glass rounded-xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 card-hover group block"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary">{info.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs text-muted uppercase tracking-wider">{info.label}</p>
                  <p className="text-text font-medium text-xs sm:text-sm mt-0.5 truncate">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div variants={staggerItem} className="pt-1 sm:pt-2">
              <p className="text-xs text-muted uppercase tracking-wider mb-3 sm:mb-4">Connect With Me</p>
              <div className="flex gap-2.5 sm:gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl glass border border-border/50 flex items-center justify-center text-muted transition-all ${link.color}`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.a
              variants={staggerItem}
              href="/Shyamganesh_Resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full text-center py-3.5 sm:py-4 rounded-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base shadow-md shadow-primary/20"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right – Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden">
              {/* Success overlay */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-bg-card/95 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-2xl p-4 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-3 sm:mb-4"
                  >
                    <Sparkles size={26} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-text mb-1.5 sm:mb-2">Message Sent!</h3>
                  <p className="text-muted text-xs sm:text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs sm:text-sm font-medium text-text mb-1.5 sm:mb-2">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-bg/50 border border-border/50 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-base sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs sm:text-sm font-medium text-text mb-1.5 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-bg/50 border border-border/50 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-base sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs sm:text-sm font-medium text-text mb-1.5 sm:mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Job Opportunity / Collaboration"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-bg/50 border border-border/50 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-base sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs sm:text-sm font-medium text-text mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the opportunity..."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-bg/50 border border-border/50 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-base sm:text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full py-3.5 sm:py-4 rounded-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-primary/20"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
