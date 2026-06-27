'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const CorporateTestimonials = () => {
  const { t } = useTranslation()

  const testimonials = [
    {
      quote: t('testimonial-1-quote'),
      author: t('testimonial-1-author'),
      position: t('testimonial-1-position'),
      company: t('testimonial-1-company'),
    },
    {
      quote: t('testimonial-2-quote'),
      author: t('testimonial-2-author'),
      position: t('testimonial-2-position'),
      company: t('testimonial-2-company'),
    },
    {
      quote: t('testimonial-3-quote'),
      author: t('testimonial-3-author'),
      position: t('testimonial-3-position'),
      company: t('testimonial-3-company'),
    },
  ]

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-corporate">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('testimonials-title')}</h2>
          <p className="section-subtitle">
            {t('testimonials-subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-corporate p-8">
              <div className="text-4xl text-primary-blue mb-4">❝</div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <div className="font-bold text-dark-charcoal">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-primary-blue">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CorporateTestimonials