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
          light: '#C5A059',
          DEFAULT: '#8F6C2C',
          dark: '#6E501C',
        },
        charcoal: {
          light: '#3C3C3C',
          DEFAULT: '#222222',
          dark: '#141414',
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
