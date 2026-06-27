'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function AdminResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas')
      return
    }
    
    // Handle password reset logic here
    console.log('Password reset with:', password)
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
            Entrez votre nouveau mot de passe
          </p>
        </div>
        
        {isSubmitted ? (
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Mot de passe réinitialisé !
            </h3>
            <p className="text-gray mb-6">
              Votre mot de passe a été réinitialisé avec succès.
            </p>
            <Link 
              href="/admin/login" 
              className="font-medium text-primary-blue hover:text-blue-700"
            >
              Se connecter avec le nouveau mot de passe
            </Link>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="password" className="sr-only">
                  Nouveau mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                  placeholder="Nouveau mot de passe"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirmer le mot de passe
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                  placeholder="Confirmer le mot de passe"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
              >
                Réinitialiser le mot de passe
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