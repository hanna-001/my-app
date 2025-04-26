'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createUser(prevState: any, formData: FormData) {
  const email = formData.get('email') as string
  const name = formData.get('name') as string
  const password = formData.get('password') as string

  try {
    await prisma.user.create({
      data: {
        email,
        name,
        password, // Note: In a real app, you should hash the password
      },
    })
    
    revalidatePath('/newuser')
    return { success: true }
  } catch (error) {
    console.error('Error creating user:', error)
    return { success: false, error: 'Failed to create user' }
  }
} 