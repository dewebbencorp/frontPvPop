/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@ionic/react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        myFriend: {
          900: "#106F7B",
          800: "#1C878F",
          700: "#2BA0A3",
          600: "#3AAAA8",
          500: "#57BDBC",
          400: "#71C5C3",
          300: "#92D0D0",
          200: "#ADDBDC",
          100: "#CBE7E8",
        },
        disabled: "#D9D9D9",
        text: "#1F1D2B",
        subtext: "#FFFFFF",
        background: "#F0F8FF",
  
        button: {
          primary: "#1C878F",
          secondary: "#858280",
          success: "#03BB85",
          danger: "#A91D3A",
          warning: "#F3B24A",
          info: "#4699DD",
        },
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
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-.*/,
      variants: ["responsive", "hover", "focus", "active"],
    },
  ],
};
