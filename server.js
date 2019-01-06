const express = require('express')
const dotenv = require('dotenv')
const http = require('http')
const bodyParser = require('body-parser')

const { router } = require('./routes')

const app = express()
const port = process.env.PORT || 8888

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)

if (process.env.NODE_ENV !== 'production') {
  dotenv.load()
}

const server = http.createServer(app).listen(port)

module.exports = {
  server,
}
