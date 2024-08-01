/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-color": "#DE504D",
        "logo-darker": "#691919",
      },
    },
  },
  plugins: [],
};
