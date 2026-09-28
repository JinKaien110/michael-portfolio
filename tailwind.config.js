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
        surfaceAlt: '#171B2A',
        surfaceRaised: '#1D2335',

        primary: '#F5F7FA',
        secondary: '#A1A8B8',
        muted: '#737D91',

        accent: '#6366F1',
        accentLight: '#818CF8',
        accentStrong: '#4F46E5',
        accentBlue: '#38BDF8',
        accentRed: '#F05252',

        border: 'rgba(255,255,255,0.09)',
        borderStrong: 'rgba(255,255,255,0.16)',
        accentBorder: 'rgba(99,102,241,0.42)',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(0,0,0,0.32)',
        accent: '0 18px 50px rgba(99,102,241,0.18)',
      },
    },
  },
  plugins: [],
};
