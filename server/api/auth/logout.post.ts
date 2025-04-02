import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  // Clear user token cookie
  deleteCookie(event, 'user_token', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  })

  return {
    success: true,
    message: 'Erfolgreich abgemeldet'
  }
})
