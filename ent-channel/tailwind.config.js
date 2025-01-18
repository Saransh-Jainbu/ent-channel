/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        endLine: "endLine 2s ease-in-out forwards",
      },
      keyframes: {
        endLine: {
          "0%": {
            width: "100%",
            opacity: "1",
          },
          "50%": {
            width: "50%",
            opacity: "0.7",
          },
          "100%": {
            width: "0%",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
