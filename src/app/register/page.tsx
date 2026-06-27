'use client'

import React from 'react'
import Link from 'next/link'
import RegistrationForm from '@/components/RegistrationForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-light-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-sm shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Créez votre compte
          </h2>
          <p className="mt-2 text-sm text-gray">
            Ou{' '}
            <Link href="/login" className="font-medium text-primary-blue hover:text-blue-700">
              connectez-vous à votre compte existant
            </Link>
          </p>
        </div>

        <RegistrationForm />
      </div>
    </div>
  )
}