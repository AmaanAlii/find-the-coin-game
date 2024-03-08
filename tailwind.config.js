/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#202020",
        lightGray: "#292929",
        darkestGray: "#191919",
        cardGray: "#333333",
        midGray: "#444444",
        textGray: "#747474",
        textGray2: "#BCBCBC",
      },
    },
  },
  plugins: [],
};
