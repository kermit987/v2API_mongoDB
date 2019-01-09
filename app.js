const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const { router } = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)

module.exports = {
  app,
}
