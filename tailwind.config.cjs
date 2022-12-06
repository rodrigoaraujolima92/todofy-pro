/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
      serif: ["Poppins"],
      mono: ["monospace"],
      display: ["Poppins"],
      body: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
