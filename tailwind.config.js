/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        smoke: "#014E56",
        graffiti: "#2C6269",
        "dark-green": "#002529",
        red: "#F67E7E",
        "infos-bg": "#012F34",
      },
    },
  },
  plugins: [],
};
