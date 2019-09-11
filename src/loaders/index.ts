import express from 'express'
import expressLoader from './express'
import mongooseLoader from './mongoose'
import passportLoader from './passport'

export default ({ app }: { app: express.Application }) => {
  mongooseLoader()

  expressLoader({ app })

  passportLoader()
}
