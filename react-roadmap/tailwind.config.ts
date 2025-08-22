import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8ea0ff',
        accent: '#35d186',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.35)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config
