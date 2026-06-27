import React from 'react'
import TaxpayerDashboard from '@/components/TaxpayerDashboard'

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-light-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <TaxpayerDashboard />
      </div>
    </div>
  )
}