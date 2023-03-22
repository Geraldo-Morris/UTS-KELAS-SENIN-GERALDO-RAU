/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      ping: "#C93D8D",
      white: "#ffffff",
      ungu: "#120227",
      ungu2: "#1F0443",
      ungu3: "#321655",
      abu: "#DADADA4D",
      merah: "#FF1515",
      ijo: "#22EE98",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
