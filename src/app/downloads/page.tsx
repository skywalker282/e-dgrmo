import React from 'react'

export default function DownloadsPage() {
  const downloadCategories = [
    {
      title: 'Formulaires',
      items: [
        { name: 'Formulaire d\'inscription particulier', type: 'PDF', size: '245 KB' },
        { name: 'Formulaire d\'inscription entreprise', type: 'PDF', size: '312 KB' },
        { name: 'Déclaration d\'impôt sur le revenu', type: 'PDF', size: '187 KB' },
        { name: 'Déclaration de taxe foncière', type: 'PDF', size: '156 KB' },
        { name: 'Déclaration de TVA', type: 'PDF', size: '201 KB' }
      ]
    },
    {
      title: 'Documents officiels',
      items: [
        { name: 'Code Général des Impôts', type: 'PDF', size: '2.1 MB' },
        { name: 'Règlement sur la taxe professionnelle', type: 'PDF', size: '845 KB' },
        { name: 'Guide des procédures de paiement', type: 'PDF', size: '1.3 MB' },
        { name: 'Brochure d\'information fiscale', type: 'PDF', size: '956 KB' }
      ]
    },
    {
      title: 'Guides et manuels',
      items: [
        { name: 'Guide de l\'utilisateur du portail', type: 'PDF', size: '1.1 MB' },
        { name: 'Manuel de l\'administrateur', type: 'PDF', size: '1.8 MB' },
        { name: 'Guide de dépannage des paiements en ligne', type: 'PDF', size: '723 KB' }
      ]
    },
    {
      title: 'Rapports et statistiques',
      items: [
        { name: 'Rapport annuel de recouvrement 2025', type: 'PDF', size: '3.2 MB' },
        { name: 'Statistiques de recouvrement T1 2026', type: 'PDF', size: '1.5 MB' },
        { name: 'Analyse des tendances fiscales 2025', type: 'PDF', size: '2.7 MB' }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Téléchargements
            </h1>
            <p className="text-xl text-gray-300">
              Accédez aux formulaires, documents et guides officiels
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher des documents..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-blue pl-10"
                />
                <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
              </div>
            </div>

            <div className="space-y-12">
              {downloadCategories.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{category.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white rounded-sm shadow-md p-6 border border-gray-100 flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold mb-1">{item.name}</h3>
                          <div className="flex text-sm text-gray space-x-3">
                            <span>{item.type}</span>
                            <span>•</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                        <button className="bg-primary-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm flex items-center">
                          <span className="mr-2">⬇️</span>
                          Télécharger
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-light-blue rounded-sm p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
              <p className="text-gray mb-6">
                Contactez notre service client pour obtenir de l'aide supplémentaire
              </p>
              <button className="bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-sm">
                Contacter le support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}