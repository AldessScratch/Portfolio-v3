/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark'],
    defaultTheme: 'light',
  },
  plugins: [
    require("daisyui")
  ]
}
