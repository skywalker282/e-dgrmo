import React from 'react'
import ServicesGrid from '@/components/ServicesGrid'
import PaymentProcedure from '@/components/PaymentProcedure'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos services fiscaux
            </h1>
            <p className="text-xl text-gray-300">
              Informations complètes sur les taxes et procédures de paiement
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ServicesGrid />
            <PaymentProcedure />
          </div>
        </div>
      </div>
    </div>
  )
}