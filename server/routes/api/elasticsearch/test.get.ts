// @ts-ignore
import { Client } from '@elastic/elasticsearch'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const client: Client = new Client({
      node: config.elasticsearchUrl,
      ssl: {
        rejectUnauthorized: false
      }
    })
    
    // Test connection with cluster health
    const health = await client.cluster.health()
    
    return {
      status: 'success',
      message: 'Successfully connected to Elasticsearch',
      health
    }
  } catch (error: any) {
    console.error('Elasticsearch error:', error)
    return {
      status: 'error',
      message: 'Failed to connect to Elasticsearch',
      error: error?.message || 'Unknown error',
      details: error
    }
  }
})
