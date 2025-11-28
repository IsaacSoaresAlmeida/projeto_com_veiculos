/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00AEEF',
        navy: '#003A63',
        green: '#00C853',
        yellow: '#FFB300',
        red: '#D32F2F'
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px'
      }
    },
  },
  plugins: [],
}