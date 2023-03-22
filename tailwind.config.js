/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#000',
        'custom-gray': '#75767c',
        'custom-red': '#ee403d',
        'custom-yellow': '#f9c300',
        'custom-green': '#47b486',
      },
      fontSize: {
        h1: '30px',
        h2: '22px',
        p1: '16px',
        p2: '13px',
      },
    },
  },
  plugins: [],
};
