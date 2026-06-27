import React from 'react'

const PaymentProcedure = () => {
  return (
    <div className="mt-16 bg-light-blue rounded-sm p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Procédure de paiement en ligne</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
            1
          </div>
          <h3 className="font-bold mb-2">Inscrivez-vous</h3>
          <p className="text-gray text-sm">Créez un compte sur notre plateforme</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
            2
          </div>
          <h3 className="font-bold mb-2">Sélectionnez la taxe</h3>
          <p className="text-gray text-sm">Choisissez la taxe que vous souhaitez payer</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
            3
          </div>
          <h3 className="font-bold mb-2">Calculez le montant</h3>
          <p className="text-gray text-sm">Utilisez notre calculateur pour déterminer le montant</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
            4
          </div>
          <h3 className="font-bold mb-2">Payez et recevez votre reçu</h3>
          <p className="text-gray text-sm">Effectuez le paiement et téléchargez votre reçu</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentProcedure