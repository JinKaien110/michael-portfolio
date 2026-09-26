/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#f7f7f5',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
