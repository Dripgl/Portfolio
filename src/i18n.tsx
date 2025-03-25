import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // <--- Importa il rilevatore

i18n
  .use(LanguageDetector) // <--- Usa il rilevatore di lingua
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: require("./locales/en.json") },
      it: { translation: require("./locales/it.json") },
    },
    fallbackLng: "en", // Se la lingua non è supportata, usa l'inglese
    interpolation: { escapeValue: false },
    detection: {
      order: ["navigator", "localStorage", "sessionStorage", "htmlTag"], // Ordine di rilevamento
      caches: ["localStorage", "sessionStorage"], // Memorizza la lingua scelta
    },
  });

export default i18n;
