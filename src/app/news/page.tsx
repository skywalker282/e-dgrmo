import React from 'react'
import NewsList from '@/components/NewsList'
import Pagination from '@/components/Pagination'

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Actualités et annonces
            </h1>
            <p className="text-xl text-gray-300">
              Restez informé des dernières mises à jour et annonces
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <NewsList />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}