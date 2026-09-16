import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { ExternalLink, Layers } from '@/utils/icons';
import {
  SiHtml5, SiCss3, SiJava, SiSpringboot, SiHibernate, SiAngular,
  SiMysql, SiTypescript, SiBootstrap, SiGithub,
} from '@/utils/icons';
import { ReactNode } from 'react';

interface Project {
  title: string;
  description: string;
  problem: string;
  features: string[];
  techStack: { name: string; icon: ReactNode }[];
  learnings: string[];
  github?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'Hospital Management System',
    description:
      'A full-stack Hospital Management System with role-based access for administrators, doctors, and patients.',
    problem:
      'Healthcare facilities need a centralized platform to manage patient records, appointment scheduling, billing, and electronic health records efficiently.',
    features: [
      'Role-based access control (Admin, Doctor, Patient)',
      'Patient scheduling and appointment management',
      'Billing history tracking and management',
      'Electronic Health Record (EHR) management',
      'RESTful API backend with Spring Boot',
      'Dynamic Angular 17+ frontend interface',
    ],
    techStack: [
      { name: 'Java', icon: <SiJava size={14} /> },
      { name: 'Spring Boot', icon: <SiSpringboot size={14} /> },
      { name: 'Hibernate', icon: <SiHibernate size={14} /> },
      { name: 'Angular 17+', icon: <SiAngular size={14} /> },
      { name: 'MySQL', icon: <SiMysql size={14} /> },
    ],
    learnings: [
      'Full-stack architecture with Spring Boot + Angular',
      'Database design with JPA/Hibernate ORM',
      'REST API design and implementation',
      'Role-based authentication patterns',
    ],
    github: 'https://github.com/Shyamganesh-217',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'E-Commerce Web Application',
    description:
      'A responsive e-commerce platform featuring product catalog, shopping cart, and interactive UI components.',
    problem:
      'Building a modern, responsive shopping experience with dynamic product interactions and seamless cart operations.',
    features: [
      'Product catalog with search and filtering',
      'Shopping cart with real-time updates',
      'Responsive layout for all devices',
      'Interactive product cards with hover effects',
      'Client-side state management with TypeScript',
      'Bootstrap 5 responsive grid system',
    ],
    techStack: [
      { name: 'Angular 17+', icon: <SiAngular size={14} /> },
      { name: 'TypeScript', icon: <SiTypescript size={14} /> },
      { name: 'HTML5', icon: <SiHtml5 size={14} /> },
      { name: 'CSS3', icon: <SiCss3 size={14} /> },
      { name: 'Bootstrap 5', icon: <SiBootstrap size={14} /> },
    ],
    learnings: [
      'Component-based frontend architecture',
      'TypeScript for type-safe development',
      'Responsive design with Bootstrap 5',
      'Client-side state and cart management',
    ],
    github: 'https://github.com/Shyamganesh-217',
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing skills, projects, and professional details with clean, responsive design.',
    problem:
      'Creating a professional online presence to showcase technical skills and project work to potential recruiters and collaborators.',
    features: [
      'Clean, minimal UI design',
      'Fully responsive layout using Flexbox',
      'Skills and project showcase sections',
      'Optimized for fast loading',
      'Cross-browser compatible',
    ],
    techStack: [
      { name: 'HTML5', icon: <SiHtml5 size={14} /> },
      { name: 'CSS3', icon: <SiCss3 size={14} /> },
    ],
    learnings: [
      'Semantic HTML and CSS best practices',
      'Responsive design with Flexbox',
      'Web page layout and typography',
      'Performance optimization',
    ],
    github: 'https://github.com/Shyamganesh-217',
    gradient: 'from-green-500/20 to-teal-500/20',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={staggerItem}
      className="glass rounded-2xl overflow-hidden card-hover group"
    >
      {/* Top gradient bar */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-5 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                Project {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-text group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors shrink-0"
              aria-label="View on GitHub"
            >
              <SiGithub size={17} className="text-primary" />
            </a>
          )}
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Problem Statement */}
        <div className="glass rounded-xl p-3.5 sm:p-4 mb-4 sm:mb-5">
          <p className="text-[11px] sm:text-xs font-semibold text-primary uppercase tracking-wider mb-1">Problem Statement</p>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">{project.problem}</p>
        </div>

        {/* Features */}
        <div className="mb-4 sm:mb-5">
          <p className="text-[11px] sm:text-xs font-semibold text-primary uppercase tracking-wider mb-2.5 sm:mb-3">Key Features</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-4 sm:mb-5">
          <p className="text-[11px] sm:text-xs font-semibold text-primary uppercase tracking-wider mb-2.5 sm:mb-3">Technologies</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-bg-card-hover/50 border border-border/50 text-[11px] sm:text-xs font-medium text-text"
              >
                <span className="text-primary">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Outcomes */}
        <details className="group/details bg-slate-900/40 border border-border/40 rounded-xl p-3.5 my-3">
          <summary className="text-[11px] sm:text-xs font-semibold text-primary uppercase tracking-wider cursor-pointer flex items-center justify-between select-none">
            <span>Learning Outcomes</span>
            <ExternalLink size={13} className="rotate-0 group-open/details:rotate-90 transition-transform text-primary" />
          </summary>
          <ul className="space-y-1.5 mt-3 pt-2 border-t border-border/20">
            {project.learnings.map((learning) => (
              <li key={learning} className="flex items-start gap-2 text-xs sm:text-sm text-muted">
                <span className="text-primary mt-0.5">→</span>
                {learning}
              </li>
            ))}
          </ul>
        </details>

        {/* GitHub Button */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-4 sm:mt-6 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 active:scale-98 transition-all group/btn"
          >
            <SiGithub size={16} />
            View on GitHub
            <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <SectionHeading
          title="Projects"
          subtitle="Real-world applications built with modern Java and web technologies"
          icon={<Layers size={24} />}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* First project spans full width on large screens */}
          <div className="lg:col-span-2">
            <ProjectCard project={projects[0]} index={0} />
          </div>
          {projects.slice(1).map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
