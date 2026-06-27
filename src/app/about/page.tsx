import React from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de la DGRMO
            </h1>
            <p className="text-xl text-gray-300">
              Direction Générale des Recettes de la Mongala
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
              <p className="text-gray mb-6">
                La Direction Générale des Recettes de la Mongala (DGRMO) a pour mission de collecter 
                efficacement les recettes publiques dans la province de la Mongala, en assurant un 
                service de qualité aux contribuables et en contribuant au développement économique 
                et social de la région.
              </p>
              <p className="text-gray">
                Nous nous engageons à appliquer les lois fiscales avec équité, transparence et 
                professionnalisme, tout en facilitant l'accomplissement des obligations fiscales 
                des citoyens et des entreprises.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Notre vision</h2>
              <p className="text-gray">
                Devenir une institution fiscale moderne, efficiente et respectueuse des droits des 
                contribuables, reconnue pour son excellence dans la collecte des recettes et son 
                apport au développement de la Mongala.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Nos valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">Intégrité</h3>
                  <p className="text-gray">
                    Nous agissons avec honnêteté, éthique et transparence dans toutes nos opérations.
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">Service</h3>
                  <p className="text-gray">
                    Nous nous engageons à fournir un service de qualité aux contribuables.
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">Équité</h3>
                  <p className="text-gray">
                    Nous appliquons les lois fiscales de manière juste et équitable.
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-gray">
                    Nous adoptons les technologies modernes pour améliorer nos services.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Message du Directeur</h2>
              <div className="bg-light-blue p-8 rounded-sm">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <div>
                    <p className="text-gray italic mb-4">
                      "La transformation numérique de notre administration fiscale est une priorité 
                      absolue. Nous nous efforçons continuellement d'améliorer nos services pour 
                      rendre l'accomplissement des obligations fiscales plus simple, plus rapide 
                      et plus accessible à tous les contribuables de la province de la Mongala.
                      
                      Notre portail en ligne E-DGRMO est un exemple concret de cet engagement. 
                      Il permet aux contribuables de payer leurs taxes, vérifier leurs reçus et 
                      accéder à nos services 24 heures sur 24, 7 jours sur 7."
                    </p>
                    <p className="font-bold">Jean-Pierre Mokaba</p>
                    <p className="text-gray">Directeur Général des Recettes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}