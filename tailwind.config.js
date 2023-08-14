/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1670B4",
        secondary: "#91D54A",
        lightGray: "#C9C8C9",
      },
      borderRadius: {
        small: ".32rem",
        medium: ".64rem",
        large: "1.28rem",
      },
      backgroundImage: {
        bgGradient: "linear-gradient(136deg,#53ABEE 0%,#91D54A 100%)",
      },
    },
  },

  plugins: [],
};
