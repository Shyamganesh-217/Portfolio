import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
}

export default function SectionHeading({ title, subtitle, icon }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-10 sm:mb-16"
    >
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-4 sm:mb-6 shadow-sm shadow-primary/10"
        >
          <span className="text-primary">{icon}</span>
        </motion.div>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2.5 sm:mb-4 px-2">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-3 sm:px-0">
        {subtitle}
      </p>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4 sm:mt-6"
      />
    </motion.div>
  );
}
