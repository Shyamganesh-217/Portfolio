import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { Award, ExternalLink } from '@/utils/icons';

interface Certification {
  title: string;
  provider: string;
  date: string;
  color: string;
}

const certifications: Certification[] = [
  {
    title: 'AI Integrated Java Full Stack Development Program',
    provider: 'Login360',
    date: 'Current',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Java Full Stack Development Program',
    provider: 'Uniq Technologies',
    date: 'December 2025',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Angular Full Stack Development Program',
    provider: 'Glacier Technologies',
    date: 'September 2023',
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'Full Stack Development Certification',
    provider: 'Infosys Springboard',
    date: 'November 2022',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Full Stack with Python Programming Certification',
    provider: 'GUVI Geek Network',
    date: 'September 2023',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Routing & Switching Networking Certification',
    provider: 'Cisco',
    date: 'June 2023',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications validating technical expertise"
          icon={<Award size={24} />}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl overflow-hidden card-hover group relative"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                {/* Badge number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-muted bg-bg-card-hover px-2 py-1 rounded-md">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center opacity-80`}>
                    <Award size={16} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-text mb-2 leading-snug group-hover:text-primary transition-colors text-sm md:text-base">
                  {cert.title}
                </h3>

                {/* Provider */}
                <p className="text-secondary text-sm font-medium mb-3">{cert.provider}</p>

                {/* Date */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{cert.date}</span>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
