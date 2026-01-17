import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Intern',
    company: 'ImagiNET Ventures',
    period: 'Nov 2024 - Dec 2024',
    location: 'Chennai, India',
    description: 'Worked on full-stack development tasks, contributing to the design and implementation of web applications.',
    achievements: [
      'Worked on full-stack development tasks, contributing to the design and implementation of web applications.'
    ],
    tech: ['ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB', 'Git']
  },
  {
    title: 'EDI Intern',
    company: 'Flextronics Technologies India Pvt. Ltd.',
    period: 'Jun 2024 - Jun 2024',
    location: 'Chennai, India',
    description: 'Gained hands-on experience with Electronic Data Interchange (EDI) processes, including implementing and managing EDIFACT standards.',
    achievements: [
      'Gained hands-on experience with Electronic Data Interchange (EDI) processes, including implementing and managing EDIFACT standards.'
    ],
    tech: ['EDI', 'EDIFACT']
  }
];

const certifications = [
  { name: 'Basics of Python', issuer: 'Infosys Springboard', year: '2023' },
  { name: 'Mern Stack Full Guide', issuer: 'Udemy', year: '2024' },
  { name: 'Networking Essentials', issuer: 'Cisco Networking Academy', year: '2024' },
  { name: 'Cybersecurity Essentials', issuer: 'Cisco Networking Academy', year: '2023' },
  { name: 'IBM - Python 101 for Data Science', issuer: 'IBM', year: '2023' }
];

const achievements = [
  { title: 'Electrothon IEEE Finalist', year: '2024' },
  { title: 'Runner Up in Adya AI Hackathon 2025', year: '2025' },
  { title: 'SIH 25 Finalist', year: '2025' }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Work <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full ring-4 ring-black z-10"></div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 group hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-2 sm:gap-3 mb-3">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" style={{ width: '20px', height: '20px' }} />
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 break-words">
                          {exp.title}
                        </h3>
                        <p className="text-sm sm:text-base text-purple-400 font-medium break-words">{exp.company}</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">{exp.period} | {exp.location}</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 mb-4">{exp.description}</p>
                    <ul className={`space-y-2 text-xs sm:text-sm text-gray-400 mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-400 shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-start sm:justify-end">
                      {exp.tech.map(tech => (
                        <span key={tech} className="px-2 py-0.5 sm:px-2 sm:py-1 text-xs bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Certifications</h3>
            <div className="space-y-3 sm:space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-purple-500/30 pl-3 sm:pl-4 hover:border-purple-400 transition-colors">
                  <p className="text-sm sm:text-base text-white font-medium break-words">{cert.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Achievements</h3>
            <div className="space-y-3 sm:space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="border-l-2 border-blue-500/30 pl-3 sm:pl-4 hover:border-blue-400 transition-colors">
                  <p className="text-sm sm:text-base text-white font-medium break-words">{achievement.title}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{achievement.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
