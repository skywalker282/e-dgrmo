'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslation } from '@/contexts/TranslationContext'

const PaymentShowcase = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-corporate">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title mb-6">{t('payment-showcase-title')}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('payment-showcase-description')}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary-blue text-xl mr-3">✓</span>
                <span className="text-gray-700">{t('payment-benefit-1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue text-xl mr-3">✓</span>
                <span className="text-gray-700">{t('payment-benefit-2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue text-xl mr-3">✓</span>
                <span className="text-gray-700">{t('payment-benefit-3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue text-xl mr-3">✓</span>
                <span className="text-gray-700">{t('payment-benefit-4')}</span>
              </li>
            </ul>
            <button className="btn-primary">
              {t('payment-get-started')}
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden corporate-shadow-xl">
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image 
                  src="/Paiement-Section.png" 
                  alt={t('payment-section-image-alt')}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentShowcase