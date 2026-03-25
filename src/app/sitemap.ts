import type { MetadataRoute } from 'next';
import { BLOG_POSTS, SERVICE_DETAILS, PROJECT_CASE_STUDIES } from '@/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about', '/portfolio', '/process', '/contact', '/testimonials'];
  const lastModified = new Date('2026-03-24');

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
    {
      url: 'https://scottromconstruction.com/blog',
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...BLOG_POSTS.map((post) => ({
      url: `https://scottromconstruction.com/blog/${post.id}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
}
