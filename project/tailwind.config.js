/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        navy: {
          900: '#0a1628',
          800: '#0d1f3c',
          700: '#112240',
        },
      },
    },
  },
  plugins: [],
};
