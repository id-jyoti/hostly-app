// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      threshold: 10240, // compress files > 10KB
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  build: {
    target: 'esnext',
    minify: true,
    outDir: 'dist',
    sourcemap: false,
  },
});
