import { app, request } from '../common'

describe('user route', () => {
  const user = {
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
