/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(246, 80%, 60%)',
        lightOrange: 'hsl(15, 100%, 70%)', //(work)
        softBlue: 'hsl(195, 74%, 62%)', //(play)
        lightRed: 'hsl(348, 100%, 68%)', //(study)
        limeGreen: 'hsl(145, 58%, 55%)', //(exercise)
        violet: 'hsl(264, 64%, 52%)', //(social)
        softOrange: 'hsl(43, 84%, 65%)', //(self care)
        veryDarkBlue: 'hsl(226, 43%, 10%)',
        darkBlue: 'hsl(235, 46%, 20%)',
        desaturatedBlue: 'hsl(235, 45%, 61%)',
        paleBlue: 'hsl(236, 100%, 87%)'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

