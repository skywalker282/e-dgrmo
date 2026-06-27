'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowConsent(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-4">
            <p className="text-gray-700">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              En continuant à naviguer, vous acceptez notre{' '}
              <Link href="/privacy" className="text-primary-blue hover:underline">
                politique de confidentialité
              </Link>.
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-sm"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-primary-blue text-white rounded-sm hover:bg-blue-700"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent