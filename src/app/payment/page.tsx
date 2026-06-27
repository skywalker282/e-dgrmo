'use client'

import React from 'react'
import PaymentForm from '@/components/PaymentForm'
import PaymentSummary from '@/components/PaymentSummary'

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-light-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Paiement en ligne
          </h1>
          <p className="text-gray">
            Effectuez vos paiements fiscaux en toute sécurité
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PaymentForm />
          </div>
          <div>
            <PaymentSummary />
          </div>
        </div>
      </div>
    </div>
  )
}