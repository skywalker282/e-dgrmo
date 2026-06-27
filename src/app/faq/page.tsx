'use client'

import React, { useState } from 'react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqCategories = [
    {
      title: 'Questions générales',
      faqs: [
        {
          question: "Qu'est-ce que le portail E-DGRMO ?",
          answer: 'Le portail E-DGRMO est la plateforme en ligne officielle de la Direction Générale des Recettes de la Mongala. Il permet aux contribuables de payer leurs taxes, vérifier leurs reçus, déposer des plaintes et accéder à divers services fiscaux en ligne.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Questions fréquemment posées
            </h1>
            <p className="text-xl text-gray-300">
              Trouvez des réponses aux questions les plus courantes
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-3xl font-bold mb-8 text-center">{category.title}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex
                      return (
                        <div key={faqIndex} className="border border-gray-200 rounded-sm">
                          <button
                            className="w-full text-left p-6 bg-white flex justify-between items-center"
                            onClick={() => toggleFAQ(globalIndex)}
                          >
                            <span className="font-semibold text-lg">{faq.question}</span>
                            <span className="text-primary-blue text-2xl">
                              {openIndex === globalIndex ? '−' : '+'}
                            </span>
                          </button>
                          {openIndex === globalIndex && (
                            <div className="p-6 bg-white border-t border-gray-200">
                              <p className="text-gray">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}