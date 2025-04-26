'use client'

import { useEffect, useState } from 'react'

interface Driver {
  id: string
  firstName: string
  lastName: string
  base: string
}

export default function Overview() {
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null)

  useEffect(() => {
    fetchDrivers()
  }, [])

  const fetchDrivers = async () => {
    try {
      const res = await fetch('/api/drivers')
      const data = await res.json()
      setDrivers(data)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching drivers:', err)
      setError('Failed to load drivers')
      setLoading(false)
    }
  }

  const handleDelete = async (driverId: string) => {
    if (window.confirm('Are you sure you want to delete this driver?')) {
      try {
        const res = await fetch(`/api/drivers/${driverId}`, {
          method: 'DELETE',
        })
        if (res.ok) {
          fetchDrivers() // Refresh the list
        } else {
          setError('Failed to delete driver')
        }
      } catch (err) {
        console.error('Error deleting driver:', err)
        setError('Failed to delete driver')
      }
    }
  }

  const handleEdit = (driver: Driver) => {
    setEditingDriver(driver)
  }

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingDriver) return

    try {
      const res = await fetch(`/api/drivers/${editingDriver.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: editingDriver.firstName,
          lastName: editingDriver.lastName,
          base: editingDriver.base,
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to update driver')
      }

      const updatedDriver = await res.json()
      setDrivers(drivers.map(d => d.id === updatedDriver.id ? updatedDriver : d))
      setEditingDriver(null)
    } catch (err) {
      console.error('Error updating driver:', err)
      setError('Failed to update driver')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#3a4960] mb-8">Overview</h1>
        <div className="grid grid-cols-1 gap-8">
          {/* Driver Table */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-[#3a4960] mb-6">Driver List</h2>
            {loading ? (
              <p className="text-center text-gray-600">Loading drivers...</p>
            ) : error ? (
              <p className="text-center text-red-600">{error}</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        First Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Base
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {drivers.map((driver) => (
                      <tr key={driver.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {driver.firstName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {driver.lastName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {driver.base}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button
                            onClick={() => handleEdit(driver)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            Modify
                          </button>
                          <button
                            onClick={() => handleDelete(driver.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-[#3a4960] mb-6">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-[#913f4f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">Easy to use interface</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-[#913f4f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">Responsive design</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-[#913f4f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">Secure data handling</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-[#913f4f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">24/7 support available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingDriver && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Edit Driver</h3>
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={editingDriver.firstName}
                    onChange={(e) => setEditingDriver({ ...editingDriver, firstName: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={editingDriver.lastName}
                    onChange={(e) => setEditingDriver({ ...editingDriver, lastName: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="base" className="block text-sm font-medium text-gray-700">
                    Base
                  </label>
                  <input
                    type="text"
                    id="base"
                    value={editingDriver.base}
                    onChange={(e) => setEditingDriver({ ...editingDriver, base: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setEditingDriver(null)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 