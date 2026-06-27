import React from 'react'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conditions d'utilisation
            </h1>
            <p className="text-xl text-gray-300">
              Règles et régulations pour l'utilisation de notre site web
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
                  Les présentes conditions d'utilisation régissent l'accès et l'utilisation 
                  du site web de la Direction Générale des Recettes de la Mongala (DGRMO). 
                  En accédant ou en utilisant notre site, vous acceptez d'être lié par ces conditions.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptation des conditions</h2>
                <p className="text-gray mb-6">
                  En utilisant ce site, vous acceptez sans réserve les présentes conditions 
                  d'utilisation et toutes les lois et réglementations applicables. 
                  Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Services proposés</h2>
                <p className="text-gray mb-4">
                  Le site offre les services suivants :
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>Consultation des informations fiscales</li>
                  <li>Calcul des obligations fiscales</li>
                  <li>Paiement en ligne des taxes et impôts</li>
                  <li>Vérification des reçus de paiement</li>
                  <li>Dépôt et suivi des plaintes</li>
                  <li>Accès aux actualités et annonces fiscales</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Obligations de l'utilisateur</h2>
                <p className="text-gray mb-4">
                  En utilisant nos services, vous vous engagez à :
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>Fournir des informations exactes et à jour</li>
                  <li>Ne pas utiliser le site à des fins frauduleuses</li>
                  <li>Respecter les lois fiscales en vigueur</li>
                  <li>Ne pas tenter d'accéder aux comptes d'autrui</li>
                  <li>Ne pas perturber le fonctionnement du site</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Propriété intellectuelle</h2>
                <p className="text-gray mb-6">
                  Tous les contenus présents sur ce site (textes, images, logos, 
                  graphismes, icônes, sons, logiciels) sont la propriété exclusive 
                  de la DGRMO ou de ses partenaires et sont protégés par les lois 
                  sur la propriété intellectuelle.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation de responsabilité</h2>
                <p className="text-gray mb-6">
                  La DGRMO ne saurait être tenue responsable des dommages directs 
                  ou indirects résultant de l'utilisation de ce site, y compris 
                  l'indisponibilité temporaire du service ou les erreurs de transmission.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Sécurité et confidentialité</h2>
                <p className="text-gray mb-6">
                  Nous nous engageons à protéger vos données personnelles conformément 
                  à notre politique de confidentialité. Vous êtes responsable de la 
                  confidentialité de vos identifiants de connexion.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifications des conditions</h2>
                <p className="text-gray mb-6">
                  Nous nous réservons le droit de modifier ces conditions d'utilisation 
                  à tout moment. Les utilisateurs seront informés des changements 
                  significatifs par notification sur le site.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Droit applicable</h2>
                <p className="text-gray mb-6">
                  Ces conditions sont régies par le droit de la République Démocratique 
                  du Congo. Tout litige relatif à leur interprétation ou à leur exécution 
                  sera soumis aux tribunaux compétents de la Mongala.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray">
                    <strong>Dernière mise à jour :</strong> Juin 2026
                  </p>
                  <p className="text-gray mt-2">
                    Pour toute question concernant ces conditions d'utilisation, 
                    veuillez nous contacter à l'adresse :{" "}
                    <a href="mailto:legal@dgrmo.cd" className="text-primary-blue hover:underline">
                      legal@dgrmo.cd
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