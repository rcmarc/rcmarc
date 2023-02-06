/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinner: "spinner 1s cubic-bezier(0, 0.2, 0.8, 1) infinite",
      },
      keyframes: {
        spinner: {
          "0%": {
            top: "0px",
            left: "0px",
            width: 0,
            height: 0,
            opacity: 0,
          },
          "5%": {
            top: "0px",
            left: "0px",
            width: 0,
            height: 0,
            opacity: 1,
          },
          "100%": {
            top: "-56px",
            left: "-56px",
            width: "112px",
            height: "112px",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
