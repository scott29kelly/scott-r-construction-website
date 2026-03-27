import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
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

      <ScrollReveal>
      <article className="bg-white section-padding">
        <div className="mx-auto max-w-content-xl section-padding-x">
          {/* Header */}
          <div className="border-b border-sand/30 pb-8">
            <p className="text-btn-sm uppercase text-ash">{post.category}</p>
            <h1 className="mt-3 font-display text-section-heading text-charcoal">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-body-sm text-ash">
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
                  <h2 className="mb-4 font-display text-intro text-charcoal">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="mt-3 text-body-lg leading-relaxed text-concrete first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>
      </ScrollReveal>
      </div>

      <ScrollReveal>
        <PageClosingCTA
        eyebrow="Ready to start your project?"
        title="Share your project goals and Scott will follow up with practical next steps."
        description="Include the room or area, your timing window, and what is driving the project to get the most useful first reply."
        leadSource={`blog-${post.id}-cta`}
      />
      </ScrollReveal>
    </SiteShell>
  );
}
