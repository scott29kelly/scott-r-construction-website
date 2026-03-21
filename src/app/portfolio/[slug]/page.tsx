import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECT_CASE_STUDIES } from '@/content';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { ProjectHero } from '@/components/project/ProjectHero';
import { ProjectNarrative } from '@/components/project/ProjectNarrative';
import { ProjectGallery } from '@/components/project/ProjectGallery';
import { ProjectNavigation } from '@/components/project/ProjectNavigation';
import { ProjectStructuredData } from '@/components/project/ProjectStructuredData';
import { getProjectBySlug, getAdjacentProjects } from '@/lib/projects';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECT_CASE_STUDIES.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.location}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Scott Romanoski Construction`,
      description: project.summary,
      url: `https://scottromconstruction.com/portfolio/${project.id}`,
      images: [
        {
          url: `https://scottromconstruction.com${project.image}`,
          width: 1200,
          height: 630,
          alt: project.imageAlt,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <SiteShell>
      <ProjectStructuredData project={project} />
      <ProjectHero project={project} />
      <ProjectNarrative project={project} />
      <ProjectGallery images={project.images} />
      <ProjectNavigation prev={prev} next={next} />
      <PageClosingCTA
        eyebrow="Inspired by this project?"
        title="Share your goals and Scott will follow up with practical next steps."
        description="Include the room or area, your timing window, and what is driving the project to get the most useful first reply."
        leadSource={`project-detail-${project.id}-cta`}
        projectType={project.serviceId}
      />
    </SiteShell>
  );
}
