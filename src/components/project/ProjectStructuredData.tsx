import { SITE_INFO } from '@/content';
import type { ProjectCaseStudy } from '@/types';

interface ProjectStructuredDataProps {
  project: ProjectCaseStudy;
}

export function ProjectStructuredData({ project }: ProjectStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${project.title} — ${project.location}`,
    description: project.summary,
    image: project.images.map(
      (img) => `https://scottromconstruction.com${img.src}`
    ),
    author: {
      '@type': 'Organization',
      name: SITE_INFO.name,
    },
    locationCreated: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.location.split(',')[0]?.trim(),
        addressRegion: project.location.split(',')[1]?.trim(),
      },
    },
    url: `https://scottromconstruction.com/portfolio/${project.id}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
