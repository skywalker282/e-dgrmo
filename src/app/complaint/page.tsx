'use client'

import React from 'react'
import ComplaintForm from '@/components/ComplaintForm'
import { useTranslation } from '@/contexts/TranslationContext'

export default function ComplaintPage() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen bg-light-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('complaint-page-title')}
          </h1>
          <p className="text-gray">
            {t('complaint-page-description')}
          </p>
        </div>

        <div className="bg-white rounded-sm shadow-md p-8">
          <ComplaintForm />
        </div>
      </div>
    </div>
  )
}