module.exports = {
  purge: ['./app*.html', './app*.hbs'],
  darkMode: false, 
  theme: {
    fontFamily: {
      vt323: ['VT323'],
      delius: ['Delius'],
    },
    triangles: {
      'right-up': {
        direction: 'right-up', 
        size: '2em', 
        height: '0.5em', 
        color: 'currentColor', 
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-triangles'),
  ],
};
