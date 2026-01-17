import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImage from '../assets/pfp.jpeg';

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
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-left space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-purple-400 font-semibold text-lg sm:text-xl mb-2">HEY THERE!</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                I AM <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">AKASH B</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                {roles[0]}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              BTech IT Student at Chennai Institute of Technology with expertise in full-stack development 
              and competitive programming. Passionate about building scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-fit">
                See My Work
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://github.com/Akash-B23" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border-2 border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 flex items-center justify-center gap-2 w-fit">
                <Download className="w-5 h-5" />
                View GitHub
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-3xl blur-2xl opacity-30"></div>
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2">
                <img
                  src={profileImage}
                  alt="Akash B"
                  className="relative w-full h-auto rounded-3xl object-cover shadow-2xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
