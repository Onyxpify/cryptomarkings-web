const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ["Lato", "sans-serif",],
        
      },
      fontSize: {
      },
      colors: {
        'mgray-1': '#808080',
        'bodyText': '#808080',
        'mgray-2': '#49454F',
        'mainText': '#000000E5',
        'pri': '#003D2B',
        'sec': '#95CEA5',
        'mblack-1': '#000000E5'

      },
      
    },
  },
  plugins: [
],
}