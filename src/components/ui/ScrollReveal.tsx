'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const VARIANTS = {
  'fade-up': {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  'fade-up-sm': {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
  },
} as const;

const TRANSITION = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  className,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const v = VARIANTS[variant];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...TRANSITION, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollRevealGroup({
  children,
  className,
}: ScrollRevealGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
