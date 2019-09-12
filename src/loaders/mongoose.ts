import mongoose from 'mongoose'
import config from '../config'
import Logger from '../utils/logger'

export default async () => {
  try {
    await mongoose.connect(config.mongoDBURI, { useNewUrlParser: true })
    Logger.info('✌️ MongoDB loaded and connected')
  } catch (error) {
    Logger.error(`MongoDB connection error: ${error}`)
  }
}
