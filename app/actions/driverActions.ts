'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createDriver(prevState: any, formData: FormData) {
  console.log('Prisma client:', prisma)
  
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const base = formData.get('base') as string

  try {
    console.log('Attempting to create driver with data:', { firstName, lastName, base })
    
    const driver = await prisma.driver.create({
      data: {
        firstName,
        lastName,
        base,
      },
    })
    
    console.log('Driver created successfully:', driver)
    revalidatePath('/input')
    return { success: true }
  } catch (error) {
    console.error('Detailed error creating driver:', error)
    // Return the actual error message if available
    const errorMessage = error instanceof Error ? error.message : 'Failed to create driver'
    return { success: false, error: errorMessage }
  }
} 