'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Tableau de bord', href: '/admin', icon: '📊' },
    { name: 'Utilisateurs', href: '/admin/users', icon: '👥' },
    { name: 'Transactions', href: '/admin/transactions', icon: '💰' },
    { name: 'Taxes', href: '/admin/taxes', icon: '🧾' },
    { name: 'Plaintes', href: '/admin/complaints', icon: '📝' },
    { name: 'Rapports', href: '/admin/reports', icon: '📈' },
    { name: 'Paramètres', href: '/admin/settings', icon: '⚙️' },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-dark-navy text-white transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          <Link href="/admin" className="text-xl font-bold">
            Admin DGRMO
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center p-3 rounded-sm hover:bg-gray-700 transition"
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <span className="text-2xl">☰</span>
              </button>
              <h1 className="text-xl font-semibold text-gray-800">Administration</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <span className="text-xl">🔔</span>
              </button>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">AD</span>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 hidden md:inline">
                  Admin User
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default AdminLayout