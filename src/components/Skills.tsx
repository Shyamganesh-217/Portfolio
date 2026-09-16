import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import SectionHeading from './SectionHeading';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { useInView } from '@/hooks/useAnimations';
import {
  Code2, Server, Database, Layout, Cloud, Wrench, Brain, Users, Layers, Cpu,
  SiJava, SiJavascript, SiTypescript, SiSpringboot, SiHibernate,
  SiMysql, SiMicrosoftsqlserver, SiAngular, SiReact, SiHtml5, SiCss3,
  SiBootstrap, SiGit, SiGithub, SiApachemaven, SiPostman,
  SiIntellijidea, SiEclipseide, SiVisualstudiocode, SiAmazonec2,
} from '@/utils/icons';

interface Skill {
  name: string;
  icon: ReactNode;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code2 size={20} />,
    skills: [
      { name: 'Java', icon: <SiJava size={18} />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript size={18} />, level: 75 },
      { name: 'TypeScript', icon: <SiTypescript size={18} />, level: 70 },
    ],
  },
  {
    title: 'Backend & Frameworks',
    icon: <Server size={20} />,
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot size={18} />, level: 85 },
      { name: 'Hibernate / JPA', icon: <SiHibernate size={18} />, level: 80 },
      { name: 'JDBC', icon: <Database size={14} />, level: 75 },
      { name: 'Maven', icon: <SiApachemaven size={18} />, level: 80 },
      { name: 'REST APIs', icon: <Layers size={16} />, level: 85 },
      { name: 'Spring Security', icon: <Server size={16} />, level: 70 },
    ],
  },
  {
    title: 'Frontend',
    icon: <Layout size={20} />,
    skills: [
      { name: 'Angular 16+', icon: <SiAngular size={18} />, level: 80 },
      { name: 'HTML5', icon: <SiHtml5 size={18} />, level: 90 },
      { name: 'CSS3', icon: <SiCss3 size={18} />, level: 85 },
      { name: 'Bootstrap 5', icon: <SiBootstrap size={18} />, level: 80 },
      { name: 'React.js', icon: <SiReact size={18} />, level: 65 },
    ],
  },
  {
    title: 'Databases',
    icon: <Database size={20} />,
    skills: [
      { name: 'MySQL', icon: <SiMysql size={18} />, level: 85 },
      { name: 'MS SQL Server', icon: <SiMicrosoftsqlserver size={18} />, level: 70 },
    ],
  },
  {
    title: 'Cloud & Testing',
    icon: <Cloud size={20} />,
    skills: [
      { name: 'AWS EC2', icon: <SiAmazonec2 size={18} />, level: 60 },
      { name: 'Postman API', icon: <SiPostman size={18} />, level: 80 },
    ],
  },
  {
    title: 'Dev Tools',
    icon: <Wrench size={20} />,
    skills: [
      { name: 'Git', icon: <SiGit size={18} />, level: 85 },
      { name: 'GitHub', icon: <SiGithub size={18} />, level: 85 },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea size={18} />, level: 85 },
      { name: 'Eclipse / STS', icon: <SiEclipseide size={18} />, level: 80 },
      { name: 'VS Code', icon: <SiVisualstudiocode size={18} />, level: 85 },
    ],
  },
  {
    title: 'Core Concepts',
    icon: <Brain size={20} />,
    skills: [
      { name: 'OOP', icon: <Cpu size={16} />, level: 90 },
      { name: 'Collections', icon: <Layers size={16} />, level: 85 },
      { name: 'Exception Handling', icon: <Code2 size={16} />, level: 85 },
      { name: 'Java 8 Streams', icon: <Code2 size={16} />, level: 80 },
      { name: 'Multithreading', icon: <Cpu size={16} />, level: 75 },
      { name: 'SDLC / Agile', icon: <Brain size={16} />, level: 75 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: <Users size={20} />,
    skills: [
      { name: 'Problem Solving', icon: <Brain size={16} />, level: 90 },
      { name: 'Communication', icon: <Users size={16} />, level: 85 },
      { name: 'Team Collaboration', icon: <Users size={16} />, level: 85 },
    ],
  },
];

function ProgressBar({ level, delay }: { level: number; delay: number }) {
  const { setRef, isInView } = useInView(0.15);

  return (
    <div className="progress-bar" ref={setRef}>
      <motion.div
        className="progress-fill"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay: delay * 0.05, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-4 sm:p-6 card-hover group"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
          <span className="text-primary">{category.icon}</span>
        </div>
        <h3 className="font-heading font-semibold text-text text-sm sm:text-base">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-muted group-hover:text-primary transition-colors">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-text">{skill.name}</span>
              </div>
              <span className="text-xs text-muted">{skill.level}%</span>
            </div>
            <ProgressBar level={skill.level} delay={index * category.skills.length + i} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive toolkit spanning backend, frontend, databases, and cloud technologies"
          icon={<Code2 size={24} />}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
