import express from 'express'
import loaders from './loaders'

function startApp() {
  const app = express()

  loaders({ app })

  return app
}

export default startApp()
