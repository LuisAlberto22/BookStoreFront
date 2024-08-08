/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      boxShadow: {
        'custom': '0 0 20px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        pomp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation:{
        pomp: 'pomp 0.3s ease-in-out',
      },
      colors:{
        'main-color' : '#111827',
        'text-color' : '#ffffff',
      },
    },
  },
  plugins: [],
}

