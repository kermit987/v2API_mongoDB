const request = require('supertest')
const { server } = require('../server.js')

test('Check connection root', async (done) => {
  await request(server)
    .get('/')
    .expect(200)
  done()
})

test('[Subscription] valid data', async (done) => {
  const userDetails = {
    name: 'admin',
    lastname: 'admin',
    password: 'admin',
    confirmationPassword: 'admin',
    username: 'admin',
    email: 'admin@admin.com',
  }
  await request(server)
    .post('/subscription')
    .send(userDetails)
    .set('Accept', 'application/json')
    .expect(200)
  done()
})

test('[Subscription] password doesn\'nt matches', async (done) => {
  const userDetails = {
    name: 'admin',
    lastname: 'admin',
    password: 'admin',
    confirmationPassword: 'wrongPwd',
    username: 'admin',
    email: 'admin@admin.com',
  }
  await request(server)
    .post('/subscription')
    .send(userDetails)
    .set('Accept', 'application/json')
    .expect(400)
  done()
  server.close()
})
