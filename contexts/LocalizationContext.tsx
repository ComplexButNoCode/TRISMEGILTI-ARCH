
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, LanguageStrings } from '../lib/translations';

type LocalizationContextType = {
  t: LanguageStrings;
  lang: 'en' | 'pt';
};

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<'en' | 'pt'>('en');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt') {
      setLang('pt');
      document.documentElement.lang = 'pt-BR';
    } else {
      setLang('en');
      document.documentElement.lang = 'en';
    }
  }, []);

  const t = translations[lang];

  return (
    <LocalizationContext.Provider value={{ t, lang }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
