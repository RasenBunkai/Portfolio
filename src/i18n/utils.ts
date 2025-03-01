import {ui, defaultLang} from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function translate(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function translate(key: keyof (typeof ui)[typeof defaultLang]) {
  const lang = document.documentElement.lang as keyof typeof ui;
  return ui[lang][key] || ui[defaultLang][key];
}
