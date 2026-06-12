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
        gold: '#D4AF37',
        'gold-light': '#D4AF37',
        black: '#000000',
        charcoal: '#0f0f0f',
        // Warm neutral grays (no blue tint) — pure black & gold palette
        gray: {
          50: '#faf9f7',
          100: '#f2f0ec',
          200: '#e3e0d9',
          300: '#cbc7bd',
          400: '#a8a399',
          500: '#827d73',
          600: '#5f5b53',
          700: '#403d38',
          800: '#26241f',
          900: '#161512',
          950: '#0c0b09',
        },
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
