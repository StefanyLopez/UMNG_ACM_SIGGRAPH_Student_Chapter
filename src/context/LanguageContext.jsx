import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../locales/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Intentar obtener el idioma del localStorage o usar el del navegador o por defecto 'es'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('app_language');
    if (savedLanguage) return savedLanguage;
    
    const browserLang = navigator.language.split('-')[0];
    return (browserLang === 'en' || browserLang === 'es') ? browserLang : 'es';
  });

  useEffect(() => {
    localStorage.setItem('app_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation debe usarse dentro de un LanguageProvider');
  }
  return context;
};
