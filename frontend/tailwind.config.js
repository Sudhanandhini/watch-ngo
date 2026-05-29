/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#671700',
        'primary-dark': '#4a1000',
        'primary-light': '#8b2500',
        secondary: '#F04900',
        'secondary-dark': '#c93d00',
        orange: '#f97316',
        teal: '#1a7fa0',
        'teal-dark': '#156585',
      },
    },
  },
  plugins: [],
}
