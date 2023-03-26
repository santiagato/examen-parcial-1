/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","*.html","*.css",
  "./node_modules/flowbite/**/*.js" 
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}