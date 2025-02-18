import { displayPartsToString } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens:{
        '1920px': '1920px',  
        '1700px': '1600px',  
        '1500px': '1600px',  
        '1100px': '1100px',  
        '900px': '900px',  
        '600px': '600px',
        '500px': '500px',
        '400px': '400px',
      },
      willChange: {
        transform: 'transform, opacity',
        'backdrop-filter': 'backdrop-filter',
      },
      colors: {
        primaryOrange: '#FF6700',
        darkOrange: '#FF7213',
        bgOpacity: '#000000A8',
        gray: '#757575',
        bgTraffic: ' rgba(255, 255, 255, 0.0118)',
        b3: '#b3b3b3'
      },
      backgroundImage: {
        headerGradient: ' linear-gradient(180deg, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 90%)',
        blurWhite: 'radial-gradient(ellipse, rgba(255,255,255,0.74) 30%, transparent 70%)',
        bgDark: 'radial-gradient(37.68% 37.68% at 50% 50%, #843F10 0%, #EDE7E7 100%)',
        bgBtn: 'linear-gradient(264.64deg, #FE6302 -6.54%, #ED918A 42.73%, #B257AC 67.36%, #714CD0 91.99%)'
      },
      backdropBlur: {
        '1px': 'blur(1px)',
        '72px': '72.2px',
        '45px': '45.6px'
      },
      fontFamily: {
        source: ['Source Code Pro', 'serif'],
        interx: ['Inter', 'serif'],
      },
      fontSize: {
        '70px': '4.375rem',
        '40px': '2.5rem',
        '32px': '2rem',
        '31px': '1.9375rem',
        '28px': '1.75rem',
        '26px': '1.625rem',
        '25px': '1.5625rem',
        '24px': '1.5rem',
        '20px': '1.25rem',
        '10.35px': '.6469rem',
        '8.41px': '.5256rem'
      },
      letterSpacing: {
        '60px-3%': '-0.113rem',
        '24px-3%': '-0.047rem'
      },
      lineHeight: {
        '80.49px': '5.0306rem',
        '69px': '4.3125rem',
        '57.5px': '3.5938rem',
        '46px': '2.875rem',
        '38.69px': '2.4181rem',
        '36.8px': '2.3rem',
        '32.2px': '2.0125rem',
        '31.47px': '1.9669rem',
        '29.05px': '1.8156rem',
        '27.6px': '1.725rem',
        '23px': '1.4375rem',
        '18.4px': '1.15rem',
        '11.91px': '.7444rem',
        '9.67px': '.6044rem'
      },
      boxShadow: {
        orange: '-52.25px 12.61px 123.24px 37.84px rgba(255, 114, 19, 0.93)',
        orange2: '52.25px -34.23px 141.82px 41.44px rgba(255, 127, 40, 0.78)',
        hoverBtn: 'inset 0px 0px 12.5px 4px rgba(210, 165, 255, 0.67)',
        traffic1:
          '0px -45.18px 123.71px 0.96px rgba(248, 248, 248, 0.33) inset, 0px 0.96px 42px 0px rgba(255, 255, 255, 0.23) inset, 0px 3.84px 15.38px 0px rgba(255, 255, 255, 0.33) inset',
        traffic2:
          '0px -52.18px 142.88px 1.11px rgba(248, 248, 248, 0.33) inset, 0px 1.11px 48.52px 0px rgba(255, 255, 255, 0.23) inset, 0px 4.44px 17.76px 0px rgba(255, 255, 255, 0.33) inset',
        traffic3:
          '0px -45.18px 123.71px 0.96px #F8F8F854 inset, 0px 0.96px 42px 0px #FFFFFF3B inset, 0px 3.84px 15.38px 0px #FFFFFF54 inset'
      },
      rotate: {
        45: '-45deg',
        55: '55deg',
        66: '66deg',
        180: '180deg'
      },
      borderRadius: {
        '40px': '2.5rem'
      },
      gap: {
        '50px': '3.125rem',
        '30px': '1.875rem'
      },
      animation: {
        'move-right': 'moveRight 1s ease-in-out infinite',
        'move-left': 'moveLeft 1s ease-in-out infinite'
      },
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' }
        },
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addComponents }) {
      addComponents({
        '.df-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.logRegActive': {
          background: '#FF6700',
          weight: '97px',
          height: '55px',
          borderRadius: '37px',
          padding: '20px',
          borderStyle: 'solid',
          borderLeftWidth: '1.38px',
          borderColor: '#000'
        },
        '.h2': {
          fontWeight: 'bold',
          textAlign: 'start',
          fontSize: '3.125rem',
          lineHeight: '57.5px',
          letterSpacing: '-0.113rem'
        },
        '.wordSpacing': {
          wordSpacing: '-7px',
        },
      })
    }
  ]
}
