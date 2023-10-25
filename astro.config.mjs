import { defineConfig } from "astro/config";

import basicSsl from "@vitejs/plugin-basic-ssl";
import storyblok from "@storyblok/astro";

import netlify from "@astrojs/netlify/functions";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import swup from '@swup/astro';

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

        Cover: "storyblok/page/Cover",
        PageTitle: "storyblok/page/Title",
        VideoBlok: "storyblok/page/Video",
        ListBlok: "storyblok/page/List",
        LatestWork: "storyblok/page/LatestWork",
        CallToAction: "storyblok/page/CallToAction",
        AccordionBlok: "storyblok/page/Accordion",
        SliderBlok: "storyblok/page/Slider",

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
    swup({ theme: false, globalInstance: true })
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
