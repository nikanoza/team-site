/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        smoke: "#014E56",
        graffiti: "#2C6269",
      },
    },
  },
  plugins: [],
};
