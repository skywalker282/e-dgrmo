'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import frenchTranslations from '@/locales/french'
import lingalaTranslations from '@/locales/lingala'

type Language = 'fr' | 'ln'

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const translations = {
  fr: frenchTranslations,
  ln: lingalaTranslations,
} as const

type Translations = typeof translations[Language]
type TranslationKey = keyof Translations

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr')

  const t = (key: string): string => {
    const typedKey = key as TranslationKey
    return translations[language][typedKey] || key
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}