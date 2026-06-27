'use client'

import React, { useState } from 'react'

const UserTypeSelector = ({ userType, setUserType }: { 
  userType: 'individual' | 'business', 
  setUserType: (type: 'individual' | 'business') => void 
}) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex space-x-4">
        <button
          onClick={() => setUserType('individual')}
          className={`px-4 py-2 rounded-sm ${
            userType === 'individual'
              ? 'bg-primary-blue text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Particulier
        </button>
        <button
          onClick={() => setUserType('business')}
          className={`px-4 py-2 rounded-sm ${
            userType === 'business'
              ? 'bg-primary-blue text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Entreprise
        </button>
      </div>
    </div>
  )
}

export default UserTypeSelector