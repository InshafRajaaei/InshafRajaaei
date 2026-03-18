/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0e27',
        'dark-light': '#12172e',
        'accent': '#ff6b35',
        'accent-light': '#ff8c5a',
        'text-primary': '#ffffff',
        'text-secondary': '#e5e7eb',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
