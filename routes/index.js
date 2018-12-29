const app = require('express')

const router = app.Router()

router.use((request, response, next) => {
  next()
})

module.exports = {
  router,
}
