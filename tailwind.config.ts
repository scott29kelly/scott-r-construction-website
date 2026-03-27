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
        charcoal: '#2e2e2e',
        'warm-black': '#242424',
        slate: '#454545',
        concrete: '#525252',
        steel: '#6b6b6b',
        ash: '#9a9a9a',
        sand: '#c4b5a0',
        'warm-sand': '#d4c4ad',
        cream: '#f8f6f3',
        white: '#fafaf8',
        accent: '#b08d57',
        'accent-light': '#cbae80',
        'accent-dark': '#8c6f42',
        'star-gold': '#f2ca46',
        'star-empty': '#c4b5a0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        site: '1400px',
        'content-sm': '520px',
        'content-md': '640px',
        'content-lg': '720px',
        'content-xl': '800px',
        'content-2xl': '900px',
        'content-3xl': '1100px',
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
        'hero-headline': ['clamp(38px, 5vw + 20px, 90px)', { lineHeight: 'clamp(44px, 5.5vw + 22px, 99px)', letterSpacing: '0' }],
        'section-heading': ['clamp(30px, 3.5vw + 10px, 59.2px)', { lineHeight: 'clamp(34px, 3.5vw + 12px, 59.2px)', letterSpacing: '0.592px' }],
        'card-heading': ['clamp(24px, 2vw + 8px, 32px)', { lineHeight: 'clamp(32px, 2.4vw + 10px, 38.4px)', letterSpacing: '0' }],
        'sub-heading': ['clamp(28px, 2.5vw + 10px, 41.6px)', { lineHeight: 'clamp(34px, 3vw + 10px, 49.92px)', letterSpacing: '0' }],
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
