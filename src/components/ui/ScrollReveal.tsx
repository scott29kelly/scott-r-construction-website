'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.7,
  className,
  once = true,
  ...props
}: ScrollRevealProps) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Elegant ease-out cubic
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
