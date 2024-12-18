import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    host: "::",
    middleware: [
      (req, res, next) => {
        // Handle client-side routing
        if (req.url.indexOf('.') === -1) {
          req.url = '/index.html';
        }
        next();
      }
    ]
  },
});