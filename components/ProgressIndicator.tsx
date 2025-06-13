'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface ProgressIndicatorProps {
  scrollYProgress: MotionValue<number>;
}

export default function ProgressIndicator({ scrollYProgress }: ProgressIndicatorProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}