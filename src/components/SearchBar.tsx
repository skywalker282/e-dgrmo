'use client'

import React, { useState } from 'react'

type SearchBarProps = {
  placeholder?: string
  onSearch: (query: string) => void
}

const SearchBar = ({ placeholder = "Rechercher...", onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-500">🔍</span>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-sm focus:ring-primary-blue focus:border-primary-blue"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-primary-blue"
        >
          Rechercher
        </button>
      </div>
    </form>
  )
}

export default SearchBar