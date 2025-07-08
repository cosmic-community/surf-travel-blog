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
        'ocean-blue': '#0080ff',
        'ocean-teal': '#4ecdc4',
        'sunset-orange': '#ff6b35',
        'sandy-beige': '#f7931e',
        'wave-foam': '#f8fafc',
        'deep-blue': '#1e3a8a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'wave': '0 4px 6px -1px rgba(0, 128, 255, 0.1), 0 2px 4px -1px rgba(0, 128, 255, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;