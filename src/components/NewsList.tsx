import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const NewsList = () => {
  const { t } = useTranslation()
  
  const newsItems = [
    {
      id: 1,
      date: "15 Juin 2026",
      title: "Nouveau système de paiement mobile lancé",
      excerpt: "Nous sommes ravis d'annoncer le lancement de notre nouveau système de paiement mobile qui permet aux contribuables de payer leurs taxes en quelques secondes via leur téléphone.",
      categoryKey: "news-category-news"
    },
    {
      id: 2,
      date: "10 Juin 2026",
      title: "Extension des heures d'ouverture du service client",
      excerpt: "Le service client est maintenant disponible 24/7 pour mieux vous servir et répondre à vos questions fiscales à tout moment.",
      categoryKey: "news-category-services"
    },
    {
      id: 3,
      date: "5 Juin 2026",
      title: "Simplification des formulaires fiscaux",
      excerpt: "Nous avons réduit de 40% le nombre de champs requis dans nos formulaires fiscaux pour une expérience plus rapide et plus simple.",
      categoryKey: "news-category-reforms"
    },
    {
      id: 4,
      date: "1er Juin 2026",
      title: "Nouvelle fonctionnalité de calcul automatique des taxes",
      excerpt: "Notre nouveau calculateur intelligent détermine automatiquement le montant de vos obligations fiscales en fonction de vos réponses.",
      categoryKey: "news-category-technology"
    },
    {
      id: 5,
      date: "25 Mai 2026",
      title: "Campagne de sensibilisation fiscale dans les communautés rurales",
      excerpt: "Une série d'ateliers et de séances d'information seront organisés dans les zones rurales pour améliorer la compréhension des obligations fiscales.",
      categoryKey: "news-category-awareness"
    },
    {
      id: 6,
      date: "20 Mai 2026",
      title: "Partenariat avec les institutions financières locales",
      excerpt: "De nouveaux points de paiement sont maintenant disponibles grâce à notre partenariat avec les banques et les institutions financières locales.",
      categoryKey: "news-category-partnerships"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsItems.map((item) => (
        <div key={item.id} className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-100">
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-semibold px-2 py-1 bg-light-blue text-primary-blue rounded-sm">
                {t(item.categoryKey)}
              </span>
              <span className="text-sm text-gray">{item.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray mb-4">{item.excerpt}</p>
            <button className="text-primary-blue font-semibold hover:underline">
              {t('read-more')} →
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsList