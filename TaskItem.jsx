import React from 'react'
import Button from './ui/Button'

const TaskItem = ({ task, onToggle, onDelete }) => {
  // Simple fallback date formatting if date-fns isn't available
  const formatDate = (dateString) => {
    try {
      // Try to use date-fns if available
      if (typeof format === 'function') {
        const { format } = require('date-fns')
        return format(new Date(dateString), 'MMM d, yyyy h:mm a')
      }
    } catch (e) {
      // Fallback to native Date formatting
      const date = new Date(dateString)
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    }
    return new Date(dateString).toLocaleString()
  }

  return (
    <li className="py-4 px-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onToggle(task.id)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
              task.completed
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-300 dark:border-gray-600 hover:border-blue-500'
            }`}
            aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {task.completed && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <div>
            <p className={`font-medium ${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-gray-200'}`}>
              {task.text}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Added: {formatDate(task.createdAt)}
            </p>
          </div>
        </div>
        <Button
          variant="danger"
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 text-sm"
        >
          Delete
        </Button>
      </div>
    </li>
  )
}

export default TaskItem