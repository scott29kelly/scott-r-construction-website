import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0b1531',
        cream: '#fbfaf7',
        'light-gray': '#f3f3f3',
        border: '#d9d9d9',
        'text-dark': '#0f0f0f',
        'text-body': '#0b1531',
        'text-muted': '#555555',
        'star-gold': '#f2ca46',
        'star-empty': '#ccd6df',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        site: '1400px',
      },
      spacing: {
        'section-x': '50px',
        'section-y': '100px',
        'card-pad': '35px',
      },
      letterSpacing: {
        nav: '1.625px',
        label: '2px',
      },
      fontSize: {
        'hero-headline': ['90px', { lineHeight: '99px', letterSpacing: '0' }],
        'section-heading': ['59.2px', { lineHeight: '59.2px', letterSpacing: '0.592px' }],
        'card-heading': ['32px', { lineHeight: '38.4px', letterSpacing: '0' }],
        'sub-heading': ['41.6px', { lineHeight: '49.92px', letterSpacing: '0' }],
        'body-lg': ['19.2px', { lineHeight: '28.8px', letterSpacing: '0.384px' }],
        'body-sm': ['17.6px', { lineHeight: '26.4px', letterSpacing: '0.352px' }],
        'nav-link': ['13px', { lineHeight: '15.6px', letterSpacing: '1.625px' }],
        'btn': ['13px', { lineHeight: '15.6px', letterSpacing: '1.625px' }],
        'btn-sm': ['12px', { lineHeight: '13.2px', letterSpacing: '1.5px' }],
        'label': ['14.4px', { lineHeight: '18.72px', letterSpacing: '2px' }],
        'intro': ['24px', { lineHeight: '1.5', letterSpacing: '0' }],
      },
      borderWidth: {
        thin: '0.667px',
      },
    },
  },
  plugins: [],
};

export default config;
