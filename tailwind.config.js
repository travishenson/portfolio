/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'brand-blue-100': '#B3D9FF',
        'brand-blue-200': '#80C0FF',
        'brand-blue-300': '#4CA6FF',
        'brand-blue-400': '#268DF3',
        'brand-blue-500': '#0073E6',
        'brand-blue-600': '#005AB3',
        'brand-blue-700': '#004080',
        'brand-blue-800': '#003367',
        'brand-blue-900': '#00264D',
        'brand-grey-100': '#F2F2F2',
        'brand-grey-300': '#BDBDBD',
        'brand-grey-500': '#878787',
        'brand-grey-700': '#4F4F4F',
        'brand-grey-900': '#1A1A1A',
        'brand-black': '#080808',
      },
      maxWidth: {
        'content': '1400px',
        'text': '70ch',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
