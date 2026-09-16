import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { Layers, Shield, Cpu, Code2, Database, Server, FileCode, GitBranch, Zap } from '@/utils/icons';
import { ReactNode } from 'react';

interface ExpertiseItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    icon: <Layers size={24} />,
    title: 'Object-Oriented Programming',
    description: 'Encapsulation, Inheritance, Polymorphism, Abstraction – designing robust class hierarchies.',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Collections Framework',
    description: 'ArrayList, HashMap, TreeSet, LinkedList – choosing optimal data structures for performance.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Exception Handling',
    description: 'Try-catch, custom exceptions, and error propagation for resilient applications.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Multithreading',
    description: 'Thread lifecycle, synchronization, executors, and concurrent programming patterns.',
  },
  {
    icon: <Database size={24} />,
    title: 'JDBC & SQL Integration',
    description: 'Database connectivity, prepared statements, and transaction management.',
  },
  {
    icon: <FileCode size={24} />,
    title: 'File I/O & Streams',
    description: 'Java I/O streams, readers/writers, NIO, and file handling operations.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Java 8 Streams & Lambda',
    description: 'Functional programming with streams, lambda expressions, and method references.',
  },
  {
    icon: <Server size={24} />,
    title: 'Spring Boot & REST APIs',
    description: 'Building production-grade RESTful services with dependency injection and auto-configuration.',
  },
  {
    icon: <GitBranch size={24} />,
    title: 'Hibernate ORM',
    description: 'Object-relational mapping, entity relationships, HQL, and session management.',
  },
];

export default function JavaExpertise() {
  return (
    <section className="relative">
      <div className="section-container">
        <SectionHeading
          title="Java Expertise"
          subtitle="Deep proficiency in core Java concepts and enterprise frameworks"
          icon={<Code2 size={24} />}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {expertiseItems.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-5 sm:p-6 card-hover group relative overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3.5 sm:mb-4 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                <span className="text-primary">{item.icon}</span>
              </div>

              <h3 className="font-heading font-semibold text-text text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
