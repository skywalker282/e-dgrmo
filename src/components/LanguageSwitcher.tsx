'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation()

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'ln', name: 'Lingala' }
  ]

  const handleLanguageChange = (code: string) => {
    setLanguage(code as 'fr' | 'ln')
  }

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-sm py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue dark:bg-dark-navy dark:border-gray-700 dark:text-white"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        <span className="text-xs">▼</span>
      </div>
    </div>
  )
}

export default LanguageSwitcher