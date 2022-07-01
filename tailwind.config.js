/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: "#60a5fa",
          secondary: "#0e7490",
          accent: "#37cdbe",
          neutral: "#d3d8ea",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#60a5fa",
          secondary: "#0e7490",
          accent: "#37cdbe",
          neutral: "#d3d8ea",
          "base-100": "#1F2937",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
