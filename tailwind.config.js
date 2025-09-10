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
        },
        gold: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        },
        'rose-gold': {
          400: '#e8b4b8',
          500: '#d4a5a9'
        },
        silver: {
          300: '#d1d5db',
          400: '#9ca3af'
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif']
      },
      boxShadow: {
        'book': '0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15)',
        'book-hover': '0 8px 16px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.25)',
        'luxury': '0 4px 8px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.05)',
        'deep': '0 8px 16px rgba(0, 0, 0, 0.2), 0 16px 32px rgba(0, 0, 0, 0.15), 0 32px 64px rgba(0, 0, 0, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(255, 215, 0, 0.1)',
        'golden': '0 0 20px rgba(255, 215, 0, 0.2), 0 0 40px rgba(255, 215, 0, 0.1), inset 0 0 20px rgba(255, 215, 0, 0.05)'
      },
      borderWidth: {
        '3': '3px',
        '6': '6px'
      },
      animation: {
        'book-glow': 'book-glow 3s ease-in-out infinite',
        'book-hover-lift': 'book-hover-lift 0.3s ease-out forwards',
        'book-settle': 'book-settle 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'page-flip-open': 'page-flip-open 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'modal-backdrop-fade': 'modal-backdrop-fade 0.4s ease-out forwards',
        'gentle-bounce': 'gentle-bounce 2s infinite',
        'shimmer': 'shimmer 3s infinite'
      }
    },
  },
  plugins: [],
};