import { defineConfig } from "astro/config";

import basicSsl from "@vitejs/plugin-basic-ssl";
import storyblok from "@storyblok/astro";

import netlify from "@astrojs/netlify/functions";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import { loadEnv } from "vite";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  output: process.env.PUBLIC_ENV === "preview" ? "server" : "static",
  adapter: process.env.PUBLIC_ENV === "preview" ? netlify() : undefined,
  site: "https://okaia.dev",
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: process.env.PUBLIC_ENV !== "production",
      components: {

        page: "storyblok/Page",
        work: "storyblok/Work",

        title: "storyblok/page/Title",
        video: "storyblok/page/Video",
        list: "storyblok/page/List",
        latestWork: "storyblok/page/LatestWork",
        callToAction: "storyblok/page/CallToAction",
        accordion: "storyblok/page/Accordion",
        slider: "storyblok/page/Slider",

      },
    }),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: process.env.PUBLIC_ENV !== "production" ? "/" : "",
        },
      ],
    }),
    tailwind(),
    sitemap(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
