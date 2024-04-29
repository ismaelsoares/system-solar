/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "granity-gray": "#666",
      },
      fontSize: {
        "very-small": "6px",
      },
    },
  },
  plugins: [],
};
