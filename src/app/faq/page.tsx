'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

export default function FAQPage() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqCategories = [
    {
      titleKey: 'faq-general-questions',
      faqs: [
        {
          questionKey: 'faq-what-is-edgrmo',
          answerKey: 'faq-what-is-edgrmo-answer'
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
              {t('faq-page-title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('faq-page-description')}
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
                  <h2 className="text-3xl font-bold mb-8 text-center">{t(category.titleKey)}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex
                      return (
                        <div key={faqIndex} className="border border-gray-200 rounded-sm">
                          <button
                            className="w-full text-left p-6 bg-white flex justify-between items-center"
                            onClick={() => toggleFAQ(globalIndex)}
                          >
                            <span className="font-semibold text-lg">{t(faq.questionKey)}</span>
                            <span className="text-primary-blue text-2xl">
                              {openIndex === globalIndex ? '−' : '+'}
                            </span>
                          </button>
                          {openIndex === globalIndex && (
                            <div className="p-6 bg-white border-t border-gray-200">
                              <p className="text-gray">{t(faq.answerKey)}</p>
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