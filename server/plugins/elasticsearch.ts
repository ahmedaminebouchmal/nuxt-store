// @ts-ignore
import { Client } from '@elastic/elasticsearch'

export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig()
  
  const client: Client = new Client({
    node: config.elasticsearchUrl,
    ssl: {
      rejectUnauthorized: false
    }
  })

  // Add the client to the event context
  nitroApp.hooks.hook('request', (event) => {
    event.context.elasticsearch = client
  })
})
