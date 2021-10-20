module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '60px',
      },
      fontFamily: {
        sans: ['Open Sans', 'Verdana', 'sans-serif'],
      },
      colors: {
        primary: '#629509',
        customGray: '#717378',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
