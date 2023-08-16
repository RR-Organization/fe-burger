/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito-Bold"],
        pacifico: ["Pacifico"],
      },
      gridTemplateColumns: {
        custom: 'repeat(auto-fit, minmax(328px, 316px))',
      },
    },
  },
  plugins: [require("daisyui")],
}

