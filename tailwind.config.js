/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#31708E",
        secondary: "#5085A5",
        thirdary: "#8FC1E3",
        white_greenhouse: "#F7F9FB",
        green: "#687864",
      },
    },
  },
  plugins: [],
};
