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
        'abyss': {
          950: '#010812',
          900: '#021024',
          800: '#031a38',
          700: '#042a54',
        },
        'ocean': {
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        'treasure': {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          glow: '#fef3c7',
        },
        'coral': {
          400: '#fb7185',
          500: '#f43f5e',
        }
      },
      fontFamily: {
        'display': ['Space Grotesk', 'Outfit', 'system-ui', 'sans-serif'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'sea-texture': "url('/src/assets/frost.png')",
        'deep-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.15) 0%, rgba(3, 20, 39, 0.95) 70%)',
        'abyss-gradient': 'radial-gradient(ellipse at 80% 20%, rgba(20, 184, 166, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(56, 189, 248, 0.08) 0%, transparent 50%)',
        'glow-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bubble': 'bubble 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)' },
          '100%': { transform: 'translateX(100vw) rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', filter: 'blur(60px)' },
          '50%': { opacity: '1', filter: 'blur(80px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bubble: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '50%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-100px) scale(0.5)', opacity: '0' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(56, 189, 248, 0.4), 0 0 60px rgba(56, 189, 248, 0.2)',
        'glow-ocean': '0 0 40px rgba(20, 184, 166, 0.35), 0 0 80px rgba(20, 184, 166, 0.15)',
        'glow-treasure': '0 0 30px rgba(251, 191, 36, 0.5), 0 0 60px rgba(251, 191, 36, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-hover': '0 20px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
