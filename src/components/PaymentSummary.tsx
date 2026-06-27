'use client'

import React, { useState } from 'react'

const PaymentSummary = () => {
  const [selectedTax, setSelectedTax] = useState('')
  const [amount, setAmount] = useState('')

  const taxes = [
    { id: 'income', name: 'Impôt sur le revenu' },
    { id: 'property', name: 'Taxe foncière' },
    { id: 'business', name: 'Taxe professionnelle' },
    { id: 'vat', name: 'TVA' },
    { id: 'vehicle', name: 'Taxe sur les véhicules' },
  ]

  return (
    <div>
      <div className="bg-white rounded-sm shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Résumé du paiement</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray">Taxe sélectionnée:</span>
            <span className="font-medium">
              {selectedTax 
                ? taxes.find(t => t.id === selectedTax)?.name 
                : 'Aucune'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray">Montant:</span>
            <span className="font-medium">
              {amount ? `${amount} FC` : '0 FC'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray">Frais de transaction:</span>
            <span className="font-medium">0 FC</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4 flex justify-between">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold">
              {amount ? `${amount} FC` : '0 FC'}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-sm p-6">
        <h2 className="text-xl font-bold mb-4">Sécurité des paiements</h2>
        <ul className="space-y-2 text-sm text-green-800">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">🔒</span>
            <span>Paiements sécurisés par cryptage 256-bit</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">🛡️</span>
            <span>Conformité PCI DSS</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>Authentification à deux facteurs</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">🛡️</span>
            <span>Protection contre la fraude</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PaymentSummary