/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: ['hover', 'active', 'focus']
    },
  },
  plugins: [],
}

