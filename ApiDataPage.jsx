import React, { useState } from 'react'
import useApi from '../hooks/useApi'
import ApiDataList from '../components/ApiDataList'
import Button from '../components/ui/Button'

const ApiDataPage = () => {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const { data, loading, error } = useApi(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&q=${searchTerm}`
  )

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">API Data</h1>
      
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md flex-grow dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ApiDataList data={data} loading={loading} error={error} />

      <div className="flex justify-between items-center">
        <Button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="text-gray-600 dark:text-gray-300">Page {page}</span>
        <Button
          onClick={() => setPage((p) => p + 1)}
          disabled={data?.length < 10}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default ApiDataPage