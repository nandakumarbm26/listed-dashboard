/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        background:"#F5F5F5",
        secondaryText:"#858585",
        "lightgray":"#B0B0B0",
        lightbrown:"#EFDADA",
        lightpurple:"#DEE0EF",
        lightyelloW:"#F4ECDD",
        lightgreen:"#DDEFE0",
        green:"#98D89E",
        yellow:"#F6DC7D",
        brown:"#EE8484"
      ,purple:"#6972C3"
      }
    },
  },
  plugins: [],
}
