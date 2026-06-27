'use client'

import React from 'react'

type Tab = {
  id: string
  name: string
}

type ProfileTabsProps = {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

const ProfileTabs = ({ tabs, activeTab, onTabChange }: ProfileTabsProps) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === tab.id
                ? 'border-primary-blue text-primary-blue'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default ProfileTabs