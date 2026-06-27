'use client'

import React, { useState } from 'react'

const ComplaintForm = () => {
  const [complaintType, setComplaintType] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [attachments, setAttachments] = useState<File[]>([])

  const complaintTypes = [
    'Problème de paiement',
    'Erreur sur reçu',
    'Service client',
    'Site web',
    'Autre'
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setAttachments(prev => [...prev, ...files])
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle complaint submission
    console.log('Complaint submitted:', { complaintType, subject, description, attachments })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type de plainte
        </label>
        <select
          value={complaintType}
          onChange={(e) => setComplaintType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          required
        >
          <option value="">Sélectionnez un type</option>
          {complaintTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sujet
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Résumez votre plainte en quelques mots"
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description détaillée
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Décrivez votre problème en détail"
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          required
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pièces jointes
        </label>
        <div className="flex items-center">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-sm cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <span className="text-2xl mb-2">📁</span>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Cliquez pour télécharger</span> ou glissez-déposez
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG, PDF, DOC (MAX. 10MB)
              </p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              onChange={handleFileChange}
              multiple
            />
          </label>
        </div>
        
        {attachments.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Fichiers joints:</h3>
            <div className="space-y-2">
              {attachments.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-sm">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">📄</span>
                    <span className="text-sm">{file.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAttachment(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-sm p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <span className="text-blue-500">ℹ️</span>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Suivi de votre plainte
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                Après soumission, vous recevrez un numéro de référence pour suivre 
                l'état d'avancement de votre plainte. Notre équipe vous contactera 
                dans un délai de 24 à 48 heures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-sm"
        >
          Soumettre la plainte
        </button>
      </div>
    </form>
  )
}

export default ComplaintForm