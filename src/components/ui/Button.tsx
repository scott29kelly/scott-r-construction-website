import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', asChild = false, children, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none border font-mono font-bold uppercase tracking-[0.18em] transition-all duration-500 ease-out disabled:pointer-events-none disabled:opacity-60';

    const variants = {
      primary:
        'border-accent bg-accent text-warm-black shadow-[0_16px_32px_rgb(var(--accent)/0.16)] hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_20px_40px_rgb(var(--accent)/0.2)]',
      secondary:
        'border-sand/35 bg-white/72 text-charcoal hover:-translate-y-0.5 hover:border-accent hover:bg-white hover:text-charcoal',
      dark:
        'border-charcoal bg-charcoal text-cream hover:-translate-y-0.5 hover:bg-slate hover:text-white',
      outline:
        'border-charcoal/16 bg-white/55 text-charcoal hover:-translate-y-0.5 hover:border-accent hover:bg-white hover:text-accent',
    };

    const sizes = {
      sm: 'px-4 py-3 text-[10px]',
      md: 'px-6 py-4 text-[11px]',
      lg: 'px-8 py-5 text-[11px] md:text-xs',
    };

    const buttonClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement<{ className?: string }>(children)) {
      return React.cloneElement(children, {
        className: cn(buttonClassName, children.props.className),
      });
    }

    return (
      <button ref={ref} className={buttonClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
