/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,md}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('luokui'),
    require('tailwindcss')
  ],
}
