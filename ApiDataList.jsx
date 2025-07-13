import React from 'react'
import Card from './ui/Card'

const ApiDataList = ({ data, loading, error }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p className="text-red-600">Error: {error}</p>
  if (!data || data.length === 0) return <p>No data available</p>

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Tasks API Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <Card key={item.id} className="p-4">
            <h3 className="font-bold text-lg">{item.title || 'Untitled Task'}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {item.body || 'No description available'}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ApiDataList