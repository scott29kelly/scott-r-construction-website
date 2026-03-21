import type { MetadataRoute } from 'next';
import { SERVICE_DETAILS } from '@/content';
import { PROJECT_CASE_STUDIES } from '@/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about', '/portfolio', '/process', '/contact', '/testimonials'];
  const lastModified = new Date();

  return [
    ...routes.map((route, index) => ({
      url: `https://scottromconstruction.com${route}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: index === 0 ? 1 : 0.8,
    })),
    ...SERVICE_DETAILS.map((service) => ({
      url: `https://scottromconstruction.com/services/${service.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...PROJECT_CASE_STUDIES.map((project) => ({
      url: `https://scottromconstruction.com/portfolio/${project.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
