import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

const BASE_URL = 'https://scottromconstruction.com';

export function Breadcrumbs({ items, variant = 'dark' }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  const isLight = variant === 'light';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className={isLight ? '' : 'mx-auto max-w-site px-[50px] pt-6 max-lg:px-6'}>
        <ol className={`flex items-center gap-2 text-btn-sm uppercase ${isLight ? 'text-white/50' : 'text-navy/50'}`}>
          {allItems.map((item, index) => (
            <React.Fragment key={item.label}>
              {index > 0 && <li aria-hidden="true">/</li>}
              <li>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`transition-colors ${isLight ? 'hover:text-white/80' : 'hover:text-navy/80'}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLight ? 'text-white/80' : 'text-navy/80'}>{item.label}</span>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
}
