/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(22, 22, 156, 0.5)",
        light: "#EDF5FF",
        "over-light": "#f8f9fa",
        card: "#f2f2f2",
        footer: "#343a40",
        Portfolio: "#353535",
        "footer-text": "#858585",
        borderColor: "#ced4da",
      },
      height: {
        "77p": "77%",
        "77p-2": "69%",
      },
      padding: {
        "10px": "10px",
        "20px": "20px",
      },
    },
  },
  plugins: [],
};
