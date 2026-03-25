import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/ui/PageHero';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BLOG_POSTS } from '@/content';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical advice for Bucks County homeowners — remodeling tips, project planning guides, and insights from an experienced local contractor.',
};

export default function BlogPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <PageHero
        eyebrow="Blog"
        title="Practical guidance for homeowners planning their next project."
        description="Tips, timelines, and honest advice from an owner-led contractor who has seen what works and what does not."
        leadSource="blog-page-hero"
        chips={['Remodeling tips', 'Project planning', 'Local expertise']}
        heroImage="/images/Projects/kitchen-2019/peninsula-wide-view.jpg"
      />

      <ScrollReveal>
      <section className="bg-cream section-padding">
        <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group border border-border bg-white p-[35px] transition-all duration-300 hover:border-navy/30 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <p className="text-btn-sm uppercase text-navy/50">
                  {post.category}
                </p>
                <h2 className="mt-3 font-display text-card-heading text-navy">
                  {post.title}
                </h2>
                <p className="mt-3 text-body-sm text-navy/70">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <time
                    dateTime={post.publishedDate}
                    className="text-btn-sm text-navy/40"
                  >
                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="flex items-center gap-1 text-btn-sm uppercase text-navy/60 transition-colors group-hover:text-navy">
                    Read More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
        <PageClosingCTA
        eyebrow="Ready to start your project?"
        title="Share your project goals and Scott will follow up with practical next steps."
        description="Include the room or area, your timing window, and what is driving the project to get the most useful first reply."
        leadSource="blog-page-cta"
      />
      </ScrollReveal>
    </SiteShell>
  );
}
