import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import TasksPage from './pages/TasksPage'
import ApiDataPage from './pages/ApiDataPage'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TasksPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="/api-data" element={<ApiDataPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App