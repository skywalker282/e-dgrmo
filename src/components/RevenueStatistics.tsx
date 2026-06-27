'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const RevenueStatistics = () => {
  const { t } = useTranslation()

  const stats = [
    { value: "2.4M", label: "Francs collectés aujourd'hui" },
    { value: "18.7M", label: "Francs collectés ce mois" },
    { value: "124M", label: "Francs collectés cette année" },
    { value: "89%", label: "Taux de satisfaction" }
  ]

  return (
    <section className="py-16 bg-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('revenue-stats-title')}</h2>
          <p className="text-gray max-w-2xl mx-auto">
            {t('revenue-stats-description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-sm shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">{stat.value}</div>
              <div className="text-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RevenueStatistics