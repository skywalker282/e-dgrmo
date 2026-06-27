import React from 'react'

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mission et Vision
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
              <h2 className="text-3xl font-bold mb-6">Nos objectifs stratégiques</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-blue pl-4 py-1">
                  <h3 className="text-xl font-bold mb-2">Modernisation des services fiscaux</h3>
                  <p className="text-gray">
                    Transformer nos services grâce aux technologies numériques pour offrir une expérience 
                    optimale aux contribuables.
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4 py-1">
                  <h3 className="text-xl font-bold mb-2">Amélioration de la transparence</h3>
                  <p className="text-gray">
                    Renforcer la transparence dans la gestion des recettes publiques et la communication 
                    avec les citoyens.
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4 py-1">
                  <h3 className="text-xl font-bold mb-2">Renforcement de la conformité fiscale</h3>
                  <p className="text-gray">
                    Promouvoir la culture fiscale et améliorer le taux de conformité volontaire des contribuables.
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4 py-1">
                  <h3 className="text-xl font-bold mb-2">Développement des ressources humaines</h3>
                  <p className="text-gray">
                    Former et perfectionner continuellement notre personnel pour assurer un service de qualité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}