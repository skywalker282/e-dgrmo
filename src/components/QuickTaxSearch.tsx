'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const QuickTaxSearch = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-corporate">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">{t('quick-search-title')}</h2>
          <p className="section-subtitle text-center">{t('quick-search-description')}</p>
          
          <div className="card-corporate p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder={t('quick-search-placeholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
              <button className="btn-primary whitespace-nowrap">
                {t('quick-search-button')}
              </button>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-dark-charcoal">{t('quick-search-popular')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 corporate-border">
                  <h3 className="font-semibold text-dark-charcoal">Impôt sur le revenu</h3>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 corporate-border">
                  <h3 className="font-semibold text-dark-charcoal">Taxe foncière</h3>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 corporate-border">
                  <h3 className="font-semibold text-dark-charcoal">Taxe professionnelle</h3>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 corporate-border">
                  <h3 className="font-semibold text-dark-charcoal">TVA</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickTaxSearch