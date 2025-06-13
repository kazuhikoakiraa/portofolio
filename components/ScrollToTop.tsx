'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  scrollTo: (elementId: string) => void;
}

export default function ScrollToTop({ scrollTo }: ScrollToTopProps) {
  return (
    <motion.button
      onClick={() => scrollTo('home')}
      className="fixed bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-40 border border-white/20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
}