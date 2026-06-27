'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate passwords
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }
    
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères')
      return
    }
    
    setIsLoading(true)
    setError('')
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
      // In a real app, you would send a request to your backend here
      console.log('Password reset successfully')
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-sm shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSuccess ? 'Mot de passe réinitialisé' : 'Réinitialiser le mot de passe'}
          </h2>
          {!isSuccess && (
            <p className="mt-2 text-center text-sm text-gray">
              Veuillez saisir votre nouveau mot de passe
            </p>
          )}
        </div>

        {isSuccess ? (
          <div className="mt-8 p-4 bg-green-50 rounded-sm">
            <p className="text-green-800">
              Votre mot de passe a été réinitialisé avec succès.
            </p>
            <div className="mt-6">
              <Link 
                href="/login" 
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-primary-blue hover:bg-blue-700"
              >
                Se connecter
              </Link>
            </div>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-800">{error}</div>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Nouveau mot de passe
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirmer le mot de passe
                </label>
                <div className="mt-1">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Réinitialisation...</span>
                ) : (
                  <span>Réinitialiser le mot de passe</span>
                )}
              </button>
            </div>
          </form>
        )}

        <div className="text-center">
          <Link 
            href="/login" 
            className="font-medium text-primary-blue hover:text-blue-700"
          >
            ← Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  )
}