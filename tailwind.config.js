module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'austin-hero': "url('../public/AUSTIN-HEADER.png')",
      }
    },
  },
  plugins: [],
}
