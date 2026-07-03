/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          light: '#FDFBF7',
          DEFAULT: '#FAF6F0',
          dark: '#E2D9CB',
        },
        maroon: {
          light: '#A02B3E',
          DEFAULT: '#7A0A1E',
          dark: '#540310',
        },
        gold: {
          light: '#E6C687',
          DEFAULT: '#C5A059',
          dark: '#A37E39',
        },
        charcoal: {
          light: '#555555',
          DEFAULT: '#2D2D2D',
          dark: '#1F1F1F',
        }
      },
      fontFamily: {
        serif: ['"Noto Serif Devanagari"', 'serif'],
        sans: ['"Hind"', '"Noto Sans Devanagari"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
