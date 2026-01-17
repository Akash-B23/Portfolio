import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techStack = [
    'Python', 'C++', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'PostgreSQL', 'MySQL', 'HTML5', 'CSS3', 'Tailwind CSS',
    'Git', 'GitHub', 'VS Code', 'npm'
  ];

  const competitiveProgramming = [
    { platform: 'LeetCode', achievement: '1600+ Rating | 577 Problems Solved' },
    { platform: 'CodeChef', achievement: 'Max Rating: 1330' },
    { platform: 'Codeforces', achievement: 'Max Rating: 891' }
  ];

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          About <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">My Journey</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                I'm currently pursuing my BTech in Information Technology at Chennai Institute of Technology 
                with a CGPA of 8.2. As a passionate full-stack developer, I specialize in building scalable 
                web applications using modern technologies like React, Node.js, and Express.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                I've gained valuable industry experience through internships at ImagiNET Ventures and 
                Flextronics Technologies India Pvt. Ltd., where I worked on full-stack development and EDI processes. 
                My expertise spans across frontend frameworks, backend architectures, and database management.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Beyond development, I'm an active competitive programmer with strong ratings on LeetCode, 
                CodeChef, and Codeforces. I love solving algorithmic challenges and continuously improving 
                my problem-solving skills.
              </p>
            </div>

            {/* Competitive Programming Stats */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-4">Competitive Programming</h3>
              <div className="space-y-3">
                {competitiveProgramming.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                    <span className="text-gray-300 font-medium text-sm sm:text-base">{item.platform}</span>
                    <span className="text-xs sm:text-sm text-gray-400">{item.achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-xs sm:text-sm font-medium cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Education */}
            <div className="mt-6 sm:mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-4">Education</h3>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">BTech Information Technology</p>
                <p className="text-gray-400 text-xs sm:text-sm">Chennai Institute of Technology</p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm text-gray-500">2023 - Present</span>
                  <span className="text-xs sm:text-sm text-purple-400 font-medium">CGPA: 8.2</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
