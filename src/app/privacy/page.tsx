import React from 'react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-gray-300">
              Informations sur la collecte et l'utilisation de vos données personnelles
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-sm shadow-md p-8">
              <div className="prose max-w-none">
                <p className="text-gray mb-6">
                  Cette politique de confidentialité décrit nos pratiques concernant la collecte, 
                  l'utilisation et la divulgation des informations que nous recevons lorsque vous 
                  utilisez le site web de la Direction Générale des Recettes de la Mongala (DGRMO).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Informations que nous collectons</h2>
                <p className="text-gray mb-4">
                  Nous collectons les types d'informations suivants :
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>Informations d'identification personnelles (nom, adresse, email, numéro de téléphone)</li>
                  <li>Informations de paiement (numéros de compte, transactions)</li>
                  <li>Données fiscales (déclarations, paiements, reçus)</li>
                  <li>Données d'utilisation (pages visitées, temps passé sur le site)</li>
                  <li>Données techniques (adresse IP, type de navigateur, système d'exploitation)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Utilisation des informations</h2>
                <p className="text-gray mb-4">
                  Nous utilisons les informations collectées pour :
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>Fournir et améliorer nos services fiscaux en ligne</li>
                  <li>Traiter les paiements et générer des reçus</li>
                  <li>Communiquer avec vous concernant vos obligations fiscales</li>
                  <li>Prévenir la fraude et assurer la sécurité</li>
                  <li>Respecter les obligations légales</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Protection des données</h2>
                <p className="text-gray mb-6">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
                  pour protéger vos données personnelles contre l'accès non autorisé, l'utilisation 
                  abusive, la divulgation ou la destruction.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Partage des informations</h2>
                <p className="text-gray mb-6">
                  Nous ne partageons vos informations personnelles qu'avec :
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>Les autorités fiscales compétentes</li>
                  <li>Les prestataires de services de paiement</li>
                  <li>Les partenaires techniques pour l'hébergement et le développement</li>
                  <li>Les autorités judiciaires lorsque la loi l'exige</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Vos droits</h2>
                <p className="text-gray mb-4">
                  Vous avez le droit de :
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>Accéder à vos données personnelles</li>
                  <li>Demander la rectification d'informations inexactes</li>
                  <li>Demander l'effacement de vos données</li>
                  <li>Limiter le traitement de vos données</li>
                  <li>Retirer votre consentement à tout moment</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Conservation des données</h2>
                <p className="text-gray mb-6">
                  Nous conservons vos données personnelles aussi longtemps que nécessaire 
                  pour remplir les finalités décrites dans cette politique, conformément 
                  aux obligations légales et fiscales.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifications de cette politique</h2>
                <p className="text-gray mb-6">
                  Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. 
                  Nous vous informerons de tout changement en publiant la nouvelle politique 
                  sur cette page avec une date de mise à jour.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray">
                    <strong>Dernière mise à jour :</strong> Juin 2026
                  </p>
                  <p className="text-gray mt-2">
                    Pour toute question concernant cette politique de confidentialité, 
                    veuillez nous contacter à l'adresse :{" "}
                    <a href="mailto:privacy@dgrmo.cd" className="text-primary-blue hover:underline">
                      privacy@dgrmo.cd
                    </a>
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