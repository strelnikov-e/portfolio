/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      FontFamily: {
        sans: ["Helventica Neue", "sans-serif"],
      },
      colors: {
        accent: {
          1: "hsl(var(--color-accent-1) / <alpha-value>)",
          2: "hsl(var(--color-accent-2) / <alpha-value>)",
          3: "hsl(var(--color-accent-3) / <alpha-value>)",
        },
        bkg: {
          mate: "hsl(var(--color-bkg-mate) / <alpha-value>)",
          vivid: "hsl(var(--color-bkg-vivid) / <alpha-value>)",
        },
        content: {
          mate: "hsl(var(--color-content-mate) / <alpha-value>)",
          vivid: "hsl(var(--color-content-vivid) / <alpha-value>)",
        },
        error: "hsl(var(--color-error) / <alpha-value>)",
        highlight: "hsl(var(--color-highlight) / <alpha-value>)",
        
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
    },
  },
  plugins: [],
};
