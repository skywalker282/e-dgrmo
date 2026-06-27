'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const ValueProposition = () => {
  const { t } = useTranslation()

  const values = [
    {
      title: t('value-transparency'),
      description: t('value-transparency-desc'),
      icon: '🔍',
    },
    {
      title: t('value-efficiency'),
      description: t('value-efficiency-desc'),
      icon: '⚡',
    },
    {
      title: t('value-security'),
      description: t('value-security-desc'),
      icon: '🔒',
    },
    {
      title: t('value-accessibility'),
      description: t('value-accessibility-desc'),
      icon: '🌐',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-corporate">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('value-proposition-title')}</h2>
          <p className="section-subtitle">
            {t('value-proposition-subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card-corporate p-6 text-center">
              <div className="text-4xl mb-4 text-primary-blue">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-dark-charcoal">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition