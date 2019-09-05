import { app, request } from '../common'
import User from '../../src/models/user'

describe('user route', () => {
  const user: User = {
    // generic random value from 1 to 100 only for tests so far
    id: Math.floor(Math.random() * 100) + 1,
    firstName: 'Huma',
    lastName: 'Nito',
    email: 'huma@nito.com',
    password: 'password',
    phone: '555555',
    userStatus: 1,
    username: 'huma',
  }

  it('should return the user (promise)', () => {
    return request(app)
      .get(`/users/${user.username}`)
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body.username).toBe(user.username)
      })
  })

  it('should return the user (async/await)', async () => {
    const res = await request(app).get('/users/huma')
    expect(res.status).toBe(200)
    expect(res.body.username).toBe(user.username)
  })
})
