/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./components/**/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#243956",
        secondary: "#1E3FAE",
        background: "#F8FAFC",
        base: {
          dark: {
            primary: "#121212",
          },
          light: {
            10: "#ffffff",
            11: "rgba(255, 255, 255, 0.05)",
            50: "#1A1A1A0D",
            100: "#1A1A1A1A",
            200: "#1A1A1A33",
            300: "#1A1A1A4D",
            400: "#1A1A1A66",
            500: "#1A1A1A80",
            600: "#1A1A1A99",
            700: "#1A1A1AB2",
            900: "#1A1A1A",
          },
        },
        gray: {
          light: {
            50: "#FDFDFD",
            100: "#F4F4F5",
            200: "#E4E4E7",
            300: "#D4D4D8",
            500: "#71717A",
          },
          dark:{
            100: '#474A5A', //border dark
          }
        },
        blue: {
          light: {
            300: "#91C3FD",
            500: "#3479E9",
            550: "#6575CD", // border focus
            600: "#2463EB",
            650: "#275AC5",
            700: "#1D4FD7",
            800: "#1E3FAE",
            900: "#2E3C8D", //border hover
            1000: '#32429A'
          },
          dark:{
            100: '#19214D',
            200: '#191D31', //bg input dark
            300: '#0D1126',

          },
          gray: {
            100: "#F1F5F9",
            200: "#E1E7EF",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#65758B",
            600: "#48566A",
            700: "#344256",
            800: "#1D283A",
            900: "#0F1729",
          },
        },
        red: {
          light: {
            400: "#FD6B6B",
            450: "#FF6262",
            500: "#EF4343",
            600: "#DC2828",
            700: "#BA1C1C",
          },
        },
      },
    },
  },
  plugins: [],
};
