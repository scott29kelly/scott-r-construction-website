interface ContactHrefOptions {
  leadSource: string;
  projectType?: string;
}

/**
 * Keeps estimate CTA routing consistent as the site moves from section anchors to dedicated pages.
 */
export function buildContactHref({ leadSource, projectType }: ContactHrefOptions): string {
  const searchParams = new URLSearchParams();
  searchParams.set('leadSource', leadSource);

  if (projectType) {
    searchParams.set('projectType', projectType);
  }

  return `/contact?${searchParams.toString()}#contact`;
}
