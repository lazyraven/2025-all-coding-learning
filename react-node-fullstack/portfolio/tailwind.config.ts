import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f8fafc',
        card: '#ffffff',
        primary: '#4f46e5',
        accent: '#9333ea',
      },
      boxShadow: {
        soft: '0 30px 80px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
