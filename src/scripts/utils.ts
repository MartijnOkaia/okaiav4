import { useStoryblokApi } from '@storyblok/astro';

export const languages = {
  nl: "Nederlands",
  en: "English",
};

export const ui = {
  en: {},
  fr: {},
} as const;

export const defaultLang = "nl";
export const showDefaultLang = false;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export const fetchStories = async (contentType, language) => {

    const storyblokApi = useStoryblokApi();

    try {
        const { data } = await storyblokApi.get('cdn/stories', {
            version: process.env.PUBLIC_ENV !== 'production' ? 'draft' : 'published',
            content_type: contentType,
            language: language,
        });

        return data.stories;
    } catch (error) {
        console.error('Error fetching stories from Storyblok:', error);
        return []; // or handle the error as appropriate
    }
};