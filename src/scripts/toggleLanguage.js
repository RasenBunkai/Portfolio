// filepath: /c:/Users/sanji/Portfolio/src/scripts/toggleLanguage.js
import { useTranslations } from "../i18n/utils";

export function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "en" ? "es" : "en";
  document.documentElement.lang = newLang;

  // Recargar las traducciones
  const t = useTranslations(newLang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) {
      el.textContent = t(key);
    }
  });

  console.log("Language toggled");
}
