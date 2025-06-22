import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    port: 3000,          // use a different port if 5173 is stuck
    strictPort: true,    // fail if port is in use
    open: true,          // open browser on start
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
});
