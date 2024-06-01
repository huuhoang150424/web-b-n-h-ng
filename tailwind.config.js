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
        lineColor: "#efefef",
        background: "#f0f1f3",
        textColor: "#1f1f1f",
        warningColor: "#e94d5b",
        iconColor: "#808089",
      }
    },
  },
  plugins: [],
}