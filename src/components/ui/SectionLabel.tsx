import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase mb-4', light ? 'text-accent-light' : 'text-accent', className)}>
      <span className={cn('w-6 h-px', light ? 'bg-accent-light' : 'bg-accent')} />
      {children}
    </div>
  );
}
