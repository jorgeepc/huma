import { NextFunction, Request, Response } from 'express'
import format from '../../utils/format'
import Logger from '../../utils/logger'

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const username = req.params.username
  Logger.info(username)
  return format(res, { username }, 200)
}
