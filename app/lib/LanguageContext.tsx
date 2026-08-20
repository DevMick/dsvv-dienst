'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, Language, Translations } from './translations'

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('nl')

  useEffect(() => {
    const stored = window.localStorage.getItem('lang')
    if (stored === 'nl' || stored === 'fr') {
      setLangState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  const setLang = (next: Language) => {
    setLangState(next)
    window.localStorage.setItem('lang', next)
    document.documentElement.lang = next
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
