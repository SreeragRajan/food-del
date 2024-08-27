/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "list-table-format": "0.5fr 2fr 1fr 1fr 0.5fr",
        "sm-list-table-format": "1fr 3fr 1fr",
      }
    },
  },
  plugins: [],
}

