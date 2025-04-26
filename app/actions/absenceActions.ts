'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createAbsence(prevState: any, formData: FormData) {
  const driverId = formData.get('driverId') as string
  const startDate = new Date(formData.get('startDate') as string)
  const startTime = formData.get('startTime') as string
  const startPeriod = formData.get('startPeriod') as string
  const endDate = formData.get('endDate') ? new Date(formData.get('endDate') as string) : null
  const endTime = formData.get('endTime') as string
  const endPeriod = formData.get('endPeriod') as string

  try {
    // First verify the driver exists
    const driver = await prisma.driver.findUnique({
      where: { id: driverId },
    })

    if (!driver) {
      return { success: false, error: 'Selected driver not found' }
    }

    const absence = await prisma.absence.create({
      data: {
        driverId,
        startDate,
        startTime: startTime || null,
        startPeriod: startPeriod || null,
        endDate,
        endTime: endTime || null,
        endPeriod: endPeriod || null,
      },
      include: {
        driver: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    })
    
    revalidatePath('/input')
    return { success: true }
  } catch (error) {
    console.error('Error creating absence:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to create absence'
    return { success: false, error: errorMessage }
  }
} 