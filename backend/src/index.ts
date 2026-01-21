import { Hono } from 'hono'
import { cors } from '@hono/cors'

const app = new Hono()

app.use('/*', cors())

app.get('/health', (c) => {
  return c.json({ status: 'ok', service: 'LP_Nooklead Backend' })
})

app.get('/api', (c) => {
  return c.json({ 
    message: 'LP_Nooklead API',
    version: '0.0.1'
  })
})

const port = process.env.PORT || 3000
console.log(`ðŸš€ Server running on http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}
