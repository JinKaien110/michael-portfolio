/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#08090D',
        paper: '#10121A',
        primary: '#F5F7FA',
        secondary: '#9CA3AF',
        accent: '#6366F1',
        accentLight: '#818CF8',
        border: 'rgba(255,255,255,0.08)',
        accentBorder: 'rgba(99,102,241,0.35)',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(99, 102, 241, 0.12)',
      },
    },
  },
  plugins: [],
};
