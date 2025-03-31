// Elasticsearch integration temporarily disabled
// @ts-ignore
import { Client } from '@elastic/elasticsearch'

// Empty plugin to prevent build errors
export default defineNitroPlugin(() => {
  // Elasticsearch integration will be implemented here
})

/*
Original implementation:
export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig()
  
  // Create client with connection timeout
  const client = new Client({
    node: config.elasticsearchUrl,
    ssl: {
      rejectUnauthorized: false
    },
    maxRetries: 3,
    requestTimeout: 10000,
    sniffOnStart: false,
    sniffInterval: false
  })

  // Add the client to the event context
  nitroApp.hooks.hook('request', (event) => {
    event.context.elasticsearch = client
  })
})
*/
