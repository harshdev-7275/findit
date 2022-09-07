/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',
            './*.main.js'],
  theme: {
    screen: {
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        text: '#676BE0',  
        primary: '#6266fb',
        bgPrimary:'#DDDEF8',
        lightPrimary: '#ADB0FF',
        shadedWhite: '#F5F5F5',
        white: '#fff'

      }
      
    },
  },
  plugins: [],
}
