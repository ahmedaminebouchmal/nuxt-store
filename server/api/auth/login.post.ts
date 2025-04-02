import { H3Event, H3Error } from 'h3'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Ungültige E-Mail-Adresse'),
  password: z.string().min(1, 'Passwort ist erforderlich'),
  googleToken: z.string().optional()
})

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    const validatedData = loginSchema.parse(body)
    const { email, password, googleToken } = validatedData

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Ungültige Anmeldedaten'
      })
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      throw createError({
        statusCode: 401,
        message: 'Ungültige Anmeldedaten'
      })
    }

    // Generate token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      useRuntimeConfig().jwtSecret,
      { expiresIn: '7d' }
    )

    // Set token in HTTP-only cookie
    setCookie(event, 'user_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/'
    })

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    }
  } catch (error: unknown) {
    console.error('Login error:', error)
    
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      })
    }

    throw createError({
      statusCode: error instanceof H3Error ? error.statusCode : 500,
      message: error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten'
    })
  }
})
