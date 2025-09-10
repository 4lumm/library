/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefef9',
          100: '#fdfcf1',
          200: '#faf7e3',
          300: '#f5f0cd',
          400: '#ede4a8',
          500: '#e3d380',
          600: '#d4bf5c',
          700: '#b8a142',
          800: '#967f38',
          900: '#7a6530'
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif']
      },
      boxShadow: {
        'book': '0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15)',
        'book-hover': '0 8px 16px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};