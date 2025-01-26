import { defaultLang } from "../i18n/ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ["en", "ja", "fr"]) return lang;
  return defaultLang;
}
