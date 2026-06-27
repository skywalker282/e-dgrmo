import React from 'react'

type AlertProps = {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  onClose?: () => void
}

const Alert = ({ type, title, message, onClose }: AlertProps) => {
  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  }

  const icon = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  }

  return (
    <div className={`border rounded-sm p-4 ${typeStyles[type]}`}>
      <div className="flex items-start">
        <span className="text-xl mr-3">{icon[type]}</span>
        <div className="flex-1">
          <h3 className="font-bold">{title}</h3>
          <p className="mt-1 text-sm">{message}</p>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-lg hover:opacity-70"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}

export default Alert