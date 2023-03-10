/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/*.tsx",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gloock: ["Gloock", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },

      keyframes: {
        fadeIn: {
          "0%": { transform: " translate3d(-50px,0,0)", opacity: "0" },
          "100%": { transform: " translate3d(0)", opacity: "1" },
        },
        fadeBottom: {
          "0%": { transform: " translate3d(0,-100px,0)", opacity: "0" },
          "100%": { transform: " translate3d(0)", opacity: "1" },
        },
        fadeLeft: {
          "0%": { transform: " translate3d(1000px,0,0)", opacity: "1" },
          "50%": { transform: " translate3d(0,0,0)", opacity: "1" },
          "100%": { transform: " translate3d(1000px,0, 0)", opacity: "1" },
        },
        fadeLeftImage: {
          "0%": { transform: " translate3d(1000px,0,0)", opacity: "0" },
          "100%": { transform: " translate3d(0,0,0)" },
        },
      },

      animation: {
        "fade-in": "fadeIn 0.4s ease-in-out",
        "fade-bottom": " fadeBottom 0.4s ease-in-out ",
        "fade-left": " fadeLeft 1.1s ease-in ",
        "fade-left-image": " fadeLeftImage 0.7s ease-in ",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
