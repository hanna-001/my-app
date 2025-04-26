import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

type RouteContext = {
  params: {
    id: string
  }
}

export async function PUT(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const body = await request.json()
    const { firstName, lastName, base } = body

    // Validate the input
    if (!firstName || !lastName || !base) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Update the driver in the database
    const driver = await prisma.driver.update({
      where: { id: context.params.id },
      data: {
        firstName,
        lastName,
        base,
      },
    })

    // Return the updated driver
    return NextResponse.json(driver)
  } catch (error) {
    console.error('Error updating driver:', error)
    return NextResponse.json(
      { error: 'Failed to update driver' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  try {
    await prisma.driver.delete({
      where: { id: context.params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting driver:', error)
    return NextResponse.json(
      { error: 'Failed to delete driver' },
      { status: 500 }
    )
  }
} 