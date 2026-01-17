import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Akash-B23',
    color: 'hover:text-gray-300'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akashbmp',
    color: 'hover:text-blue-400'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:akashbalachandar.bmp@gmail.com',
    color: 'hover:text-purple-400'
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'akashbalachandar.bmp@gmail.com',
    href: 'mailto:akashbalachandar.bmp@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6380533114',
    href: 'tel:+916380533114'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, India',
    href: '#'
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed px-4">
          I'm always open to discussing new projects, internship opportunities, or collaboration on exciting ideas. 
          Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-left"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Contact Info</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all ${info.href !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Icon className="w-5 h-5 text-purple-400" style={{ width: '20px', height: '20px' }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">{info.label}</p>
                      <p className="text-sm sm:text-base text-white break-words">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Social Links</h3>
            
            <div className="flex flex-col gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${social.color}`}
                  >
                    <Icon className="w-6 h-6" style={{ width: '24px', height: '24px' }} />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>

            <motion.a
              href="mailto:akashbalachandar.bmp@gmail.com"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
