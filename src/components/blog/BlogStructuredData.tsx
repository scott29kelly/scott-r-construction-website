import type { BlogPost } from '@/types';

interface BlogStructuredDataProps {
  post: BlogPost;
}

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.publishedDate,
    publisher: {
      '@type': 'Organization',
      name: 'Scott Romanoski Construction',
      url: 'https://scottromconstruction.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://scottromconstruction.com/blog/${post.id}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
