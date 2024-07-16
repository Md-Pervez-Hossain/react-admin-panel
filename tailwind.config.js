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
        primary: "#006B77",
        secondary: "#fbb14e",
        tertiary: "#f08d76",
      },
    },
  },
  plugins: [
    tailwindScrollbarHide,
    // Other plugins...
  ],
};
