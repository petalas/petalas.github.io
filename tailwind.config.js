/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Catppuccin Mocha theme colors
        mocha: {
          crust: "#161320",
          mantle: "#1e1e2e",
          base: "#181825",
          surface0: "#313244",
          surface1: "#45475a",
          surface2: "#585b70",
          overlay0: "#6c7086",
          overlay1: "#7f849c",
          overlay2: "#9399b2",
          subtext0: "#a6adc8",
          subtext1: "#bac2de",
          text: "#cdd6f4",
          lavender: "#b4befe",
          blue: "#89b4fa",
          sapphire: "#74c7ec",
          sky: "#89dceb",
          teal: "#94e2d5",
          green: "#a6e3a1",
          yellow: "#f9e2af",
          peach: "#fab387",
          maroon: "#eba0ac",
          red: "#f38ba8",
          pink: "#f5c2e7",
          mauve: "#cba6f7",
        },
        // Catppuccin Latte theme colors
        latte: {
          crust: "#dce0e8",
          mantle: "#e6e9ef",
          base: "#eff1f5",
          surface0: "#f2f5f9",
          surface1: "#f5f7fa",
          surface2: "#f8fafc",
          overlay0: "#e0e6ed",
          overlay1: "#d7dce3",
          overlay2: "#cdd1d8",
          subtext0: "#a5adba",
          subtext1: "#9ca3b0",
          text: "#4c4f69",
          lavender: "#7287fd",
          blue: "#1e66f5",
          sapphire: "#209fb5",
          sky: "#04a5e5",
          teal: "#179299",
          green: "#40a02b",
          yellow: "#df8e1d",
          peach: "#fe640b",
          maroon: "#e64553",
          red: "#d20f39",
          pink: "#ea76cb",
          mauve: "#8839ef",
        },
      },
    },
  },
  plugins: [],
};
