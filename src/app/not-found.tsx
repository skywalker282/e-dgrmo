import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light-blue flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl font-bold text-primary-blue mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Page non trouvée
        </h1>
        <p className="text-gray mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-sm transition"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/contact"
            className="border border-primary-blue text-primary-blue hover:bg-blue-50 font-semibold py-3 px-6 rounded-sm transition"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  )
}