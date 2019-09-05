import { NextFunction, Request, Response } from 'express'
import halson from 'halson'
import format from '../../utils/format'
import Logger from '../../utils/logger'

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const username = req.params.username
  const user = halson({ username }).addLink('self', `/users/${username}`)
  Logger.info(JSON.stringify(user))
  return format(res, user, 200)
}
