'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const FeaturedServices = () => {
  const { t } = useTranslation()

  const services = [
    {
      titleKey: "featured-service-1-title",
      descriptionKey: "featured-service-1-description",
      icon: "💳"
    },
    {
      titleKey: "featured-service-2-title",
      descriptionKey: "featured-service-2-description",
      icon: "📄"
    },
    {
      titleKey: "featured-service-3-title",
      descriptionKey: "featured-service-3-description",
      icon: "📝"
    },
    {
      titleKey: "featured-service-4-title",
      descriptionKey: "featured-service-4-description",
      icon: "🧮"
    }
  ]

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-corporate">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('featured-services-title')}</h2>
          <p className="section-subtitle">
            {t('featured-services-description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-corporate p-6 h-full flex flex-col">
              <div className="text-4xl mb-4 text-primary-blue">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-dark-charcoal">{t(service.titleKey)}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{t(service.descriptionKey)}</p>
              <button className="mt-auto text-primary-blue font-semibold hover:underline transition-colors duration-300 inline-flex items-center">
                {t('learn-more')} <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices