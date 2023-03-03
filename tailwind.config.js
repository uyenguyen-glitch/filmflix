/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redPrimary: "#f60000",
        bgSlight: "#060606",
        borderColor: "#404040",
      },
      brightness: {
        25: ".25",
        // 50: ".50",
        175: "1.75",
      },
      height: {
        128: "32rem",
        400: "46rem",
      },
      lineHeight: {
        inherit: "inherit",
      },
    },
    fontFamily: {
      Lora: ["Lora", "serif"],
      Roboto: ["Roboto", "sans-serif"],
      RobotoSlab: ["Roboto Slab", "serif"],
      Poppins: ["Poppins", "sans-serif"],
      ConcertOne: ["Concert One", "cursive"],
      PTSerif: ["PT Serif", "serif"],
      Nunito: ["Nunito", "sans-serif"],
      Neuton: ["Neuton", "serif"],
      InknutAntiqua: ["Inknut Antiqua", "serif"],
      Rubik: ["Rubik", "sans-serif"],
      Chivo: ["Chivo", "sans-serif"],
      Kanit: ["Kanit", "sans-serif"],
      SourceCodePro: ["Source Code Pro", "monospace"],
      Corben: ["Corben", "cursive"],
      Prompt: ["Prompt", "sans-serif"],
    },
  },
  plugins: [],
  important: true,
};
