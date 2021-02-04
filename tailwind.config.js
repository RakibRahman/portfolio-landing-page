module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "#f14e0d",
      },
      backgroundImage: (theme) => ({
        "hero-circle": "url('/img/circle.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
