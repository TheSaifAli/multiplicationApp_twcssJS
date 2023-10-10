/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':'Poppins'
      },
      keyframes:{
        showMsg:{
          'from':{
            opacity:'0',
            top:'-10%'
          },
          'to':{
            opacity:'1',
            top:'0'
          },
        },
        exitMsg:{
          'from':{
            opacity:'1',
            top:'0'
          },
          'to':{
            opacity:'0',
            top:'-10%'
          }
        },
        showGameOver:{
          'from':{
            opacity:'0'
          },
          'to':{
            opacity:'1',
          },
        },
        exitGameOver:{
          'from':{
            opacity:'1'
          },
          'to':{
            opacity:'0'
          },
        }
      }
    },
  },
  plugins: [],
}

