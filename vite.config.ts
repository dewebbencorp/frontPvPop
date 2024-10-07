import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {},
    preprocessorOptions: {
      css: {
        include: /src/, // Solo procesa CSS en el directorio src
        exclude: /node_modules/, // Excluye node_modules del procesamiento CSS
      },
    },
  },
});
