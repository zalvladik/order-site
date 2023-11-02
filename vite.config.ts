import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        banner: `export const VITE_URL_BY_BACKEND = "${process.env.VITE_URL_BY_BACKEND}";`,
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
