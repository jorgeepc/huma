import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import config from '../config'

export default () => {
  passport.use(
    new Strategy(
      {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      function(jwtPayload, done) {
        try {
          return done(null, jwtPayload.user)
        } catch (error) {
          done(error)
        }
      },
    ),
  )
}
