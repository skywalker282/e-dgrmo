'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const ContactSection = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-corporate">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">{t('contact-title')}</h2>
            <p className="section-subtitle">
              {t('contact-description')}
            </p>
          </div>
          
          <div className="card-corporate p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-dark-charcoal">{t('contact-info')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-2xl text-primary-blue">📍</div>
                    <div>
                      <h4 className="font-semibold text-dark-charcoal mb-1">Adresse</h4>
                      <p className="text-gray-600">{t('footer-address')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-2xl text-primary-blue">📞</div>
                    <div>
                      <h4 className="font-semibold text-dark-charcoal mb-1">Téléphone</h4>
                      <p className="text-gray-600">{t('footer-phone')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-2xl text-primary-blue">✉️</div>
                    <div>
                      <h4 className="font-semibold text-dark-charcoal mb-1">Email</h4>
                      <p className="text-gray-600">{t('footer-email')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-2xl text-primary-blue">🕒</div>
                    <div>
                      <h4 className="font-semibold text-dark-charcoal mb-1">Heures d'ouverture</h4>
                      <p className="text-gray-600">Lundi - Vendredi: 8h00 - 17h00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-dark-charcoal">{t('contact-message')}</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t('contact-name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t('contact-email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t('contact-message-placeholder')}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    {t('contact-send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection