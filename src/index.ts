import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { swaggerUI } from '@hono/swagger-ui'
import { stream, streamText, streamSSE } from 'hono/streaming'
import honovideo from './routes/videodownload'
import { dbclient } from './db'
import { api } from '../convex/_generated/api'

const app = new Hono()

app.use(logger())

const env = ['CONVEX_URL']


// se não tiver a variável de ambiente CONVEX_URL
if (!env.every(v => process.env[v])) {
  app.get("/*", c => {
    return c.json({error: "CONVEX_URL is not defined"})
  })
}


app.get('/', async (c) => {

  const data = await dbclient.query(api.tasks.get)
  
  return c.json(data)
  // return c.json({ success: true })
  return c.html('<h1>Hello World</h1>')
})


app.get('/downloadvideo/:url', honovideo)

export default app
