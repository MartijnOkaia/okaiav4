import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from "@astrojs/netlify/functions";
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
    output: "server",
    adapter: netlify(),
    integrations: [
        storyblok({
        accessToken: env.STORYBLOK_TOKEN,
        bridge: true,
        components: {
            blogPost: 'storyblok/BlogPost',
            blogPostList: 'storyblok/BlogPostList',
            page: 'storyblok/Page',
        }
        })
    ],
    vite: {
        plugins: [basicSsl()],
        server: {
            https: true,
        },
    },
});