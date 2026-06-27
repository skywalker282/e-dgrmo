'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslation } from '@/contexts/TranslationContext'

const MobileAppPromotion = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gradient-to-r from-dark-navy to-dark-charcoal text-white">
      <div className="container-corporate">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-accent-gold text-dark-charcoal font-semibold rounded-full text-sm">
                {t('app-promo-badge')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('app-promo-title')}</h2>
            <p className="text-blue-100 mb-8 text-lg">
              {t('app-promo-description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-secondary flex items-center justify-center">
                <span className="mr-2 text-2xl">📱</span>
                <div className="text-left">
                  <div className="text-xs">Télécharger sur</div>
                  <div className="font-semibold text-lg">{t('app-store')}</div>
                </div>
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <span className="mr-2 text-2xl">🤖</span>
                <div className="text-left">
                  <div className="text-xs">Disponible sur</div>
                  <div className="font-semibold text-lg">{t('google-play')}</div>
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden corporate-shadow-xl">
                <Image 
                  src="/mobileapp.png" 
                  alt={t('mobile-app-image-alt')}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent-gold bg-opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-secondary-blue bg-opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppPromotion