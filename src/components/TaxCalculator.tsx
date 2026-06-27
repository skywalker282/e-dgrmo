'use client'

import React, { useState } from 'react'

const TaxCalculator = () => {
  const [taxType, setTaxType] = useState('income')
  const [amount, setAmount] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const taxRates = {
    income: 0.15, // 15% for income tax
    property: 0.005, // 0.5% for property tax
    business: 0.03, // 3% for business tax
    vat: 0.16, // 16% for VAT
    vehicle: 0.02 // 2% for vehicle tax
  }

  const taxLabels = {
    income: 'Impôt sur le revenu',
    property: 'Taxe foncière',
    business: 'Taxe professionnelle',
    vat: 'TVA',
    vehicle: 'Taxe sur les véhicules'
  }

  const handleCalculate = () => {
    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      setResult(null)
      return
    }

    const rate = taxRates[taxType as keyof typeof taxRates]
    const calculated = numAmount * rate
    setResult(calculated)
  }

  const handleReset = () => {
    setAmount('')
    setResult(null)
  }

  return (
    <div className="bg-white rounded-sm shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Calculateur de taxes</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de taxe
          </label>
          <select
            value={taxType}
            onChange={(e) => {
              setTaxType(e.target.value)
              setResult(null)
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          >
            {Object.entries(taxLabels).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Montant imposable (FC)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
              setResult(null)
            }}
            placeholder="Entrez le montant"
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          />
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={handleCalculate}
            disabled={!amount}
            className="flex-1 bg-primary-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm disabled:opacity-50"
          >
            Calculer
          </button>
          <button
            onClick={handleReset}
            className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-sm"
          >
            Réinitialiser
          </button>
        </div>
        
        {result !== null && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-sm">
            <h3 className="font-bold text-green-800 mb-2">Résultat du calcul</h3>
            <div className="flex justify-between">
              <span className="text-green-700">
                {taxLabels[taxType as keyof typeof taxLabels]} ({(taxRates[taxType as keyof typeof taxRates] * 100)}%)
              </span>
              <span className="font-bold text-green-800">
                {result.toLocaleString()} FC
              </span>
            </div>
            <div className="flex justify-between mt-2 pt-2 border-t border-green-200">
              <span className="text-green-700">Montant total à payer</span>
              <span className="font-bold text-green-800">
                {(parseFloat(amount) + result).toLocaleString()} FC
              </span>
            </div>
            <button
              onClick={() => {
                // In a real app, this would redirect to payment page
                alert('Redirecting to payment page...')
              }}
              className="w-full mt-4 bg-primary-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm"
            >
              Procéder au paiement
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaxCalculator