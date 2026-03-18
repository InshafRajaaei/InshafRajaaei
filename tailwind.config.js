/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0f1419',
        'dark-light': '#1a1f29',
        'accent': '#d97706',
        'accent-light': '#f59e0b',
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
