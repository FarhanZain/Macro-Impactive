/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Libre: ['Libre Franklin', 'sans-serif'],
      },
      colors: {
        'primary': '#00917C',
        'primary-hover': '#006556',
        'secondary': '#FF8906',
        'secondary-hover': '#D06E00',
      },
      lineHeight: {
        '14': '3.5rem',
        '20': '5rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

