/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-color": " #6741d9",
        "primary-light": "#7950f2",
        "primary-100": "#343a40",
      },
      textColor: {
        "text-color": " #dee2e6",
      },
    },
  },
  plugins: [],
};
