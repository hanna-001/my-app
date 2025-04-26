import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const drivers = await prisma.driver.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        base: true,
      },
      orderBy: {
        lastName: 'asc',
      },
    })
    return NextResponse.json(drivers)
  } catch (error) {
    console.error('Error fetching drivers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch drivers' },
      { status: 500 }
    )
  }
} 