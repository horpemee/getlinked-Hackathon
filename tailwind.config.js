/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
    },

    colors: {
      backgroundColor: "#1E1E1E",
      white: "#FFFFFF",
      darkPurple: "#140D27",
      primaryColor: "#D434FE",
      secondaryColor: "#F7F7F7",
      customPink: "#FF26B9",
      customPurple: "#903AFF",
      customBurger: "#150E28",
      customWhite: "#FFFFFF2E",
      ofWhite: "#FFFFFFBF",
      col: "#D9D9D908",
      silver: "#D434FE1F",
      gold: "#903AFF1F",
      input: "#00000040",
      footer: "#100B20",
      form: "#FFFFFF08",
    },

    fontFamily: {
      clash: ["Clash Display"],
      mont: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      voces: ["Voces", "sans-serif"],
      Volkhov: ["Volkhov", "serif"],
      Typo: ["Typo Hoop Demo", "sans-serif"],
      unica: ["Unica One", "sans-serif"],
    },

    extend: {
      backgroundButton: {
        customGradient:
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      },
      iconColor: {
        gradient: "linear-gradient(180deg, #903AFF 0%, #FF26B9 100%)",
      },
    },
    plugins: [],
  },
};
