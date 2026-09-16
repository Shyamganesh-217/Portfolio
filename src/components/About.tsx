import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { BookOpen, Zap, Globe, Code2 } from '@/utils/icons';

const highlights = [
  {
    icon: <Code2 size={22} />,
    title: 'Java Full Stack',
    desc: 'Proficient in building end-to-end applications with Java, Spring Boot, Angular, and MySQL.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Quick Learner',
    desc: 'Rapidly adapts to new technologies, frameworks, and development methodologies.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Web Applications',
    desc: 'Experience developing responsive, production-grade web applications with modern frameworks.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Strong Foundations',
    desc: 'Solid grasp of OOP, Data Structures, DBMS, and Software Engineering principles.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="A passionate Java Full Stack Developer building scalable and elegant solutions"
          icon={<BookOpen size={24} />}
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left – Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass rounded-2xl p-8 card-hover">
              <h3 className="font-heading text-xl font-semibold mb-4 text-text">
                Professional Overview
              </h3>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I'm a <span className="text-primary font-medium">2024 Computer Science Engineering graduate</span> from
                  Adithya Institute of Technology (Anna University) with a CGPA of 8.03. My technical journey
                  centers around <span className="text-primary font-medium">Java Full Stack Development</span>,
                  where I've built applications using Spring Boot, Angular, Hibernate, and MySQL.
                </p>
                <p>
                  With hands-on experience in developing RESTful APIs, implementing backend services with
                  Spring Data JPA, and building dynamic user interfaces with Angular 16+, I bring a strong
                  foundation in both frontend and backend development. My internship and certification
                  experiences across multiple Java Full Stack programs have reinforced my practical skills.
                </p>
                <p>
                  I'm passionate about writing clean, maintainable code and building software that solves
                  real-world problems. My goal is to contribute to innovative teams where I can grow as a
                  developer while delivering impactful, production-ready applications.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { value: '8.03', label: 'CGPA' },
                { value: '3+', label: 'Projects' },
                { value: '6+', label: 'Certifications' },
                { value: '10+', label: 'Technologies' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="glass rounded-xl p-4 text-center card-hover"
                >
                  <p className="text-2xl md:text-3xl font-bold gradient-text font-display">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ x: 6 }}
                className="glass rounded-xl p-5 card-hover flex gap-4 items-start group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">{item.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
