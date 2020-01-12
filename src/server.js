import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
  next()
}

// cats
const routes = [
  'get /cat',
  'get /cat/:id',
  'post /cat',
  'put /cat/:id',
  'delete /cat/:id'
]

router
  .route('/cat')
  .get()
  .post()

router
  .route('/cat/:id')
  .get()
  .post()
  .put()
  .delete()

router.get('/me', (req, res) => {
  res.send({ me: 'hello me' })
})

app.use('/api', router)

app.get('/data', [log, log, log], (req, res) => {
  res.send({ message: 'Hello' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

app.put('/data', (req, res) => {})

app.delete('/delete', (req, res) => {})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
