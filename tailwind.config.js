/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
    colors: {
      primary: "#4263db",
      secondary: "#63e6be",
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  darkMode: "class",  // This must be "class" for toggling dark mode
  plugins: [],
}
