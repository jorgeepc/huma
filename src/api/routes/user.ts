import { Router } from 'express'
import * as userController from '../controllers/user'

export default (app: Router) => {
  app.route('/users/:username').get(userController.getUser)
}
