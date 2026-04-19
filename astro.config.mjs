// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cricke98.github.io',
  base: '/gonzaga-rentals',
  vite: {
    plugins: [tailwindcss()]
  }
});