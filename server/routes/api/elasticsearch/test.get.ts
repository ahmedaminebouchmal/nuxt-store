// @ts-ignore
import { Client } from '@elastic/elasticsearch'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
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
    
    // Simple ping instead of full health check
    const ping = await client.ping({
      requestTimeout: 5000
    })
    
    return {
      status: 'success',
      message: 'Successfully connected to Elasticsearch',
      ping
    }
  } catch (error: any) {
    // Log error but don't expose internal details
    console.error('Elasticsearch error:', error)
    
    // Return a safe error response
    return {
      status: 'error',
      message: 'Unable to connect to search service',
      code: error?.name || 'UNKNOWN_ERROR'
    }
  }
})
