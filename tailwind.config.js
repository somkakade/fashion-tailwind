/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily:{
      poppins:["Poppins", "sans-serif"],
    },
    extend: {
      colors:{
        secondary:"#E6C744",
        primary:"#000000",
        text_gray:"#7F7F7F",
        bg_gray:"7F7F7F",
      }
    },
  },
  plugins: [],
}