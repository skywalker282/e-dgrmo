import React from 'react'
import TaxCalculator from '@/components/TaxCalculator'

export default function TaxCategoriesPage() {
  const taxCategories = [
    {
      id: 'income',
      title: 'Impôt sur le revenu',
      description: 'Impôt prélevé sur les revenus des personnes physiques et morales',
      rate: '3% à 30%',
      processingTime: '2-3 jours',
      documents: ['Pièce d\'identité', 'Justificatifs de revenus'],
      legalReference: 'Code Général des Impôts, Articles 101-150'
    },
    {
      id: 'property',
      title: 'Taxe foncière',
      description: 'Taxe annuelle sur la propriété immobilière',
      rate: '0.5% de la valeur cadastrale',
      processingTime: '5-7 jours',
      documents: ['Titre de propriété', 'Dernier avis d\'imposition'],
      legalReference: 'Code Général des Impôts, Articles 201-220'
    },
    {
      id: 'business',
      title: 'Taxe professionnelle',
      description: 'Taxe sur l\'exercice d\'une activité professionnelle',
      rate: 'Variable selon le chiffre d\'affaires',
      processingTime: '3-5 jours',
      documents: ['Registre de commerce', 'Déclaration d\'activité'],
      legalReference: 'Code Général des Impôts, Articles 301-330'
    },
    {
      id: 'vat',
      title: 'Taxe sur la valeur ajoutée (TVA)',
      description: 'Taxe sur la consommation finale de biens et services',
      rate: '16%',
      processingTime: '1-2 jours',
      documents: ['Factures', 'Registre des ventes'],
      legalReference: 'Code de la TVA, Articles 1-50'
    },
    {
      id: 'vehicle',
      title: 'Taxe sur les véhicules',
      description: 'Taxe annuelle sur la propriété de véhicules automobiles',
      rate: 'Variable selon le type de véhicule',
      processingTime: '2-4 jours',
      documents: ['Carte grise', 'Justificatif de domicile'],
      legalReference: 'Code des Taxes sur les Véhicules, Articles 1-30'
    },
    {
      id: 'registration',
      title: 'Droits d\'enregistrement',
      description: 'Droits perçus lors de l\'enregistrement de documents légaux',
      rate: 'Variable selon le document',
      processingTime: '1-3 jours',
      documents: ['Document à enregistrer', 'Pièce d\'identité'],
      legalReference: 'Code Général des Impôts, Articles 401-420'
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Catégories de taxes
            </h1>
            <p className="text-xl text-gray-300">
              Informations complètes sur les différentes taxes perçues par la DGRMO
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {taxCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray mb-4">{category.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="font-semibold">Taux:</span>
                        <span>{category.rate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Délai de traitement:</span>
                        <span>{category.processingTime}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Documents requis:</h4>
                      <ul className="text-sm text-gray list-disc pl-5 space-y-1">
                        {category.documents.map((doc, idx) => (
                          <li key={idx}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Référence légale:</h4>
                      <p className="text-sm text-gray">{category.legalReference}</p>
                    </div>
                    
                    <button className="w-full bg-primary-blue hover:bg-blue-700 text-white font-semibold py-2 rounded-sm transition">
                      Payer cette taxe
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-light-blue rounded-sm p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Calculateur de taxes</h2>
              <TaxCalculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}