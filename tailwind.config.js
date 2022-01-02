module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      moderateBlue: 'hsl(237, 40%, 52%)',
      softRed: 'hsl(358, 79%, 66%)',
      lightGrayishBlue: 'hsl(239, 57%, 85%)',
      paleRed: 'hsl(357, 100%, 86%)',
      darkRed: 'hsl(212, 24%, 26%)',
      grayishBlue: 'hsl(212, 11%, 27%)',
      lightGray: 'hsl(220, 3%, 45%)',
      veryLightGray: 'hsl(228, 33%, 97%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
};
