/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1140px',
          '2xl': '1496px',
        },
      },
      colors: {
        'primary': {
          '50': '#eefdfc',
          '100': '#d4f9f7',
          '200': '#aef3f0',
          '300': '#77e9e6',
          '400': '#55dedd',
          '500': '#1cbdbe',
          '600': '#1a99a0',
          '700': '#1c7a82',
          '800': '#1f646b',
          '900': '#1e535b',
          '950': '#0e373e',
        },
      }
    },
  },
  plugins: [],
}

