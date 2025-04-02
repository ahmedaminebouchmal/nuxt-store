import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  // This endpoint will receive the OAuth callback
  const query = getQuery(event)
  
  // Close the popup and send the token back to the parent window
  return `
    <html>
      <body>
        <script>
          if (window.opener) {
            window.opener.postMessage({ token: '${query.access_token}' }, window.location.origin);
            window.close();
          }
        </script>
      </body>
    </html>
  `
})
