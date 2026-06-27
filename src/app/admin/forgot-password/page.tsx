'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function AdminForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log('Password reset requested for:', email)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-sm shadow-md">
        <div>
          <div className="mx-auto h-12 w-12 rounded-full bg-primary-blue flex items-center justify-center">
            <span className="text-white text-2xl">🔒</span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Réinitialisation du mot de passe
          </h2>
          <p className="mt-2 text-center text-sm text-gray">
            Entrez votre adresse email pour recevoir un lien de réinitialisation
          </p>
        </div>
        
        {isSubmitted ? (
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Instructions envoyées !
            </h3>
            <p className="text-gray mb-6">
              Si un compte existe avec cette adresse email, vous recevrez un lien 
              pour réinitialiser votre mot de passe.
            </p>
            <Link 
              href="/admin/login" 
              className="font-medium text-primary-blue hover:text-blue-700"
            >
              ← Retour à la connexion
            </Link>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Adresse email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                placeholder="Adresse email"
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
              >
                Envoyer le lien de réinitialisation
              </button>
            </div>
          </form>
        )}
        
        <div className="text-center text-sm text-gray">
          <Link href="/admin/login" className="font-medium text-primary-blue hover:text-blue-700">
            ← Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  )
}