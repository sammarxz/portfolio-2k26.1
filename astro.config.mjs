// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sammarxz.com',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), react(), icon({
    iconDir: './src/assets/icons',
  }), sitemap()],
});