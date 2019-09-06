import { app, request } from '../common'
import UserModel from '../../src/schemas/user'

const user = {
  firstName: 'Huma',
  lastName: 'Nito',
  email: 'huma@nito.com',
  password: 'password',
  phone: '555555',
  userStatus: 1,
  username: 'huma',
}

describe('user route', () => {
  beforeAll(() => {
    expect(UserModel.modelName).toBe('User')
    UserModel.collection.drop()
  })

  it('should return with HTTP 404 status because there is no user', async () => {
    const res = await request(app).get(`/users/${user.username}`)
    expect(res.status).toBe(404)
  })

  it('should create a new user and retrieve it back', async () => {
    const res = await request(app)
      .post('/users')
      .send(user)
    expect(res.status).toBe(201)
    expect(res.body.username).toBe(user.username)
  })

  it('should return the user created on the step before', async () => {
    const res = await request(app).get(`/users/${user.username}`)
    expect(res.status).toBe(200)
    expect(res.body.username).toBe(user.username)
  })
})
