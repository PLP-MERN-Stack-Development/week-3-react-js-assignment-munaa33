import React from 'react'
import Button from './ui/Button'

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' }
  ]

  return (
    <div className="flex gap-2 mt-4">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={currentFilter === filter.id ? 'primary' : 'secondary'}
          onClick={() => onFilterChange(filter.id)}
          className="text-sm py-1 px-3"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}

export default TaskFilter