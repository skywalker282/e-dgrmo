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
      questionKey: "faq-question-1",
      answerKey: "faq-answer-1"
    },
    {
      questionKey: "faq-question-2",
      answerKey: "faq-answer-2"
    },
    {
      questionKey: "faq-question-3",
      answerKey: "faq-answer-3"
    },
    {
      questionKey: "faq-question-4",
      answerKey: "faq-answer-4"
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
                <span className="font-semibold text-dark-charcoal">{t(faq.questionKey)}</span>
                <span className="text-primary-blue text-2xl font-bold">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white rounded-lg corporate-shadow mt-1">
                  <p className="text-gray-600">{t(faq.answerKey)}</p>
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