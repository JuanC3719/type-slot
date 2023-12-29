// vite.config.js
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  build: {
    outDir: "dist", // Specify the output directory for the build artifacts
  },
};
