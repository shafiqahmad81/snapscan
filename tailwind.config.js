/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundPosition: {
        "left-36-bottom": "left 36% bottom",
        "left-25-bottom": "left 25% bottom",
      },
      fontFamily: {
        proxima: ['"Proxima Nova", sans-serif'],
      },
      colors: {
        "sky-1": "rgba(187, 216, 249, 0.5)",
        "black-1": "rgb(20, 54, 65)",
        "black-1.1": "#263943",
        "blue-1": "#4a90e2",
        "gray-1": "#9faab4",
        "gray-1.1": "#e3ebf5",
        "gray-1.9": "#5a707b",
      },
      fontSize: {
        "2.1xl": "1.625rem",
      },
    },
  },
  plugins: [],
  // variants: {
  //   backgroundPosition: ["responsive"],
  //   backgroundPosition: ["responsive", "hover", "focus"],
  // },
  // corePlugins: {
  //   backgroundPosition: false,
  // },
};
