import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'saddle-brown': '#8B4513',
        earth: {
          50: '#FAF8F3',
          100: '#F5F1E7',
          200: '#E8DFC7',
          300: '#DBCDA7',
          400: '#C1A967',
          500: '#D4AF37',
          600: '#B8962E',
          700: '#8B7123',
          800: '#5E4C18',
          900: '#31260C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
