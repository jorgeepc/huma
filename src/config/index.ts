import dotenv from 'dotenv'
import fs from 'fs'
import Logger from '../utils/logger'

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (fs.existsSync('.env')) {
  Logger.debug('Using .env file to supply config environment variables')
  dotenv.config({ path: '.env' })
} else {
  Logger.debug('Using .env.example file to supply config environment variables')
  dotenv.config({ path: '.env.example' })
}

const ENVIRONMENT = process.env.NODE_ENV
const prod = ENVIRONMENT === 'production' // Anything else is treated as 'dev'
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
export const SESSION_SECRET = process.env.SESSION_SECRET
export const MONGODB_URI = prod
  ? process.env.MONGODB_URI
  : process.env.MONGODB_URI_LOCAL

if (!SESSION_SECRET) {
  Logger.error('No client secret. Set SESSION_SECRET environment variable.')
  process.exit(1)
}

if (!MONGODB_URI) {
  if (prod) {
    Logger.error(
      'No mongo connection string. Set MONGODB_URI environment variable.',
    )
  } else {
    Logger.error(
      'No mongo connection string. Set MONGODB_URI_LOCAL environment variable.',
    )
  }
  process.exit(1)
}

export default {
  /**
   * Your favorite port
   */
  environment: ENVIRONMENT,
  /**
   * Your favorite port
   */
  port: PORT,
  /**
   * Your favorite port
   */
  sessionSecret: SESSION_SECRET,
  /**
   * Your favorite port
   */
  mongoDBURI: MONGODB_URI,
}
