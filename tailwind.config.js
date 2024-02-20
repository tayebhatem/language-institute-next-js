/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
     
      colors:{
        primary:'#3056A6',
        secondary: '#3056A6',
        sectionColor:'rgba(1, 39, 95, 4%)',
        footerSection:'hsl(210, 11%, 15%)',
        rightSection:'#202020'
      }
    },
  },
  plugins: [],
};
