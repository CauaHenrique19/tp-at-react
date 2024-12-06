import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/at-tp-react/",
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
});
