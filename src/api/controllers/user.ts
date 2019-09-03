import { NextFunction, Request, Response } from 'express'
import Logger from '../../utils/logger'

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const username = req.params.username
  Logger.info(username)
  return res.status(200).json({ username })
}
