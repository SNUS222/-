import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0B14'
      },
      backgroundImage: {
        primaryGradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)'
      },
      boxShadow: {
        glass: '0 8px 32px rgba(31, 38, 135, 0.25)'
      }
    }
  },
  plugins: []
} satisfies Config;
