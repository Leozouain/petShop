/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '63px',
        'h1sm': '34px',
        'sub': '20px',
        'h3': '24px',
        'txt': '18px',
        'h2': '50px'

      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

