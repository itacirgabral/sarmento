const express = require('express')
const logs = require('./middleware/logs')
const produtos = require('./produtos')

const app = express()

app.use(logs)

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/produtos', function (req, res) {
  res.json(produtos)
})

app.get('/terceirarota', function (req, res) {
  res.send('terceirarota')
})

app.listen(3000)