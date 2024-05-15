// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#f7462e",
        lineColor: "#b7b7b8",
        background: "#f0f1f3",
        textColor: "#1f1f1f"
      }
    },
  },
  plugins: [],
}