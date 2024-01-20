/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#424242",
          100: "#D1D1D1",
          200: "#AEAEAE",
          300: "#777777",
          400: "#242424",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#F5F5F5",
          200: "#F0F2EA",
          300: "#F9FAF6",
        },
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
