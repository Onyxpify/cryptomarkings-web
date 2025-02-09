/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        'mblack-1': '#000000E5',
        'foreground': '#F2F2F2',
        'mgreen': '#10C10C',
        'mgreen1': '#C4E5C3',
        'active': '#10C10C',
        'inactive': '#0000004D',
        'yellowPrompt': '#FFFDED',
        'yellowPrompt1': '#A76604',
        'greenPrompt1': '#EDFFF2',
        'error': '#A70404',

      },
      
    },
  },
  plugins: [],
}