/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#080e1a',
          dark: '#080e1a',
        },
        gold: {
          DEFAULT: '#C6A75E',
          light: '#D4BA7A',
          dark: '#B8964A',
        },
        platinum: {
          DEFAULT: '#E5E4E2',
          light: '#F5F5F5',
          dark: '#C9C8C6',
        },
        steel: {
          DEFAULT: '#8B9DC3',
          light: '#A8B5D1',
          dark: '#6B7A9E',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(120deg, transparent 0%, rgba(198, 167, 94, 0.1) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
