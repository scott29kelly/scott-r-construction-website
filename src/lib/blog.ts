import { BLOG_POSTS } from '@/content/blog';

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.id === slug) ?? null;
}

export function getAllBlogSlugs() {
  return BLOG_POSTS.map((post) => post.id);
}
