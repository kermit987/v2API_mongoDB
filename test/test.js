const request = require('supertest')
const { server } = require('../server.js')

test('Check connection root', async (done) => {
  await request(server)
    .get('/')
    .expect(200)
  server.close()
  done()
})
