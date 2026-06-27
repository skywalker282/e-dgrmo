import React from 'react'

const ProfileHeader = () => {
  return (
    <div className="flex items-center mb-8">
      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-700">JD</span>
      </div>
      <div className="ml-4">
        <h1 className="text-2xl font-bold text-gray-900">Jean Dupont</h1>
        <p className="text-gray">Contributeur individuel et professionnel</p>
      </div>
    </div>
  )
}

export default ProfileHeader