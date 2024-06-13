/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#22c55e",
        mainColorOnHover: "#4ade80",
      },
      transitionDuration: {
        default: "300ms",
      },
    },
  },
  plugins: [],
}

