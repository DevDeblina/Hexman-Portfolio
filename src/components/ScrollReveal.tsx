import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'fadeIn';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = ''
}: ScrollRevealProps) {
  
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      variants={selectedAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
}
