const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const { router } = require('./routes')

const app = express()
const port = process.env.PORT || 8888

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)


if (process.env.NODE_ENV !== 'production') {
  dotenv.load()
}

app.listen(port)

module.exports = app
