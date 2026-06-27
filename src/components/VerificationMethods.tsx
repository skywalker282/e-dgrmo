'use client'

import React, { useState } from 'react'

const VerificationMethods = () => {
  const [verificationMethod, setVerificationMethod] = useState<'qr' | 'number'>('qr')
  const [receiptNumber, setReceiptNumber] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)

  const handleQRScan = () => {
    // In a real app, this would trigger the camera to scan a QR code
    alert('QR code scanner would open here')
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    
    // Simulate API call
    setTimeout(() => {
      // Mock verification result
      setIsVerifying(false)
    }, 1500)
  }

  return (
    <div className="bg-white rounded-sm shadow-md p-8">
      <h2 className="text-xl font-bold mb-6">Méthode de vérification</h2>
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setVerificationMethod('qr')}
          className={`px-4 py-2 rounded-sm ${
            verificationMethod === 'qr'
              ? 'bg-primary-blue text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Scanner QR Code
        </button>
        <button
          onClick={() => setVerificationMethod('number')}
          className={`px-4 py-2 rounded-sm ${
            verificationMethod === 'number'
              ? 'bg-primary-blue text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Numéro de reçu
        </button>
      </div>

      {verificationMethod === 'qr' ? (
        <div className="text-center py-8">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4">
            <div className="text-6xl mb-4">📱</div>
            <p className="text-gray mb-4">
              Pointez votre appareil photo sur le code QR du reçu
            </p>
            <button
              onClick={handleQRScan}
              className="bg-primary-blue hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-sm"
            >
              Ouvrir le scanner
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Numéro de reçu
            </label>
            <input
              type="text"
              value={receiptNumber}
              onChange={(e) => setReceiptNumber(e.target.value)}
              placeholder="Entrez le numéro de reçu"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              required
            />
            <p className="mt-1 text-sm text-gray">
              Format: REC-AAAA-XXXXXX (ex: REC-2026-001234)
            </p>
          </div>

          <div>
            <button
              type="submit"
              disabled={isVerifying}
              className="w-full bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-sm disabled:opacity-50"
            >
              {isVerifying ? 'Vérification en cours...' : 'Vérifier le reçu'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default VerificationMethods