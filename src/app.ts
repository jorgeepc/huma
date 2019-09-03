import express from 'express'
import config from './config'
import loaders from './loaders'
import Logger from './utils/logger'

async function startServer() {
  const app = express()

  loaders({ app })

  app.listen(config.port, err => {
    if (err) {
      Logger.error(err)
      process.exit(1)
      return
    }
    Logger.info(`🚀 Server listening on port: ${config.port}`)
  })
}

startServer()
