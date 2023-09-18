import { defineConfig } from 'astro/config';

import basicSsl from '@vitejs/plugin-basic-ssl';
import storyblok from '@storyblok/astro';

import netlify from "@astrojs/netlify/functions";

import tailwind from "@astrojs/tailwind";

import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  output: process.env.PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: process.env.PUBLIC_ENV === 'preview' ? netlify() : undefined,
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: process.env.PUBLIC_ENV !== 'production',
    components: {
      page: 'storyblok/Page',
      work: 'storyblok/Work',
      
      title: 'storyblok/Title',
      video: 'storyblok/Video',
      list: 'storyblok/List',
      latestWork: 'storyblok/LatestWork',
      callToAction: 'storyblok/CallToAction',
      accordion: 'storyblok/Accordion',
      slider: 'storyblok/Slider'

    }
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});