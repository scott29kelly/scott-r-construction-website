import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'mb-5 inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em]',
        light ? 'text-accent-light' : 'text-accent',
        className
      )}
    >
      <span
        className={cn(
          'h-px w-10 bg-current opacity-80',
          light ? 'text-accent-light' : 'text-accent'
        )}
      />
      {children}
    </div>
  );
}
