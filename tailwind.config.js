/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jade-dark': '#031427',
        'jade-light': '#bae6fd',
        'jade-glow': '#38bdf8',
      },
      backgroundImage: {
        'jade-texture': "url('/src/assets/frost.png')",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

