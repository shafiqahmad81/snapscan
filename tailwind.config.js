/** @type {import('tailwindcss').Config} */
// import { checkIcon } from "src/assets/icon/svgs/icn-status-complete.svg";
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundPosition: {
        "left-36-bottom": "left 36% bottom",
        "left-25-bottom": "left 25% bottom",
      },
      backgroundImage: {
        check: "url('/src/assets/icon/svgs/icn-status-complete.svg')",
      },
      fontFamily: {
        proxima: ['"Proxima Nova", sans-serif'],
        Lora: ['"Lora", sans-serif'],
      },
      colors: {
        "sky-1": "rgba(187, 216, 249, 0.5)",
        "gray-rgba-1": "rgba(255, 255, 255, 0.5)",
        "black-1": "rgb(20, 54, 65)",
        "black-2": "rgb(38, 57, 67)",
        "black-1.1": "#263943",
        "blue-1": "#4a90e2",
        "gray-1": "#9faab4",
        "gray-1.1": "#e3ebf5",
        "gray-1.2": "#f8fafd",
        "gray-1.9": "#5a707b",
        "gray-2": "#eff5f9",
      },
      fontSize: {
        "2.1xl": "1.625rem",
      },
      boxShadow: {
        "3xl": "0 15px 20px 0 rgba(59, 119, 187, 0.2)",
        "3.1xl": "0 15px 30px 0 #c8d8eb",
        "3.2xl": "0 15px 20px 0 #c8d8eb",
      },
      maxWidth: {
        "1.5lg": "33.75rem",
        "6.5xl": "76.875rem",
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
