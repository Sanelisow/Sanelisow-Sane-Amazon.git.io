module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./src/**/*.html','./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

// './src/**/*.html','./src/**/*.js'