'use client'

import { createDriver } from '../actions/driverActions'
import { createVacation } from '../actions/vacationActions'
import { createAbsence } from '../actions/absenceActions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { useEffect, useState } from 'react'

const initialState = {
  success: false,
  error: undefined
}

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
    >
      {pending ? 'Creating...' : text}
    </button>
  )
}

export default function InputPage() {
  const [driverState, driverFormAction] = useActionState(createDriver, initialState)
  const [vacationState, vacationFormAction] = useActionState(createVacation, initialState)
  const [absenceState, absenceFormAction] = useActionState(createAbsence, initialState)
  const [drivers, setDrivers] = useState<Array<{ id: string; firstName: string; lastName: string }>>([])

  useEffect(() => {
    // Fetch drivers when component mounts
    fetch('/api/drivers')
      .then(res => res.json())
      .then(data => setDrivers(data))
      .catch(err => console.error('Error fetching drivers:', err))
  }, [])

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Driver Creation Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">New Driver</h1>
          
          {driverState.success && (
            <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
              Driver created successfully!
            </div>
          )}
          
          {driverState.error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {driverState.error}
            </div>
          )}

          <form action={driverFormAction} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
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
                name="lastName"
                required
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
                name="base"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <SubmitButton text="Create Driver" />
          </form>
        </div>

        {/* Vacation Request Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">New Vacation Request</h1>
          
          {vacationState.success && (
            <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
              Vacation request created successfully!
            </div>
          )}
          
          {vacationState.error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {vacationState.error}
            </div>
          )}

          <form action={vacationFormAction} className="space-y-4">
            <div>
              <label htmlFor="driverId" className="block text-sm font-medium text-gray-700">
                Driver
              </label>
              <select
                id="driverId"
                name="driverId"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a driver</option>
                {drivers.map(driver => (
                  <option key={driver.id} value={driver.id}>
                    {driver.firstName} {driver.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="approvalStatus" className="block text-sm font-medium text-gray-700">
                Approval Status
              </label>
              <select
                id="approvalStatus"
                name="approvalStatus"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select status</option>
                <option value="angefragt">Angefragt</option>
                <option value="bestätigt">Bestätigt</option>
              </select>
            </div>

            <SubmitButton text="Enter Vacation" />
          </form>
        </div>

        {/* Absence Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">New Absence</h1>
          
          {absenceState.success && (
            <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
              Absence created successfully!
            </div>
          )}
          
          {absenceState.error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {absenceState.error}
            </div>
          )}

          <form action={absenceFormAction} className="space-y-4">
            <div>
              <label htmlFor="absenceDriverId" className="block text-sm font-medium text-gray-700">
                Driver
              </label>
              <select
                id="absenceDriverId"
                name="driverId"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a driver</option>
                {drivers.map(driver => (
                  <option key={driver.id} value={driver.id}>
                    {driver.firstName} {driver.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="absenceStartDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="absenceStartDate"
                name="startDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Time Options
              </label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="startPeriod"
                      value="Ganzer Tag"
                      className="form-radio"
                    />
                    <span className="ml-2">Ganzer Tag</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="startPeriod"
                      value="Vormittag"
                      className="form-radio"
                    />
                    <span className="ml-2">Vormittag</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="startPeriod"
                      value="Nachmittag"
                      className="form-radio"
                    />
                    <span className="ml-2">Nachmittag</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="absenceEndDate" className="block text-sm font-medium text-gray-700">
                End Date (Optional)
              </label>
              <input
                type="date"
                id="absenceEndDate"
                name="endDate"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Time Options (Optional)
              </label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="endPeriod"
                      value="Ganzer Tag"
                      className="form-radio"
                    />
                    <span className="ml-2">Ganzer Tag</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="endPeriod"
                      value="Vormittag"
                      className="form-radio"
                    />
                    <span className="ml-2">Vormittag</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="endPeriod"
                      value="Nachmittag"
                      className="form-radio"
                    />
                    <span className="ml-2">Nachmittag</span>
                  </label>
                </div>
              </div>
            </div>

            <SubmitButton text="Enter Absence" />
          </form>
        </div>
      </div>
    </div>
  )
} 