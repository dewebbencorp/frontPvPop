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
      },
      boxShadow: {
        'general': '0px 8px 8px -4px rgba(0, 0, 0, 0.35)',
      },
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
