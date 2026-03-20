export interface NavigationLink {
  name: string;
  href: string;
}

export const PRIMARY_NAV_LINKS: NavigationLink[] = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Process', href: '/process' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/contact' },
];
