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
        charcoal: '#0C0C0C', // True deep onyx
        'warm-black': '#1A1A1A', // Softer black
        slate: '#333333',
        concrete: '#737373',
        steel: '#A3A3A3',
        ash: '#D4D4D4',
        sand: '#E6E1DA', // More sophisticated greige
        'warm-sand': '#F0EBE1', // Lighter elegant greige
        cream: '#FDFBF7', // Ultra high-end, gallery white
        white: '#FFFFFF',
        accent: '#C5A880', // Refined, softer aged brass/gold
        'accent-light': '#DBCBA0',
        'accent-dark': '#9A7D55',
        'star-gold': '#D4AF37', // True metallic gold
        'star-empty': '#E6E1DA',
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
        'section-x': 'clamp(20px, 5vw, 50px)',
        'section-y': 'clamp(60px, 10vw, 100px)',
        'card-pad': 'clamp(24px, 4vw, 35px)',
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
