import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BlogStructuredData } from '@/components/blog/BlogStructuredData';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Scott Romanoski Construction`,
      description: post.description,
      url: `https://scottromconstruction.com/blog/${post.id}`,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <SiteShell>
      <BlogStructuredData post={post} />
      <div className="pt-28 md:pt-36">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

      <article className="bg-white section-padding">
        <div className="mx-auto max-w-[800px] px-[50px] max-lg:px-6">
          {/* Header */}
          <div className="border-b border-border pb-8">
            <p className="text-btn-sm uppercase text-navy/50">{post.category}</p>
            <h1 className="mt-3 font-display text-section-heading text-navy max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-body-sm text-navy/50">
              <span>{post.author}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-10 space-y-8">
            {post.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h2 className="mb-4 font-display text-[24px] leading-[30px] text-navy">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="mt-3 text-body-lg leading-relaxed text-navy/70 first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>
      </div>

      <PageClosingCTA
        eyebrow="Ready to start your project?"
        title="Share your project goals and Scott will follow up with practical next steps."
        description="Include the room or area, your timing window, and what is driving the project to get the most useful first reply."
        leadSource={`blog-${post.id}-cta`}
      />
    </SiteShell>
  );
}
