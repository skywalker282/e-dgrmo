'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const FAQSection = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Comment puis-je payer mes taxes en ligne ?",
      answer: "Vous pouvez payer vos taxes en ligne en vous connectant à votre compte, en sélectionnant la taxe concernée, en calculant le montant et en choisissant votre méthode de paiement (mobile money, carte bancaire ou virement bancaire)."
    },
    {
      question: "Comment vérifier l'authenticité d'un reçu de paiement ?",
      answer: "Vous pouvez scanner le code QR sur le reçu avec votre téléphone ou entrer le numéro du reçu dans la section 'Vérification de reçu' de notre site pour confirmer son authenticité."
    },
    {
      question: "Quels documents dois-je fournir pour m'inscrire ?",
      answer: "Pour l'inscription individuelle, vous aurez besoin d'une pièce d'identité valide. Pour l'inscription d'entreprise, vous devrez fournir les documents d'enregistrement de votre entreprise et les informations fiscales pertinentes."
    },
    {
      question: "Combien de temps pour recevoir une réponse à une plainte ?",
      answer: "Nous nous engageons à répondre à toutes les plaintes dans un délai de 5 jours ouvrables. Vous pouvez suivre l'état d'avancement de votre plainte via votre tableau de bord."
    }
  ]

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-corporate">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('faq-title')}</h2>
          <p className="section-subtitle">
            {t('faq-description')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-white rounded-lg corporate-shadow flex justify-between items-center hover:corporate-shadow-lg transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-dark-charcoal">{faq.question}</span>
                <span className="text-primary-blue text-2xl font-bold">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white rounded-lg corporate-shadow mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection