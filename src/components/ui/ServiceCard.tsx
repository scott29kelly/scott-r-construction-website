import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { Service } from '@/types';
import { buildContactHref } from '@/lib/contact-link';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
  index?: number;
}

export function ServiceCard({ service, className, index = 0 }: ServiceCardProps) {
  const iconMap = Icons as unknown as Record<string, Icons.LucideIcon>;
  const Icon = iconMap[service.icon] ?? Icons.Wrench;
  const serviceContactHref = buildContactHref({
    leadSource: `services-${service.id}`,
    projectType: service.contactProjectType,
  });
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className={cn('site-panel group flex h-full flex-col p-7 md:p-8', className)}>
      <div className="flex items-start justify-between gap-5">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
            Service {formattedIndex}
          </span>
          <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-steel">
            Owner-led planning + execution
          </p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/20 bg-accent/10 text-accent transition-transform duration-500 group-hover:-translate-y-1">
          <Icon size={24} strokeWidth={1.6} />
        </div>
      </div>

      <h3 className="mt-8 font-display text-3xl leading-tight text-charcoal">
        {service.title}
      </h3>

      <p className="mt-4 text-base leading-relaxed text-steel">{service.description}</p>

      <div className="mt-6 border border-sand/30 bg-white/55 px-5 py-4">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
          Best fit
        </p>
        <p className="mt-2 text-sm leading-relaxed text-charcoal">{service.bestFit}</p>
      </div>

      <div className="mt-5 border-t border-sand/20 pt-5">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
          Helpful for the first call
        </p>
        <p className="mt-2 flex-grow text-sm leading-relaxed text-steel">
          {service.qualificationPrompt}
        </p>
      </div>

      <div className="mt-8 border-t border-sand/25 pt-5">
        <Link
          href={serviceContactHref}
          className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-charcoal transition-colors duration-300 hover:text-accent"
        >
          <span>{service.ctaLabel}</span>
          <Icons.ArrowRight size={16} strokeWidth={1.8} />
        </Link>
      </div>
    </div>
  );
}
