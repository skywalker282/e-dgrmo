'use client'

import React from 'react'

const BusinessInfoForm = ({ formData, handleInputChange }: { 
  formData: any, 
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Nom de l'entreprise
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          value={formData.companyName}
          onChange={handleInputChange}
          className="mt-1 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="taxId" className="block text-sm font-medium text-gray-700">
          Numéro d'identification fiscale
        </label>
        <input
          id="taxId"
          name="taxId"
          type="text"
          value={formData.taxId}
          onChange={handleInputChange}
          className="mt-1 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
        />
      </div>
    </div>
  )
}

export default BusinessInfoForm