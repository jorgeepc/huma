import express from 'express'
import bodyParser from 'body-parser'
import routes from '../api'
import {
  catchNotFound,
  logging,
  clientErrorHandler,
  errorHandler,
} from '../utils/errorHandler'
import Logger from '../utils/logger'

export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.get('/status', (req, res) => {
    res.status(200).end()
  })
  app.head('/status', (req, res) => {
    res.status(200).end()
  })

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json())

  // Load API routes
  app.use(routes())

  // Error handlers
  app.use(catchNotFound)
  app.use(logging)
  app.use(clientErrorHandler)
  app.use(errorHandler)

  Logger.info('✌️ Express loaded')
}
