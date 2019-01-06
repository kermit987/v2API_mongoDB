const app = require('express')
const {
  root,
  subscription,
} = require('../controller')

const router = app.Router()

router.use((request, response, next) => {
  next()
})

router.get('/', root)
router.post('/subscription', subscription)

module.exports = {
  router,
}
