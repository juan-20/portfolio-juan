import { ui, deafultLanguage } from "./ui";

export function pegarLangDeURL(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return deafultLanguage;
}

export function usarTraducoes(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof deafultLanguage]) {
    return ui[lang][key] || ui[deafultLanguage][key];
  };
}
