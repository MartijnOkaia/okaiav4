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
        work: "storyblok/Case",
        // testimonial: "storyblok/Testimonial",

        Accordion: "storyblok/page/Accordion",
        CallToAction: "storyblok/page/CallToAction",
        Cases: "storyblok/page/Cases",
        Cover: "storyblok/page/Cover",
        Grid: "storyblok/page/Grid",
        HoverList: "storyblok/page/HoverList",
        List: "storyblok/page/List",
        Logos: "storyblok/page/Logos",
        Media: "storyblok/page/Media",
        Scroller: "storyblok/page/Scroller",
        Shapes: "storyblok/page/Shapes",
        SliderCards: "storyblok/page/SliderCards",
        SliderCases: "storyblok/page/SliderCases",
        SliderImages: "storyblok/page/SliderImages",
        Team: "storyblok/page/Team",
        Testimonials: "storyblok/page/Testimonials",
        Title: "storyblok/page/Title",
        Text: "storyblok/page/Text",
        TextMedia: "storyblok/page/TextMedia",

        DoubleMedia: "storyblok/case/DoubleMedia",
        FullwidthMedia: "storyblok/case/FullwidthMedia",
        CaseCallToAction: "storyblok/case/CaseCallToAction",
        CaseInfo: "storyblok/case/CaseInfo",
        CaseText: "storyblok/case/CaseText",
        Marquee: "storyblok/case/Marquee",
        Parallax: "storyblok/case/Parallax",
        Quote: "storyblok/case/Quote",

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
    swup({ 
      theme: false,
      globalInstance: true,
      containers: ['main', 'header'],
      native: true
    })
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
