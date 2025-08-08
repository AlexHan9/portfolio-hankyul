/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { accent: "#0A84FF" },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
}
