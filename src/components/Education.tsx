import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { GraduationCap, MapPin, BookOpen } from '@/utils/icons';

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Software Engineering',
  'Computer Networks',
  'Operating Systems',
];

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation in Computer Science and Engineering"
          icon={<GraduationCap size={24} />}
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            {/* Education Card */}
            <div className="relative md:pl-20">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-5 top-8 w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center hidden md:flex"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass rounded-2xl overflow-hidden card-hover"
              >
                {/* Top gradient */}
                <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />

                <div className="p-5 sm:p-6 md:p-8">
                  {/* Badge */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                      <GraduationCap size={14} />
                      2020 – 2024
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                      Graduated
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-text mb-2">
                    B.E. in Computer Science and Engineering
                  </h3>

                  {/* College */}
                  <p className="text-secondary font-medium text-base sm:text-lg mb-1">
                    Adithya Institute of Technology
                  </p>
                  <p className="text-muted text-xs sm:text-sm mb-4 flex items-center gap-1.5">
                    <MapPin size={14} />
                    Coimbatore, India • Affiliated to Anna University
                  </p>

                  {/* CGPA */}
                  <div className="glass rounded-xl p-3.5 sm:p-4 mb-5 sm:mb-6 flex sm:inline-flex items-center gap-4">
                    <div>
                      <p className="text-[11px] sm:text-xs text-muted uppercase tracking-wider">CGPA</p>
                      <p className="text-2xl sm:text-3xl font-bold gradient-text font-display">8.03</p>
                    </div>
                    <div className="w-px h-10 sm:h-12 bg-border" />
                    <div>
                      <p className="text-[11px] sm:text-xs text-muted uppercase tracking-wider">Batch</p>
                      <p className="text-base sm:text-lg font-semibold text-text">2020 – 2024</p>
                    </div>
                  </div>

                  {/* Relevant Coursework */}
                  <div>
                    <p className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2.5 sm:mb-3">
                      <BookOpen size={14} />
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-bg-card-hover/50 border border-border/50 text-[11px] sm:text-xs font-medium text-muted"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
