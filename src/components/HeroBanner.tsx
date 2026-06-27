'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const HeroBanner = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-gradient-to-r from-dark-navy to-dark-charcoal text-white py-24">
      <div className="container-corporate px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-accent-gold text-dark-charcoal font-semibold rounded-full text-sm mb-4">
              {t('hero-badge')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero-title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero-description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">
              {t('hero-cta-primary')}
            </button>
            <button className="btn-secondary">
              {t('hero-cta-secondary')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner