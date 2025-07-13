import React from 'react'

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-xl 
        overflow-hidden 
        transition-all duration-300
        transform hover:scale-[1.02]
        ${className}
      `}
      {...props}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 clip-path-polygon" />
        <div className="relative z-10 p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card