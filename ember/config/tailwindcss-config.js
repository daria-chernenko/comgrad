module.exports = {
  purge: ['./app*.html', './app*.hbs'],
  darkMode: false, 
  theme: {
    fontFamily: {
      vt323: ['VT323'],
      delius: ['Delius'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
