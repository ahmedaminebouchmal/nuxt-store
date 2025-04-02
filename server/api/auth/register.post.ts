import { H3Event, H3Error } from 'h3'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

// Validation schema for regular registration
const regularRegisterSchema = z.object({
  email: z.string().email('Ungültige E-Mail-Adresse'),
  password: z.string().min(6, 'Das Passwort muss mindestens 6 Zeichen lang sein'),
  name: z.string().min(1, 'Name ist erforderlich')
})

// Validation schema for Google registration
const googleRegisterSchema = z.object({
  email: z.string().email('Ungültige E-Mail-Adresse'),
  name: z.string().min(1, 'Name ist erforderlich'),
  googleToken: z.string().min(1, 'Google Token ist erforderlich'),
  googleId: z.string().min(1, 'Google ID ist erforderlich')
})

type RegularRegistration = z.infer<typeof regularRegisterSchema>
type GoogleRegistration = z.infer<typeof googleRegisterSchema>

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    const isGoogleRegistration = 'googleToken' in body

    let validatedData: RegularRegistration | GoogleRegistration
    if (isGoogleRegistration) {
      validatedData = googleRegisterSchema.parse(body)
    } else {
      validatedData = regularRegisterSchema.parse(body)
    }

    const { email, name } = validatedData

    // For Google registration, first try to find user by googleId
    if (isGoogleRegistration) {
      const { googleId } = validatedData as GoogleRegistration
      const existingGoogleUser = await prisma.user.findFirst({
        where: { 
          OR: [
            { googleId },
            { email }
          ]
        }
      })

      if (existingGoogleUser) {
        // Update googleId if user exists with same email but no googleId
        if (!existingGoogleUser.googleId) {
          await prisma.user.update({
            where: { id: existingGoogleUser.id },
            data: { googleId }
          })
        }

        const token = jwt.sign(
          { userId: existingGoogleUser.id, role: existingGoogleUser.role },
          useRuntimeConfig().jwtSecret,
          { expiresIn: '7d' }
        )

        setCookie(event, 'user_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: '/'
        })

        return {
          success: true,
          user: {
            id: existingGoogleUser.id,
            email: existingGoogleUser.email,
            name: existingGoogleUser.name,
            role: existingGoogleUser.role
          }
        }
      }
    } else {
      // For regular registration, check if email exists
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })

      if (existingUser) {
        throw createError({
          statusCode: 400,
          message: 'Diese E-Mail-Adresse ist bereits registriert'
        })
      }
    }

    // Create user
    const userData = {
      email,
      name,
      role: 'USER' as const,
      password: isGoogleRegistration ? '' : await bcrypt.hash((validatedData as RegularRegistration).password, 10),
      googleId: isGoogleRegistration ? (validatedData as GoogleRegistration).googleId : null,
      cart: {
        create: {} // Create an empty cart for the user
      }
    }

    const user = await prisma.user.create({ data: userData })

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
    console.error('Registration error:', error)
    
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
