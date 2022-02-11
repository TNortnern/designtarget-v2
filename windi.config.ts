
import animations from '@windicss/plugin-animations'
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {

      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        'black': '#272727',
        'white': '#FFFFFF',
        'app-red-1': '#FF2121',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    animations({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
        pulseSpeed: 1000,
      },
    }),
  ],
}
