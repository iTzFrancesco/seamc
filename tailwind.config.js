/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sea-dark': '#031427',
        'sea-light': '#bae6fd',
        'sea-glow': '#38bdf8',
      },
      backgroundImage: {
        'sea-texture': "url('/src/assets/frost.png')",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}


