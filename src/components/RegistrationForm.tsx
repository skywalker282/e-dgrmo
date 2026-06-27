'use client'

import React, { useState } from 'react'
import UserTypeSelector from '@/components/UserTypeSelector'
import PersonalInfoForm from '@/components/PersonalInfoForm'
import BusinessInfoForm from '@/components/BusinessInfoForm'
import EmailPasswordForm from '@/components/EmailPasswordForm'
import TermsAndSubmit from '@/components/TermsAndSubmit'

const RegistrationForm = () => {
  const [userType, setUserType] = useState<'individual' | 'business'>('individual')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    taxId: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Registration attempt with:', { userType, formData })
  }

  return (
    <div className="mt-8">
      <UserTypeSelector userType={userType} setUserType={setUserType} />
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <PersonalInfoForm formData={formData} handleInputChange={handleInputChange} />
        
        {userType === 'business' && (
          <BusinessInfoForm formData={formData} handleInputChange={handleInputChange} />
        )}
        
        <EmailPasswordForm formData={formData} handleInputChange={handleInputChange} />
        
        <TermsAndSubmit />
      </form>
    </div>
  )
}

export default RegistrationForm