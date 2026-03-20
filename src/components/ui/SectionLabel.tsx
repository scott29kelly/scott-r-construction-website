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
        'mb-6 inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.24em]',
        light ? 'text-accent-light' : 'text-accent',
        className
      )}
    >
      <span className="h-px w-8 bg-current opacity-70" />
      <span
        className={cn(
          'border px-3 py-2',
          light ? 'border-white/12 bg-white/5' : 'border-sand/35 bg-white/55'
        )}
      >
        {children}
      </span>
    </div>
  );
}
