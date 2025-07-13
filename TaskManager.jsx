import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'
import TaskFilter from './TaskFilter'
import Card from './ui/Card'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = React.useState('all')

  const addTask = (text) => {
    setTasks([...tasks, { 
      id: Date.now(), 
      text, 
      completed: false,
      createdAt: new Date().toISOString()
    }])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="mb-8">
        <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Manage your tasks efficiently with our simple task manager. Add, complete, and filter tasks easily
          to stay organized and productive.
        </p>
        <TaskForm onAddTask={addTask} />
      </Card>

      <Card>
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        
        {filteredTasks.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {filter === 'all' 
                ? "No tasks yet. Add one above!"
                : filter === 'active' 
                  ? "No active tasks. Great job!"
                  : "No completed tasks yet."}
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}

export default TaskManager