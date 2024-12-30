/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_background: "#605DEC",
        primary_text: "#F6F6FE",
        nav_list_item: "#7C8DB0",
        button_color: "#FAFAFA",
        border_color: "#cbd4e6",
      },
    },
  },
  plugins: [],
};
