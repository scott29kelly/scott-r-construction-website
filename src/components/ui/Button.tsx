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
        'border-accent bg-accent text-warm-black shadow-[0_18px_40px_rgb(var(--accent)/0.18)] hover:-translate-y-0.5 hover:border-accent-light hover:bg-accent-light hover:shadow-[0_22px_44px_rgb(var(--accent)/0.24)]',
      secondary:
        'border-sand/38 bg-white/78 text-charcoal shadow-[0_14px_30px_rgb(var(--warm-black)/0.06)] hover:-translate-y-0.5 hover:border-accent/65 hover:bg-white hover:text-charcoal',
      dark:
        'border-white/12 bg-charcoal text-cream shadow-[0_20px_44px_rgb(var(--warm-black)/0.2)] hover:-translate-y-0.5 hover:border-warm-sand/40 hover:bg-slate hover:text-white',
      outline:
        'border-charcoal/14 bg-transparent text-charcoal hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/72 hover:text-accent',
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
