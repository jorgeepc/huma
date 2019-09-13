import { Application } from 'express'
import { startApp, request } from '../common'
import UserModel from '../../src/schemas/user'

describe('user route', () => {
  let app: Application
  let token: string

  const user = {
    firstName: 'Huma',
    lastName: 'Nito',
    email: 'huma@nito.com',
    password: 'password',
    phone: '555555',
    userStatus: 1,
    username: 'huma',
  }

  beforeAll(async () => {
    app = await startApp()
    expect(UserModel.modelName).toBe('User')
    // TODO: drop collection
    // await UserModel.collection.drop()
    const newUser = new UserModel(user)
    await newUser.save()
  })

  it('should be able to login', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        username: user.username,
        password: user.password,
      })
    expect(res.status).toBe(200)
    token = res.body.token
  })

  it('should return with HTTP 404 status because there is no user', async () => {
    const res = await request(app)
      .get('/users/NO_USER')
      .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(404)
  })

  it('should create a new user and retrieve it back', async () => {
    const res = await request(app)
      .post('/users')
      .set('Authorization', `Bearer ${token}`)
      .send(user)
    expect(res.status).toBe(201)
    expect(res.body.username).toBe(user.username)
  })

  it('should return the user created on the step before', async () => {
    const res = await request(app)
      .get(`/users/${user.username}`)
      .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200)
    expect(res.body.username).toBe(user.username)
  })
})
