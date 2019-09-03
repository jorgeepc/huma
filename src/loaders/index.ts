import express from 'express'
import expressLoader from './express'
import Logger from '../utils/logger'

export default async ({ app }: { app: express.Application }) => {
  // TODO: Load mongo
  Logger.info('✌️ DB loaded and connected')

  expressLoader({ app })
  Logger.info('✌️ Express loaded')
}
