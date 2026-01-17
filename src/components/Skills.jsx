import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Database, Cloud, Workflow, Shield } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, accessible interfaces with modern frameworks'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Designing scalable APIs and robust server architectures'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful user experiences'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Deploying and managing applications on AWS, Azure, GCP'
  },
  {
    icon: Workflow,
    title: 'DevOps & CI/CD',
    description: 'Automating workflows and ensuring smooth deployments'
  },
  {
    icon: Shield,
    title: 'Security Best Practices',
    description: 'Implementing secure coding standards and data protection'
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 group cursor-default"
              >
                <div className="mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
