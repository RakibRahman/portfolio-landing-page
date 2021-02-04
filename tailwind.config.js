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
      width: {
        "30rem": "30rem",
        "35rem": "35rem",
      },
      height: {
        "30rem": "30rem",
        "35rem": "35rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
