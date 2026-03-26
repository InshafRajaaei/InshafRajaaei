/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Colors that work for both dark and light modes using CSS variables
        "surface-container": "var(--color-surface-container, rgb(32 31 31))",
        "outline": "rgb(134 148 138 / <alpha-value>)",
        "primary-container": "#10b981",
        "on-background": "var(--color-on-background, rgb(229 226 225))",
        "secondary-fixed": "#baeed1",
        "primary-fixed-dim": "#4edea3",
        "error": "#ffb4ab",
        "secondary-fixed-dim": "#9ed2b5",
        "on-surface": "var(--color-on-surface, rgb(229 226 225))",
        "inverse-surface": "#e5e2e1",
        "on-secondary-fixed-variant": "#1e4f3a",
        "tertiary": "#ffb3af",
        "on-surface-variant": "var(--color-on-surface-variant, rgb(187 202 191))",
        "on-primary-fixed": "#002113",
        "on-tertiary-fixed": "#410005",
        "surface-variant": "#353534",
        "secondary": "#9ed2b5",
        "primary": "#4edea3",
        "on-secondary": "#013824",
        "surface-bright": "#3a3939",
        "on-secondary-fixed": "#002113",
        "primary-fixed": "#6ffbbe",
        "surface-dim": "#131313",
        "on-secondary-container": "#91c4a8",
        "secondary-container": "#21523c",
        "tertiary-fixed-dim": "#ffb3af",
        "surface-tint": "#4edea3",
        "on-error-container": "#ffdad6",
        "tertiary-container": "#fc7c78",
        "on-tertiary-container": "#711419",
        "tertiary-fixed": "#ffdad7",
        "surface": "var(--color-surface, #131313)",
        "on-primary": "#003824",
        "on-primary-fixed-variant": "#005236",
        "surface-container-low": "var(--color-surface-container-low, rgb(28 27 27))",
        "inverse-on-surface": "#313030",
        "background": "var(--color-background, #131313)",
        "inverse-primary": "#006c49",
        "surface-container-high": "var(--color-surface-container-high, rgb(42 42 42))",
        "on-tertiary": "#650911",
        "on-primary-container": "#00422b",
        "surface-container-highest": "#353534",
        "on-tertiary-fixed-variant": "#842225",
        "outline-variant": "var(--color-outline-variant, rgb(60 74 66))",
        "error-container": "#93000a",
        "on-error": "#690005",
        "surface-container-lowest": "#0e0e0e"
      },
      fontFamily: {
        "headline": ["Inter"],
        "body": ["Inter"],
        "label": ["Inter"],
        "sans": ["Inter", "system-ui", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" }
    }
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        '.light': {
          '--color-surface-container': 'rgb(243 243 242)',
          '--color-surface-container-high': 'rgb(237 233 230)',
          '--color-surface-container-low': 'rgb(252 252 251)',
          '--color-on-surface': 'rgb(28 27 27)',
          '--color-on-surface-variant': 'rgb(73 69 78)',
          '--color-outline-variant': 'rgb(202 196 207)',
          '--color-background': 'rgb(250 250 249)',
          '--color-surface': 'rgb(250 250 249)',
          '--color-on-background': 'rgb(28 27 27)',
        }
      })
    }
  ]
}


