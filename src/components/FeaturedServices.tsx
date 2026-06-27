'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const FeaturedServices = () => {
  const { t } = useTranslation()

  const services = [
    {
      title: "Paiement en ligne",
      description: "Effectuez vos paiements fiscaux en toute sécurité via mobile money, carte bancaire ou virement bancaire",
      icon: "💳"
    },
    {
      title: "Reçus électroniques",
      description: "Téléchargez et vérifiez vos reçus de paiement en un clic avec notre système de QR code",
      icon: "📄"
    },
    {
      title: "Suivi des plaintes",
      description: "Déposez et suivez vos plaintes en ligne avec un système de notification en temps réel",
      icon: "📝"
    },
    {
      title: "Calculateur de taxes",
      description: "Calculez automatiquement le montant de vos obligations fiscales",
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
              <h3 className="text-xl font-bold mb-3 text-dark-charcoal">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
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