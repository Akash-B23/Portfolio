import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const roles = ['Full Stack Developer', 'Competitive Programmer', 'BTech IT Student', 'Problem Solver'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-[128px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Akash B</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 h-16 flex items-center justify-center"
        >
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light"
            key={roles[0]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {roles[0]}
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          BTech IT Student at Chennai Institute of Technology with expertise in full-stack development 
          and competitive programming. Passionate about building scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            View My Work
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://github.com/Akash-B23" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border-2 border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 flex items-center gap-2">
            <Download className="w-5 h-5" />
            View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
