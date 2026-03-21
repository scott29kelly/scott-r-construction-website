import { PROJECT_CASE_STUDIES } from '@/content';
import type { ProjectCaseStudy } from '@/types';

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECT_CASE_STUDIES.find((p) => p.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECT_CASE_STUDIES.map((p) => p.id);
}

export function getAdjacentProjects(slug: string): {
  prev: ProjectCaseStudy | null;
  next: ProjectCaseStudy | null;
} {
  const index = PROJECT_CASE_STUDIES.findIndex((p) => p.id === slug);
  if (index === -1) return { prev: null, next: null };

  const total = PROJECT_CASE_STUDIES.length;
  const prev = PROJECT_CASE_STUDIES[(index - 1 + total) % total];
  const next = PROJECT_CASE_STUDIES[(index + 1) % total];

  return { prev, next };
}
