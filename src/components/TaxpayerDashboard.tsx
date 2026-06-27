'use client'

import React from 'react'
import Link from 'next/link'

const TaxpayerDashboard = () => {
  const stats = [
    { title: 'Taxes impayées', value: '45,000 FC', change: '-2.5%', icon: '⚠️' },
    { title: 'Dernier paiement', value: '15,000 FC', change: '15 Juin 2026', icon: '✅' },
    { title: 'Prochain paiement', value: '30,000 FC', change: '15 Juillet 2026', icon: '📅' },
    { title: 'Reçus cette année', value: '12', change: '+3 depuis le mois dernier', icon: '📄' }
  ]

  const recentPayments = [
    { date: '15 Juin 2026', tax: 'Taxe foncière', amount: '15,000 FC', status: 'Payé' },
    { date: '10 Mai 2026', tax: 'Impôt sur le revenu', amount: '25,000 FC', status: 'Payé' },
    { date: '5 Avril 2026', tax: 'TVA', amount: '8,500 FC', status: 'Payé' }
  ]

  const upcomingTaxes = [
    { tax: 'Taxe foncière', dueDate: '15 Juillet 2026', amount: '15,000 FC' },
    { tax: 'Impôt sur le revenu', dueDate: '30 Septembre 2026', amount: '30,000 FC' },
    { tax: 'TVA', dueDate: '15 Juillet 2026', amount: '10,000 FC' }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-blue to-dark-navy text-white rounded-sm p-6">
        <h1 className="text-2xl font-bold mb-2">Bienvenue, Jean Dupont</h1>
        <p className="opacity-90">Voici un aperçu de vos obligations fiscales</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-sm shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray text-sm">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-sm text-gray mt-1">{stat.change}</p>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Payments and Upcoming Taxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Payments */}
        <div className="bg-white rounded-sm shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Paiements récents</h2>
            <Link href="/payments" className="text-primary-blue hover:underline text-sm">
              Voir tout
            </Link>
          </div>
          <div className="space-y-4">
            {recentPayments.map((payment, index) => (
              <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium">{payment.tax}</p>
                  <p className="text-sm text-gray">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{payment.amount}</p>
                  <p className="text-sm text-success-green">{payment.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Taxes */}
        <div className="bg-white rounded-sm shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Taxes à venir</h2>
            <Link href="/taxes" className="text-primary-blue hover:underline text-sm">
              Voir tout
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingTaxes.map((tax, index) => (
              <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium">{tax.tax}</p>
                  <p className="text-sm text-gray">Échéance: {tax.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{tax.amount}</p>
                  <button className="mt-1 text-primary-blue hover:underline text-sm">
                    Payer maintenant
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-sm shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-sm hover:bg-gray-50 transition">
            <span className="text-3xl mb-2">💳</span>
            <span className="font-medium">Payer mes taxes</span>
          </button>
          <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-sm hover:bg-gray-50 transition">
            <span className="text-3xl mb-2">📄</span>
            <span className="font-medium">Vérifier un reçu</span>
          </button>
          <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-sm hover:bg-gray-50 transition">
            <span className="text-3xl mb-2">📝</span>
            <span className="font-medium">Déposer une plainte</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaxpayerDashboard