import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CURRICULUM ORIENTED ANALYSIS MODULE',
    description: 'A web-based platform focuses in streamlining tasks involved in regulation-wise curriculum analysis. Improved insights via implementation of analytical and graphical visualization across regulations.',
    image: 'https://picsum.photos/seed/curriculum/800/600',
    tags: ['ReactJs', 'NodeJs', 'PostgreSQL', 'ExpressJs'],
    github: 'https://github.com/Akash-B23/Akash_CTT_AI',
    demo: '#',
    period: 'Nov 2024 - Jan 2025'
  },
  {
    title: 'AI-BASED CENTRALIZED IT TICKETING SYSTEM',
    description: 'Designed an AI-driven centralized ticketing system to unify IT tickets raised via chatbot, email, and existing platforms such as GLPI and Solman. Implemented NLP-based automated ticket classification and intelligent routing based on issue context, urgency. Enabled AI-powered self-service resolution for common IT issues and integrated knowledge base recommendations with configurable email and SMS alerts.',
    image: 'https://picsum.photos/seed/ticketing/800/600',
    tags: ['Express Js', 'PostgreSQL', 'NextJs', 'Tailwind'],
    github: 'https://github.com/Akash-B23',
    demo: '#',
    period: 'Nov 2025 - Dec 2025'
  },
  {
    title: 'MCP (Model Context Protocol) SERVER SUITE',
    description: 'Developed a modular, multi-language suite of MCP-compliant servers enabling standardized, secure, and scalable integration between LLMs and external tools/services (e.g., QuickBooks, Dart, DataRobot, Notion, DockerHub). Automated validation, execution, and error-handling pipelines for AI-driven tool invocation, improving reliability.',
    image: 'https://picsum.photos/seed/mcp/800/600',
    tags: ['Python'],
    github: 'https://github.com/Akash-B23',
    demo: '#',
    period: 'May 2025 - June 2025'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1 sm:gap-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 break-words">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap sm:ml-2">{project.period}</span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed text-xs sm:text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
