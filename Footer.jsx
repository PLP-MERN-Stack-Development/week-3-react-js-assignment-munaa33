import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-slate-900/80"></div>
      
      <div className="relative container mx-auto px-8 py-6">
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-purple-200 bg-clip-text text-transparent">
            Task Manager
          </div>
          <div className="w-34 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer