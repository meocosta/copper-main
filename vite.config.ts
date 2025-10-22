import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: {
    extensions: ['.js', '.ts', '.svelte'], // força reconhecer .svelte
  },
  ssr: {
    noExternal: ['bits-ui'], // garante que bits-ui seja compilado pelo Vite
  }
});
