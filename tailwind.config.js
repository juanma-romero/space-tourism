module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '10xl': '9.375rem',
      '1.75rem': '1.75rem',
      '6.25Rem': '6.25Rem'
    },
    width: {
      '100': '27.75rem'
    },
    letterSpacing: {
      treintaRem: '0.3rem'
    },
    fontFamily: {
      'bellefair': ['Bellefair', 'sans-serif'],
      'barlow': ['Barlow Condensed', 'sans-serif']
    },
    extend: {
      colors: {
        'celestito': '#D0D6F9',
      },
    },
  },
  plugins: [],
}
