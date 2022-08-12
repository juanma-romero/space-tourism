module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '10xl': '10vw',
      '1.75rem': '1.75rem',
      '2rem': '2rem',
      '3.5rem': '3.5rem',
      '6.25Rem': '6.25Rem',
      'lg': '1.25Rem',
    },
    width: {
      '100': '27.75rem',
      '444':'30vw',

    },
    letterSpacing: {
      'treintaRem': '0.3rem',
      'wide': '.025em',
    },
    fontFamily: {
      'bellefair': ['Bellefair', 'sans-serif'],
      'barlow': ['Barlow Condensed', 'sans-serif']
    },
    extend: {
      colors: {
        'celestito': '#D0D6F9',
      },
      margin: {
        '30': '10rem',
        '37vh': '37vh'
      }
    },
  },
  plugins: [],
}
