module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 800: "#464748" },
        blue_gray: { 900: "#333333" },
        white: { A700: "#ffffff" },
        orange: { A200: "#ff9b42" },
        yellow: { 800: "#eaa412" },
        yellow_900: "#dc9a11",
      },
      boxShadow: {},
      fontFamily: { montserrat: "Montserrat", opensans: "Open Sans", istokweb: "Istok Web" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
