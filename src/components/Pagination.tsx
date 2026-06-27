import React from 'react'

const Pagination = () => {
  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex space-x-2">
        <button className="px-4 py-2 bg-primary-blue text-white rounded-sm">
          1
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50">
          2
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50">
          3
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50">
          Suivant →
        </button>
      </nav>
    </div>
  )
}

export default Pagination