import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  // GitHub Pages serves the site from /mcu/.
  base: '/mcu/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  worker: { format: 'es' },
  build: {
    chunkSizeWarningLimit: 1400,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/src/content/')) return 'content';
          if (/node_modules\/(react|react-dom|scheduler|zustand)\//.test(id)) return 'vendor-react';
          if (/node_modules\/(@radix-ui|cmdk|lucide-react)\//.test(id)) return 'vendor-ui';
        },
      },
    },
  },
});
