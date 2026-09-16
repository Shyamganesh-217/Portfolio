import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useAnimations';
import { Coffee, Download, Send, ArrowRight, Terminal } from '@/utils/icons';
import { SiJava } from '@/utils/icons';

const roles = [
  'Java Developer',
  'Backend Developer',
  'Spring Boot Enthusiast',
  'Problem Solver',
  'Open to Work',
];

const codeSnippet = [
  { text: 'public class', color: 'text-purple-400' },
  { text: ' ShyamGanesh', color: 'text-yellow-300' },
  { text: ' {', color: 'text-text' },
  { text: '', color: '' },
  { text: '  String', color: 'text-blue-400' },
  { text: ' role = ', color: 'text-text' },
  { text: '"Java Full Stack Dev"', color: 'text-green-400' },
  { text: ';', color: 'text-text' },
  { text: '  String', color: 'text-blue-400' },
  { text: ' passion = ', color: 'text-text' },
  { text: '"Building Solutions"', color: 'text-green-400' },
  { text: ';', color: 'text-text' },
  { text: '', color: '' },
  { text: '  void', color: 'text-purple-400' },
  { text: ' build', color: 'text-yellow-300' },
  { text: '() {', color: 'text-text' },
  { text: '    System.out.println(', color: 'text-text' },
  { text: '"Hello, World!"', color: 'text-green-400' },
  { text: ');', color: 'text-text' },
  { text: '  }', color: 'text-text' },
  { text: '}', color: 'text-text' },
];

function FloatingIcon({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute text-primary/10"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.08, 0.15, 0.08],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      <Coffee size={size} />
    </motion.div>
  );
}

export default function Hero() {
  const typedText = useTypingEffect(roles, 100, 60, 2000);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[calc(100dvh-4rem)] lg:min-h-screen flex flex-col justify-start lg:justify-center pt-24 sm:pt-28 lg:pt-20 pb-12 lg:pb-0 overflow-hidden">
      {/* Floating Coffee Icons */}
      <FloatingIcon delay={0} x="5%" y="15%" size={40} />
      <FloatingIcon delay={2} x="85%" y="20%" size={32} />
      <FloatingIcon delay={4} x="75%" y="70%" size={48} />
      <FloatingIcon delay={6} x="10%" y="75%" size={36} />
      <FloatingIcon delay={3} x="50%" y="10%" size={28} />

      {/* Java Logo Floating */}
      <motion.div
        className="absolute right-[8%] top-[25%] text-primary/5 hidden xl:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <SiJava size={120} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-6 lg:py-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left – Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-primary/20 mb-4 sm:mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted">Open to Opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted text-base sm:text-lg md:text-xl font-medium mb-1.5 sm:mb-2"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
            >
              <span className="text-text">Shyam</span>
              <br />
              <span className="gradient-text text-glow">Ganesh M</span>
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 mb-4 sm:mb-8"
            >
              <span className="text-muted text-base sm:text-lg md:text-xl">I'm a</span>
              <span className="text-primary font-display font-semibold text-base sm:text-lg md:text-xl">
                {typedText}
              </span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6 sm:mb-10"
            >
              2024 CSE Graduate with hands-on experience building full-stack applications using
              Java, Spring Boot, Angular, and MySQL. Passionate about clean code, scalable
              backend systems, and creating impactful software.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="/Shyamganesh_Resume.pdf"
                download
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base py-3 px-5 sm:px-6 rounded-xl"
              >
                <Download size={17} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline inline-flex items-center justify-center gap-2 text-sm sm:text-base py-3 px-5 sm:px-6 rounded-xl"
              >
                <Send size={17} />
                Hire Me
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline inline-flex items-center justify-center gap-2 text-sm sm:text-base py-3 px-5 sm:px-6 rounded-xl border-muted/30 text-muted hover:text-text hover:border-muted/50"
              >
                Contact Me
                <ArrowRight size={17} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right – Terminal / Code */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind terminal */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/10 to-transparent rounded-3xl blur-3xl" />

              {/* Terminal */}
              <div className="terminal relative">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="text-muted text-xs ml-2 flex items-center gap-1.5">
                    <Terminal size={12} />
                    ShyamGanesh.java
                  </span>
                </div>
                <div className="terminal-body">
                  {codeSnippet.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.08 }}
                      className="leading-7"
                    >
                      {line.text ? (
                        <>
                          <span className="text-muted/40 select-none mr-4 text-xs">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className={line.color}>{line.text}</span>
                        </>
                      ) : (
                        <span className="text-muted/40 select-none mr-4 text-xs">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 glow-orange-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Coffee size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Experience In</p>
                    <p className="text-sm font-semibold">Full Stack Java</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
