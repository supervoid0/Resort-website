module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        700: '700px',
        600: '600px',
        500: '500px',
      },
      width: {
        1280: '1280px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
