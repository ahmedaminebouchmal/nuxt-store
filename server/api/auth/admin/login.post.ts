import { H3Event } from 'h3'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    const { email, password } = body
    const config = useRuntimeConfig()

    console.log('Login attempt for:', email)

    // Check against environment variables
    if (email === config.adminEmail && password === config.adminPassword) {
      // Generate admin token
      const token = jwt.sign(
        { adminId: 'default-admin', name: 'System Admin' },
        config.jwtAdminSecret || config.jwtSecret,
        { expiresIn: '4h' }
      )

      // Set cookie with explicit options
      setCookie(event, 'admin_token', token, {
        httpOnly: false, // Allow JS access
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 4, // 4 hours
        path: '/',
        sameSite: 'lax'
      })

      // Log for debugging
      console.log('Login successful, token set:', token.substring(0, 20) + '...')
      console.log('Cookie header:', event.node.res.getHeader('Set-Cookie'))

      return {
        success: true,
        token, // Send token in response for verification
        admin: {
          id: 'default-admin',
          email: config.adminEmail,
          name: 'System Admin'
        }
      }
    }

    console.log('Login failed: invalid credentials')
    return {
      success: false,
      message: 'Invalid credentials'
    }
  } catch (error) {
    console.error('Login error:', error)
    return {
      success: false,
      message: 'An error occurred during login'
    }
  }
})
