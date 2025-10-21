import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "hindmost-amusedly-junko.ngrok-free.dev" // ✅ allow frontend tunnel
    ]
  }
});
