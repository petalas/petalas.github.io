import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        manualChunks: undefined,
      },
    },
    assetsInlineLimit: 0, // Prevent inlining of any assets
  },
});
