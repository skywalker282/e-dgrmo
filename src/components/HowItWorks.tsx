'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const HowItWorks = () => {
  const { t } = useTranslation()

  const steps = [
    {
      number: "1",
      title: "Sélectionnez votre taxe",
      description: "Choisissez parmi notre liste de taxes ou utilisez la recherche pour trouver votre obligation fiscale"
    },
    {
      number: "2",
      title: "Calculez le montant",
      description: "Notre calculateur automatique détermine le montant exact de votre paiement"
    },
    {
      number: "3",
      title: "Procédez au paiement",
      description: "Payez en toute sécurité via mobile money, carte bancaire ou virement bancaire"
    },
    {
      number: "4",
      title: "Recevez votre reçu",
      description: "Téléchargez votre reçu électronique et vérifiez son authenticité via QR code"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-corporate">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('how-it-works-title')}</h2>
          <p className="section-subtitle">
            {t('how-it-works-description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center card-corporate p-6">
              <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark-charcoal">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks