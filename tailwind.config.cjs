//  File to enable tailwindcss intellisense
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#713f12",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
