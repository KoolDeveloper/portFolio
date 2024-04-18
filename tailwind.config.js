/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        walk: {
          "0%": { backgroundPosition: "0" },
          "100%": { backgroundPosition: "-672px" },
        },
        movebg : {
          "0%":{ backgroundPosition: "550px" },
          "100%" : { backgroundPosition: "0" }
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        walk1: 'walk 1.2s steps(6) infinite',
        walk2: 'walk 0.8s steps(6) infinite',
        move1: 'movebg 300s linear infinite',
        move2: 'movebg 100s linear infinite',
        move3: 'movebg 80s linear infinite',
        move4: 'movebg 60s linear infinite',
        move5: 'movebg 40s linear infinite',
        move6: 'movebg 20s linear infinite'
      },
      fontFamily: {
        DotGothic16: ["DotGothic16", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0px 0px 52px 0px rgba(0,0,0,1);",
        dentro: "inset 0px 0px 20px 0px rgba(250,176,20,1);",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "peach-cream": {
          DEFAULT: "#FFF0DA",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFF0DA",
          300: "#FFD9A2",
          400: "#FFC36A",
          500: "#FFAC32",
          600: "#F99400",
          700: "#C17200",
          800: "#885100",
          900: "#503000",
          950: "#341F00",
        },
        anakiwa: {
          DEFAULT: "#84DEFF",
          50: "#EAF9FF",
          100: "#D6F4FF",
          200: "#ADE9FF",
          300: "#84DEFF",
          400: "#4CCFFF",
          500: "#14C0FF",
          600: "#00A0DB",
          700: "#0077A3",
          800: "#004E6A",
          900: "#002532",
          950: "#001016",
        },
        "harvest-gold": {
          DEFAULT: "#DCB273",
          50: "#F9F1E5",
          100: "#F4E8D5",
          200: "#ECD6B4",
          300: "#E4C494",
          400: "#DCB273",
          500: "#D19946",
          600: "#B27D2D",
          700: "#855D21",
          800: "#583E16",
          900: "#2C1F0B",
          950: "#150F05",
        },
        blumine: {
          DEFAULT: "#1A5B88",
          50: "#B9DBF2",
          100: "#A8D2EE",
          200: "#86C0E8",
          300: "#64AEE1",
          400: "#429CDB",
          500: "#2789CD",
          600: "#2172AA",
          700: "#1A5B88",
          800: "#113B59",
          900: "#081C2A",
          950: "#030C12",
        },
        "blue-dianne": {
          DEFAULT: "#1F3747",
          50: "#B8D0E0",
          100: "#AAC7DA",
          200: "#8DB4CD",
          300: "#71A1C1",
          400: "#558EB5",
          500: "#44799C",
          600: "#386380",
          700: "#2B4D63",
          800: "#1F3747",
          900: "#0E1920",
          950: "#050A0C",
        },
        rope: {
          DEFAULT: "#875B1A",
          50: "#F1DBB9",
          100: "#EED2A8",
          200: "#E8C085",
          300: "#E1AE63",
          400: "#DA9C41",
          500: "#CB8927",
          600: "#A97221",
          700: "#875B1A",
          800: "#583B11",
          900: "#291C08",
          950: "#110C03",
        },
        cinnabar: {
          DEFAULT: "#E63B1A",
          50: "#FCE8E4",
          100: "#FAD8D2",
          200: "#F6B9AD",
          300: "#F29988",
          400: "#EE7A64",
          500: "#EA5A3F",
          600: "#E63B1A",
          700: "#B42E14",
          800: "#82210E",
          900: "#4F1409",
          950: "#360E06",
        },
        "bright-red": {
          DEFAULT: "#AB0603",
          50: "#FEBBB9",
          100: "#FDA7A5",
          200: "#FD807D",
          300: "#FC5855",
          400: "#FB312D",
          500: "#FB0905",
          600: "#D30704",
          700: "#AB0603",
          800: "#740402",
          900: "#3D0201",
          950: "#210101",
        },
      },
    },
  },
  plugins: [],
};
