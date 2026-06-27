import React from 'react'

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="mt-1 mr-4 text-2xl">📍</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Adresse</h3>
            <p className="text-gray">
              Avenue des Finances, Bâtiment DGRMO<br />
              Oyo, Mongala, République Démocratique du Congo
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mt-1 mr-4 text-2xl">📞</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Téléphone</h3>
            <p className="text-gray">+243 123 456 789</p>
            <p className="text-gray">+243 987 654 321</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mt-1 mr-4 text-2xl">✉️</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p className="text-gray">contact@dgrmo.cd</p>
            <p className="text-gray">support@dgrmo.cd</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mt-1 mr-4 text-2xl">🕒</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Heures d'ouverture</h3>
            <p className="text-gray">Lundi - Vendredi: 8h00 - 17h00</p>
            <p className="text-gray">Samedi: 9h00 - 12h00</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Localisation</h3>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
          <span className="text-gray-500">Carte de localisation</span>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo