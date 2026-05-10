import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: false,
      },
    },
    assetsInlineLimit: 0, // Prevent inlining of any assets
  },
});
