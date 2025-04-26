'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createVacation(prevState: any, formData: FormData) {
  const driverId = formData.get('driverId') as string
  const startDate = new Date(formData.get('startDate') as string)
  const endDate = new Date(formData.get('endDate') as string)
  const approvalStatus = formData.get('approvalStatus') as string

  // Validate dates
  if (startDate > endDate) {
    return { success: false, error: 'End date must be after start date' }
  }

  try {
    // First verify the driver exists
    const driver = await prisma.driver.findUnique({
      where: { id: driverId },
    })

    if (!driver) {
      return { success: false, error: 'Selected driver not found' }
    }

    const vacation = await prisma.vacation.create({
      data: {
        driverId,
        startDate,
        endDate,
        approvalStatus,
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
    console.error('Error creating vacation:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to create vacation request'
    return { success: false, error: errorMessage }
  }
} 