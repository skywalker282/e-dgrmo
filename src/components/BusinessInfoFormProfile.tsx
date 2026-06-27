'use client'

import React, { useState } from 'react'

type BusinessInfo = {
  companyName: string
  taxId: string
  businessAddress: string
  businessPhone: string
}

type BusinessInfoFormProps = {
  initialInfo: BusinessInfo
  onSubmit: (info: BusinessInfo) => void
}

const BusinessInfoFormProfile = ({ initialInfo, onSubmit }: BusinessInfoFormProps) => {
  const [info, setInfo] = useState(initialInfo)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(info)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nom de l'entreprise
        </label>
        <input
          type="text"
          name="companyName"
          value={info.companyName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Numéro d'identification fiscale
        </label>
        <input
          type="text"
          name="taxId"
          value={info.taxId}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Adresse de l'entreprise
        </label>
        <input
          type="text"
          name="businessAddress"
          value={info.businessAddress}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Téléphone de l'entreprise
        </label>
        <input
          type="tel"
          name="businessPhone"
          value={info.businessPhone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
        />
      </div>
      
      <div>
        <button
          type="submit"
          className="bg-primary-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm"
        >
          Mettre à jour les informations
        </button>
      </div>
    </form>
  )
}

export default BusinessInfoFormProfile