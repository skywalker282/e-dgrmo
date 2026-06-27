'use client'

import React from 'react'
import Link from 'next/link'

const TermsAndSubmit = () => {
  return (
    <>
      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray">
          J'accepte les{' '}
          <Link href="/terms" className="font-medium text-primary-blue hover:text-blue-700">
            conditions d'utilisation
          </Link>{' '}
          et la{' '}
          <Link href="/privacy" className="font-medium text-primary-blue hover:text-blue-700">
            politique de confidentialité
          </Link>
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
        >
          Créer un compte
        </button>
      </div>
    </>
  )
}

export default TermsAndSubmit