'use client'

import React from 'react'

const PersonalInfoForm = ({ formData, handleInputChange }: { 
  formData: any, 
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          Prénom
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          value={formData.firstName}
          onChange={handleInputChange}
          className="mt-1 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Nom
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          value={formData.lastName}
          onChange={handleInputChange}
          className="mt-1 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
        />
      </div>
    </div>
  )
}

export default PersonalInfoForm