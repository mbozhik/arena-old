/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  darkMode: 'media',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    animation: {
      fadeInDown: 'fadeInDown 1s ease-out',
    },
    keyframes: {
      fadeInDown: {
        '0%': {opacity: '0', transform: 'translateY(-50px)'},
        '100%': {opacity: '1', transform: 'translateY(0)'},
      },
    },
    animation: {
      throw: 'throwAnimation 0.8s ease-in-out',
    },
    keyframes: {
      throwAnimation: {
        '0%': {transform: 'translateX(200px) translateY(-20px) scale(1.1)', opacity: '0'},
        '100%': {transform: 'translateX(0) translateY(0) scale(1)', opacity: '1'},
      },
    },

    colors: {
      // Set background color to white
      white: '#FFFFFF',
    },
    container: {
      center: true, // Center the container
      padding: '1rem', // Optional: consistent inner spacing
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
  },
  plugins: [],
})
