import { createContext, ReactNode, useContext, useState } from "react";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import en from "../languages/en.json";
import pt from "../languages/pt.json";

interface LanguageProviderProps {
  children: ReactNode;
}

export interface LanguageContextInterface {
  text: I18n;
  toggleLanguage: () => void;
  locale: string;
}

const LanguageContext = createContext({} as LanguageContextInterface);

export default function LanguageProvider(props: LanguageProviderProps) {
  const { children } = props;
  const [locale, setLocale] = useState(Localization.locale);

  const translations = {
    "en-US": en,
    "pt-BR": pt,
  };
  const i18n = new I18n(translations);

  i18n.locale = locale;
  i18n.enableFallback = true;

  const toggleLanguage = () => {
    if (locale === "en-US") {
      setLocale("pt-BR");
    } else {
      setLocale("en-US");
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        text: i18n,
        toggleLanguage,
        locale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
