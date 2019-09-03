import { NextFunction, Request, Response } from 'express'
import Logger from './logger'

export const catchNotFound = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const err = new Error('Not Found')
  err['status'] = 404
  next(err)
}

export const logging = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  Logger.error(err)
  next(err)
}

export const clientErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.status || 500).send({ error: err.message })
}
