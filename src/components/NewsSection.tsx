'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const NewsSection = () => {
  const { t } = useTranslation()

  const newsItems = [
    {
      date: "15 Juin 2026",
      title: "Nouveau système de paiement mobile lancé",
      excerpt: "Nous sommes ravis d'annoncer le lancement de notre nouveau système de paiement mobile qui permet aux contribuables de payer leurs taxes en quelques secondes via leur téléphone."
    },
    {
      date: "10 Juin 2026",
      title: "Extension des heures d'ouverture du service client",
      excerpt: "Le service client est maintenant disponible 24/7 pour mieux vous servir et répondre à vos questions fiscales à tout moment."
    },
    {
      date: "5 Juin 2026",
      title: "Simplification des formulaires fiscaux",
      excerpt: "Nous avons réduit de 40% le nombre de champs requis dans nos formulaires fiscaux pour une expérience plus rapide et plus simple."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-corporate">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="section-title mb-2">{t('news-title')}</h2>
            <p className="text-gray-600 text-xl">{t('news-description')}</p>
          </div>
          <button className="btn-secondary whitespace-nowrap">
            {t('news-see-all')}
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="card-corporate overflow-hidden h-full flex flex-col">
              <div className="p-6 flex-grow">
                <div className="text-gray-500 text-sm mb-3">{item.date}</div>
                <h3 className="text-xl font-bold mb-3 text-dark-charcoal">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-primary-blue font-semibold hover:underline transition-colors duration-300 inline-flex items-center">
                  {t('learn-more')} <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection