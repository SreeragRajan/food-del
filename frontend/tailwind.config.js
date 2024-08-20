/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cart-frames':'1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      }
    },
  },
  plugins: [],
};
