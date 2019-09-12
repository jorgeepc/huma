import express from 'express'
import expressLoader from './express'
import mongooseLoader from './mongoose'
import passportLoader from './passport'

export default async ({ app }: { app: express.Application }) => {
  await mongooseLoader()

  expressLoader({ app })

  passportLoader()
}
