'use client'

import React from 'react'

const VerificationResult = ({ verificationResult }: { verificationResult: any }) => {
  return (
    <div className="bg-white rounded-sm shadow-md p-8">
      <h2 className="text-xl font-bold mb-6">Résultat de vérification</h2>
      
      {verificationResult ? (
        <div className="space-y-4">
          <div className={`p-4 rounded-sm ${
            verificationResult.isValid 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center">
              <span className="text-2xl mr-2">
                {verificationResult.isValid ? '✅' : '❌'}
              </span>
              <span className={`font-bold ${
                verificationResult.isValid ? 'text-green-800' : 'text-red-800'
              }`}>
                {verificationResult.isValid ? 'Reçu valide' : 'Reçu invalide'}
              </span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-sm p-4">
            <h3 className="font-bold mb-3">Détails du reçu</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray">Numéro de reçu:</span>
                <span className="font-medium">{verificationResult.receiptNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Montant:</span>
                <span className="font-medium">{verificationResult.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Type de taxe:</span>
                <span className="font-medium">{verificationResult.taxType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Date de paiement:</span>
                <span className="font-medium">{verificationResult.paymentDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Contribuable:</span>
                <span className="font-medium">{verificationResult.taxpayerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Statut:</span>
                <span className="font-medium text-green-600">{verificationResult.status}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <button className="flex-1 bg-primary-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm">
              Télécharger PDF
            </button>
            <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-sm">
              Imprimer
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📄</div>
          <p className="text-gray">
            Les résultats de vérification apparaîtront ici
          </p>
        </div>
      )}
    </div>
  )
}

export default VerificationResult