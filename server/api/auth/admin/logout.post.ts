import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Clear the admin token cookie
    deleteCookie(event, 'admin_token', {
      path: '/',
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })

    return {
      success: true,
      message: 'Logged out successfully'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Error during logout'
    }
  }
})
