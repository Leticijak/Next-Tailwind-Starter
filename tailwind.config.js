/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        12: '2.75rem',
        14: '3.25rem',
        16: '3.75rem',
      },
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': '8px 8px 35px rgba(0, 0, 0, 0.5)',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orb: ['Orbitron', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },

      screens: {
        '3xl': '2000px',
        '4xl': '2600px',
      },
      colors: {
        mmPink: '#FE00EC',
        mmBlue: '#2B4F8D',
        mmPurple: '#251E34',
        mmDarkPurple: '#0E061A',
        mmGrayPurp: '#2D2D53',
        mmGreen: '#02C981',
        mmTurq: '#00F5FF',
        mmTurq2: '#02C9AF',
        mmGray: '#9f93a8',
        mmPinkGray: '#eb8be4',
      },
    },
  },
  plugins: [],
};
