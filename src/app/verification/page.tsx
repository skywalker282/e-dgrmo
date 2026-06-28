'use client'

import React, { useState } from 'react'
import VerificationMethods from '@/components/VerificationMethods'
import VerificationResult from '@/components/VerificationResult'
import { useTranslation } from '@/contexts/TranslationContext'

export default function VerificationPage() {
  const { t } = useTranslation()
  const [verificationResult, setVerificationResult] = useState<any>(null)

  return (
    <div className="min-h-screen bg-light-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('verification-page-title')}
          </h1>
          <p className="text-gray">
            {t('verification-page-description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VerificationMethods />
          <VerificationResult verificationResult={verificationResult} />
        </div>
      </div>
    </div>
  )
}