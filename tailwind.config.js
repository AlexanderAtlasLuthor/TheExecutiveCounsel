/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        'gold-light': '#f4d03f',
        charcoal: '#1a1a1a',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Cinzel', 'Georgia', 'serif'],
        sans: ["'Montserrat'", "'Lato'", 'system-ui', 'sans-serif'],
        display: ["'Cinzel'", "'Playfair Display'", 'serif'],
      },
    },
  },
  plugins: [],
}
