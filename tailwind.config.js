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
        "surface-container": "#201f1f",
        "outline": "#86948a",
        "primary-container": "#10b981",
        "on-background": "#e5e2e1",
        "secondary-fixed": "#baeed1",
        "primary-fixed-dim": "#4edea3",
        "error": "#ffb4ab",
        "secondary-fixed-dim": "#9ed2b5",
        "on-surface": "#e5e2e1",
        "inverse-surface": "#e5e2e1",
        "on-secondary-fixed-variant": "#1e4f3a",
        "tertiary": "#ffb3af",
        "on-surface-variant": "#bbcabf",
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
        "surface": "#131313",
        "on-primary": "#003824",
        "on-primary-fixed-variant": "#005236",
        "surface-container-low": "#1c1b1b",
        "inverse-on-surface": "#313030",
        "background": "#131313",
        "inverse-primary": "#006c49",
        "surface-container-high": "#2a2a2a",
        "on-tertiary": "#650911",
        "on-primary-container": "#00422b",
        "surface-container-highest": "#353534",
        "on-tertiary-fixed-variant": "#842225",
        "outline-variant": "#3c4a42",
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
  plugins: []
}
