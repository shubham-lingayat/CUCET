/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    screens: {
      sm: "320px",
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
    colors: {
      deepblue: "#174877",
      // deepbluebg: "rgba(20,73,120,0.80)",
      deepbluebg: "rgba(23,72,119,0.80)",
      startyourtest: "#0990F8",
      transparent: "transparent",
      white: "#ffffff",
      black: "rgb(0,0,0)",
      yellowline: "#F7A300",
      loginbutton: "#84A1B8",
      university: "#E5F0F1",
      bgblue: "#123b70",
      bordercolor: "rgba(173, 225, 250, 0.15)",
      registration: "#e4363d",
      bgtemplate: "#F1F9FA",
      fontcolorsky: "#0990f8",
      dropdown: "#5c5c5c",
      borderbottom: "#f5f4f4",
      dropdownhover: "#ECECEC",
      benefitstemplate: "rgba(9, 144, 248,0.70)",
      benefitstemp: "rgba(23,72,119,0.70)",
      templatecolorbg: "rgba(23,72,119,0.90)",
      bordertemplate: "rgba(10, 109, 156, .15)",
      textgrey: "#666666",
      buttongrey: "#597CA2",
      textlightgrey: "#A3B4CD",
      inputbox: "#69727a",
      buttonyellow: "#E9C681",
    },
  },
  plugins: [],
};
