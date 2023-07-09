/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      primary: "#007AFF",
      background: "#F7F7F9",
    },
    extend: {
      boxShadow: {
        logoShadow: "0px 4px 8px",
      },
    },
  },
  plugins: [],
};
