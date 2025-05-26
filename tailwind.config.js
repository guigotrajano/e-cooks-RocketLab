/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}", // Or your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all relevant files in your src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Coustard", "sans-serif"],
      },
    },
  },
  plugins: [],
}
