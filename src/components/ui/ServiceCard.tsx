import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import * as Icons from 'lucide-react';
import { buildContactHref } from '@/lib/contact-link';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const iconMap = Icons as unknown as Record<string, Icons.LucideIcon>;
  const Icon = iconMap[service.icon] ?? Icons.Wrench;
  const serviceContactHref = buildContactHref({
    leadSource: `services-${service.id}`,
    projectType: service.contactProjectType,
  });

  return (
    <div className={cn(
      "group relative flex flex-col p-8 md:p-10 bg-cream border border-sand/30 overflow-hidden transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5",
      className
    )}>
      {/* Top accent border that expands on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      
      <div className="w-12 h-12 flex items-center justify-center bg-charcoal text-accent mb-6 rounded-sm">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      
      <h3 className="font-display text-xl md:text-2xl text-charcoal mb-3 transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-steel text-sm md:text-base leading-relaxed">
        {service.description}
      </p>

      <div className="mt-6 border border-sand/40 bg-white/70 px-5 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-steel">
          Best fit
        </p>
        <p className="mt-2 text-sm leading-relaxed text-charcoal">{service.bestFit}</p>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-steel">
        {service.qualificationPrompt}
      </p>

      <div className="mt-8 pt-2">
        <Link
          href={serviceContactHref}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors duration-300 hover:text-accent"
        >
          <span>{service.ctaLabel}</span>
          <Icons.ArrowRight size={16} strokeWidth={1.8} />
        </Link>
      </div>
    </div>
  );
}
