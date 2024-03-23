/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // deben especificar que archivos tendran acceso a tailwind
    "./index.html",
    "./src/**/*.{js}",
    "./main.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
