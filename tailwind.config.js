/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@ionic/react/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#20B2AA', // Verde para el encabezado y botones
        secondary: '#FF6347', // Rojo para el botón de limpiar
        tableBackground: '#F5F5F5', // Fondo de la tabla
        tableHeader: '#20B2AA', // Fondo del encabezado de la tabla
        tableBorder: '#E0E0E0', // Bordes de la tabla
        actionIconBg: {
          blue: '#007BFF',
          red: '#FF6347',
          green: '#28A745',
          yellow: '#FFC107',
        },
      },
    },
  },
  plugins: [],
}
