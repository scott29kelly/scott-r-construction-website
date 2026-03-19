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
        charcoal: 'rgb(var(--charcoal) / <alpha-value>)',
        'warm-black': 'rgb(var(--warm-black) / <alpha-value>)',
        slate: 'rgb(var(--slate) / <alpha-value>)',
        concrete: 'rgb(var(--concrete) / <alpha-value>)',
        steel: 'rgb(var(--steel) / <alpha-value>)',
        ash: 'rgb(var(--ash) / <alpha-value>)',
        sand: 'rgb(var(--sand) / <alpha-value>)',
        'warm-sand': 'rgb(var(--warm-sand) / <alpha-value>)',
        cream: 'rgb(var(--cream) / <alpha-value>)',
        white: 'rgb(var(--white) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          light: 'rgb(var(--accent-light) / <alpha-value>)',
          dark: 'rgb(var(--accent-dark) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
