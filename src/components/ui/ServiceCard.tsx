import React from 'react';
import { Service } from '@/types';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  // Dynamically load icon
  const Icon = (Icons as any)[service.icon] || Icons.Wrench;

  return (
    <div className={cn(
      "group relative p-8 md:p-10 bg-cream border border-sand/30 overflow-hidden transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5",
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
    </div>
  );
}
