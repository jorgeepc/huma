import app from './app'
import config from './config'
import Logger from './utils/logger'

app.listen(config.port, err => {
  if (err) {
    Logger.error(err)
    process.exit(1)
    return
  }
  Logger.info(`🚀 Server listening on port: ${config.port}`)
})
