import i18n from "i18next";
import Backend from 'i18next-http-backend'
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";




i18n
  .use(Backend)
  .use(LanguageDetector) // add language detector
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    backend:{
        loadPath:"/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    debug: false,
    ns:["slider", "meal"],
    interpolation: {
      escapeValue: false,
      formatSeparator:","
    },
    react:{
        useSuspense:true,
    },
  });

export default i18n;
