import { Router } from 'express'
import passport from 'passport'
import * as userController from '../controllers/user'

export default (app: Router) => {
  app
    .route('/users')
    .post(
      passport.authenticate('jwt', { session: false }),
      userController.addUser,
    )
  app
    .route('/users/:username')
    .get(
      passport.authenticate('jwt', { session: false }),
      userController.getUser,
    )
  app.route('/users/login').post(userController.login)
}
