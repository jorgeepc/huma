import { Request, Response } from 'express'
import halson from 'halson'
import jwt from 'jsonwebtoken'
import format from '../../utils/format'
import UserModel from '../../schemas/user'
import Logger from '../../utils/logger'
import config from '../../config'

export const getUser = async (req: Request, res: Response) => {
  const username = req.params.username

  let user = await UserModel.findOne({ username })
  if (!user) {
    return res.status(404).send()
  }

  Logger.info(JSON.stringify(user.toString()))
  user = halson(user.toJSON()).addLink('self', `/users/${user.username}`)
  return format(res, user, 200)
}

export const addUser = async (req: Request, res: Response) => {
  const newUser = new UserModel(req.body)

  let user = await newUser.save()
  Logger.info(JSON.stringify(user.toString()))
  user = halson(user.toJSON()).addLink('self', `/users/${user.username}`)
  return format(res, user, 201)
}

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const user = await UserModel.findOne({ username })
  if (!user) {
    return res.status(404).send()
  }

  // Do not do this on production
  const validate = password === user.password
  if (!validate) {
    return res.status(401).send()
  }

  const body = { _id: user._id, email: user.email }
  const token = jwt.sign({ user: body }, config.secret)
  return format(res, { token }, 200)
}
