import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about', '/portfolio', '/process', '/contact'];
  const lastModified = new Date();

  return [
    ...routes.map((route, index) => ({
      url: `https://scottromconstruction.com${route}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: index === 0 ? 1 : 0.8,
    })),
  ];
}
