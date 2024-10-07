/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@ionic/react/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
