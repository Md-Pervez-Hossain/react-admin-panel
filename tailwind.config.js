import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#9B52FA",
        secondary: "#837DFA",
      },
    },
  },
  plugins: [
    tailwindScrollbarHide,
    // Other plugins...
  ],
};
