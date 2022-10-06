/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3c96bf",
          1: "#eee",
          2: "#ECB365",
          3: "#040516",
        },
        secondary: {
          DEFAULT: "#CCCCCC",
        },
      },
    },
  },
  plugins: [],
};
