import { motion } from 'framer-motion';
import { User, Rocket } from 'lucide-react';
import { PersonalData } from '../types';

interface HeroSectionProps {
  personalData: PersonalData;
  parallaxY: any;
  scrollTo: (elementId: string) => void;
}

export default function HeroSection({ personalData, parallaxY, scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          className="mb-8 mx-auto w-64 h-64 rounded-full border border-white/20 overflow-hidden bg-gradient-to-br from-white/10 to-white/5 relative"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Rotating border effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ 
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "xor"
            }}
          />
          
          {personalData.image ? (
            <motion.img 
              src={personalData.image} 
              alt={personalData.name}
              className="w-full h-full object-cover relative z-10"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center">
                      <svg class="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-12 h-12 text-white/70" />
            </div>
          )}
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl font-light mb-6 text-white tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {personalData.name.split(' ').map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                color: "#60a5fa",
                textShadow: "0 0 20px rgba(96, 165, 250, 0.5)"
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
          className="text-lg md:text-xl text-gray-400 mb-8 font-light overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {personalData.title}
          </motion.p>
        </motion.div>
        
        <motion.button
          onClick={() => scrollTo('about')}
          className="group px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
          />
          <span className="relative z-10 flex items-center space-x-2">
            <span>Explore My Work</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Rocket className="w-4 h-4" />
            </motion.div>
          </span>
        </motion.button>
      </div>
    </section>
  );
}