import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./{html,js}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'rgba(var(--color-primary))',
      },
      background: {
        DEFAULT: 'rgba(var(--color-background))',
      },
      foreground: {
        DEFAULT: 'rgba(var(--color-foreground))',
      },
      accent: {
        DEFAULT: 'rgba(var(--color-accent))',
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-firstland)'],
      },
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
};
export default config
