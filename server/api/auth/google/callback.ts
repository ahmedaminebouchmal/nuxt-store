import { H3Event } from 'h3'

interface GoogleTokenResponse {
  access_token: string
  expires_in: number
  refresh_token?: string
  scope: string
  token_type: string
}

export default defineEventHandler(async (event: H3Event) => {
  const query = getQuery(event)
  const code = query.code as string
  
  if (!code) {
    throw createError({
      statusCode: 400,
      message: 'Authorization code is required'
    })
  }

  const config = useRuntimeConfig()
  
  try {
    // Exchange code for access token
    const tokenResponse = await $fetch<GoogleTokenResponse>('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: {
        code,
        client_id: config.public.googleClientId,
        client_secret: config.googleClientSecret,
        redirect_uri: 'http://localhost:3000/api/auth/google/callback',
        grant_type: 'authorization_code'
      }
    })

    // Close popup and send token back
    return `
      <html>
        <body>
          <script>
            if (window.opener) {
              window.opener.postMessage({ 
                token: '${tokenResponse.access_token}',
                type: 'google-oauth'
              }, window.location.origin);
              window.close();
            }
          </script>
        </body>
      </html>
    `
  } catch (error) {
    console.error('Google OAuth error:', error)
    return `
      <html>
        <body>
          <script>
            if (window.opener) {
              window.opener.postMessage({ 
                error: 'Failed to authenticate with Google',
                type: 'google-oauth'
              }, window.location.origin);
              window.close();
            }
          </script>
        </body>
      </html>
    `
  }
})
