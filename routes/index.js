const app = require('express')
const controller = require('../controller')

const router = app.Router()

router.use((request, response, next) => {
  next()
})

router.get('/', controller.root)
module.exports = {
  router,
}
