/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'yellow': {
        400: '#f8edeb',
      },
      'orange': {
        300: '#DFA06E',
      },
      'brown': {
        700: '#412722'
      },
      'red': {
        100: '#222',
        500: '#DF2935',
        300: '#ef233c',
        700: '#d90429'
      },
      'green': {
        400: '#86BA90'
      },
      'grey': {
        300: '#8d99ae'
      },
      'peach': {
        100: '#fae1dd'
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'playfair': ['Playfair Display', 'serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  keyframes: {
    shimmer: {
      from: {
        backgroundPosition: "0 0",
      },
      to: {
        backgroundPosition: "-200% 0",
      },
    },
  },
  plugins: [],
}
}

