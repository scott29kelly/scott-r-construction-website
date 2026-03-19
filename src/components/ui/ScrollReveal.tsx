'use client';

import React from 'react';
import { HTMLMotionProps, motion, useReducedMotion } from 'framer-motion';

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
  const shouldReduceMotion = useReducedMotion();
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={shouldReduceMotion ? undefined : { once, margin: '-10% 0px -12% 0px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
