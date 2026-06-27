import React from 'react'

const ServicesGrid = () => {
  const services = [
    {
      title: "Impôt sur le revenu",
      description: "Impôt prélevé sur les revenus des personnes physiques et morales",
      rate: "3% à 30%",
      processingTime: "2-3 jours",
      documents: ["Pièce d'identité", "Justificatifs de revenus"]
    },
    {
      title: "Taxe foncière",
      description: "Taxe annuelle sur la propriété immobilière",
      rate: "0.5% de la valeur cadastrale",
      processingTime: "5-7 jours",
      documents: ["Titre de propriété", "Dernier avis d'imposition"]
    },
    {
      title: "Taxe professionnelle",
      description: "Taxe sur l'exercice d'une activité professionnelle",
      rate: "Variable selon le chiffre d'affaires",
      processingTime: "3-5 jours",
      documents: ["Registre de commerce", "Déclaration d'activité"]
    },
    {
      title: "Taxe sur la valeur ajoutée (TVA)",
      description: "Taxe sur la consommation finale de biens et services",
      rate: "16%",
      processingTime: "1-2 jours",
      documents: ["Factures", "Registre des ventes"]
    },
    {
      title: "Droits d'enregistrement",
      description: "Droits perçus lors de l'enregistrement de documents légaux",
      rate: "Variable selon le document",
      processingTime: "1-3 jours",
      documents: ["Document à enregistrer", "Pièce d'identité"]
    },
    {
      title: "Taxe sur les véhicules",
      description: "Taxe annuelle sur la propriété de véhicules automobiles",
      rate: "Variable selon le type de véhicule",
      processingTime: "2-4 jours",
      documents: ["Carte grise", "Justificatif de domicile"]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-100">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray mb-4">{service.description}</p>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="font-semibold">Taux:</span>
                <span>{service.rate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Délai de traitement:</span>
                <span>{service.processingTime}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Documents requis:</h4>
              <ul className="text-sm text-gray list-disc pl-5 space-y-1">
                {service.documents.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
            
            <button className="w-full bg-primary-blue hover:bg-blue-700 text-white font-semibold py-2 rounded-sm transition">
              Payer cette taxe
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesGrid