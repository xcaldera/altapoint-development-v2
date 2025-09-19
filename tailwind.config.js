/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#112240',
        accent: '#64ffda',
        highlight: '#e0f7fa',
      },
      fontFamily: {
        'big-shoulders': ['Big Shoulders Display', 'cursive'],
      },
    },
  },
  plugins: [],
};
