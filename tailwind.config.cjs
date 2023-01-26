/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'mobile': '576px',
        'tablet': '768px',
        'desktop': '1200px',
      },
      colors: {
        soft_orange: 'hsl(35, 77%, 62%)',
        soft_red: 'hsl(5, 85%, 63%)',
        off_white: 'hsl(36, 100%, 99%)',
        grayish_blue: 'hsl(233, 8%, 79%)',
        dark_grayish_blue: 'hsl(236, 13%, 42%)',
        very_dark_blue: 'hsl(240, 100%, 5%)',
        opaque_black: 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      letterSpacing: {
        custom_wide: '0.4em'
      }
    },
  },
  plugins: [],
}