import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from "@astrojs/netlify/functions";
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwind from "@astrojs/tailwind";
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  output: process.env.PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: process.env.PUBLIC_ENV === 'preview' ? netlify() : undefined,
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: process.env.PUBLIC_ENV !== 'production',
    components: {
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      page: 'storyblok/Page'
    }
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});