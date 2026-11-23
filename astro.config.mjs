import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://iberiansun.es',
  vite: {
    plugins: [tailwindcss()],
  },
});
