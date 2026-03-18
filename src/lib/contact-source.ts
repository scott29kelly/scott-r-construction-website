/**
 * Normalizes lead-source values so CTA tags stay readable in the inbox and easy to expand later.
 */
export function formatLeadSource(source: string | undefined): string {
  if (!source) {
    return 'Direct contact section';
  }

  return source
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
