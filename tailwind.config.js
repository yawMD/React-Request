module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        riverBlue: '#2FAEF3',
        riverLightBlue: '#E2F4FD',
        riverDeepGray: '#4F606A',
        riverMainGray: '#8B969D',
        riverLightGray: '#CACED0',
        riverLighterGray: '#E7E9EA',
        riverBrown: '#FCFAF9',
        riverBackground: '#F6F8F9',
        riverBlack: '#303030',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        1440: '1200px',
      },
    },
  },
  plugins: [],
}
