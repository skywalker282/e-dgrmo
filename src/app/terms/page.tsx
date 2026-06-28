'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

export default function TermsPage() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('terms-title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('terms-description')}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-sm shadow-md p-8">
              <div className="prose max-w-none">
                <p className="text-gray mb-6">
                  {t('terms-intro')}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('terms-acceptance-title')}</h2>
                <p className="text-gray mb-6">
                  {t('terms-acceptance-content')}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('terms-services-title')}</h2>
                <p className="text-gray mb-4">
                  {t('terms-services-intro')}
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>{t('terms-service-1')}</li>
                  <li>{t('terms-service-2')}</li>
                  <li>{t('terms-service-3')}</li>
                  <li>{t('terms-service-4')}</li>
                  <li>{t('terms-service-5')}</li>
                  <li>{t('terms-service-6')}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('terms-obligations-title')}</h2>
                <p className="text-gray mb-4">
                  {t('terms-obligations-intro')}
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>{t('terms-obligation-1')}</li>
                  <li>{t('terms-obligation-2')}</li>
                  <li>{t('terms-obligation-3')}</li>
                  <li>{t('terms-obligation-4')}</li>
                  <li>{t('terms-obligation-5')}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('terms-intellectual-property-title')}</h2>
                <p className="text-gray mb-6">
                  {t('terms-intellectual-property-content')}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('terms-liability-title')}</h2>
                <p className="text-gray mb-6">
                  {t('terms-liability-content')}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('terms-security-title')}</h2>
                <p className="text-gray mb-6">
                  {t('terms-security-content')}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('terms-modifications-title')}</h2>
                <p className="text-gray mb-6">
                  {t('terms-modifications-content')}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('terms-applicable-law-title')}</h2>
                <p className="text-gray mb-6">
                  {t('terms-applicable-law-content')}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray">
                    <strong>{t('terms-last-update')}:</strong> Juin 2026
                  </p>
                  <p className="text-gray mt-2">
                    {t('terms-contact-intro')}{" "}
                    <a href="mailto:legal@dgrmo.cd" className="text-primary-blue hover:underline">
                      legal@dgrmo.cd
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}