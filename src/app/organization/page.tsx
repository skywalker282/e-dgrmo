import React from 'react'

export default function OrganizationPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Organisation
            </h1>
            <p className="text-xl text-gray-300">
              Structure organisationnelle de la Direction Générale des Recettes de la Mongala
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Structure organisationnelle</h2>
              <p className="text-gray mb-6">
                La Direction Générale des Recettes de la Mongala est organisée en plusieurs départements 
                spécialisés pour assurer une gestion efficace des recettes publiques dans la province.
              </p>
              
              <div className="bg-white rounded-sm shadow-md p-8 mb-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Direction Générale</h3>
                  <div className="w-24 h-24 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl">DG</span>
                  </div>
                  <p className="font-bold">Directeur Général</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-4">Direction des Impôts</h4>
                    <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white">DI</span>
                    </div>
                    <ul className="text-left space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>Service des Impôts sur le Revenu</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>Service de l'Impôt sur les Sociétés</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>Service des Vérifications</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-4">Direction des Taxes</h4>
                    <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white">DT</span>
                    </div>
                    <ul className="text-left space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>Service de la Taxe Foncière</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>Service de la Taxe Professionnelle</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>Service de la Taxe sur les Véhicules</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-4">Direction de l'Administration</h4>
                    <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white">DA</span>
                    </div>
                    <ul className="text-left space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>Service des Ressources Humaines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>Service des Finances et Comptabilité</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>Service de l'Informatique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Responsabilités provinciales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">Collecte des recettes</h3>
                  <p className="text-gray">
                    Assurer la perception efficace des impôts, taxes et redevances dans la province 
                    conformément aux lois fiscales nationales et provinciales.
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">Contrôle et vérification</h3>
                  <p className="text-gray">
                    Mettre en œuvre des contrôles fiscaux pour assurer la conformité et prévenir 
                    l'évasion fiscale.
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">Service aux contribuables</h3>
                  <p className="text-gray">
                    Fournir un service de qualité aux contribuables, incluant l'information, 
                    l'assistance et le traitement des réclamations.
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">Rapports et statistiques</h3>
                  <p className="text-gray">
                    Établir des rapports périodiques sur les recettes perçues et analyser les 
                    tendances fiscales provinciales.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Coordination inter-institutionnelle</h2>
              <p className="text-gray mb-6">
                La DGRMO collabore étroitement avec diverses institutions pour assurer une gestion 
                efficace des finances publiques:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-blue text-xl mr-3">•</span>
                  <div>
                    <h3 className="font-bold">Gouvernement Provincial</h3>
                    <p className="text-gray">
                      Coordination avec les autorités provinciales pour l'alignement des politiques 
                      fiscales avec les priorités de développement provincial.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue text-xl mr-3">•</span>
                  <div>
                    <h3 className="font-bold">Direction Générale des Finances</h3>
                    <p className="text-gray">
                      Collaboration pour le transfert des recettes provinciales et la gestion 
                      budgétaire.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue text-xl mr-3">•</span>
                  <div>
                    <h3 className="font-bold">Services de Douanes</h3>
                    <p className="text-gray">
                      Coordination sur les aspects liés aux importations et aux taxes douanières.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue text-xl mr-3">•</span>
                  <div>
                    <h3 className="font-bold">Institutions Financières</h3>
                    <p className="text-gray">
                    Partenariats avec les banques et les institutions financières pour faciliter 
                    les paiements fiscaux.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}