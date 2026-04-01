'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface AnimatedValueProps {
  value: string;
}

export function AnimatedValue({ value }: AnimatedValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  // Parse numeric prefix: "18+" → { num: 18, suffix: "+" }
  const match = value.match(/^(\d+)(.*)/);
  const hasNumber = !!match;
  const target = hasNumber ? parseInt(match![1], 10) : 0;
  const suffix = hasNumber ? match![2] : '';

  useEffect(() => {
    if (!hasNumber || !isInView || shouldReduceMotion) {
      setDisplay(value);
      return;
    }

    const duration = 1500;
    const start = performance.now();
    let rafId: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [isInView, hasNumber, target, suffix, value, shouldReduceMotion]);

  return <span ref={ref}>{display}</span>;
}
