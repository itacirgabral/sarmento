const express = require('express')
const produtos = require('./produtos')

const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/segundarota', function (req, res) {
  res.send('segundarota')
})

app.get('/terceirarota', function (req, res) {
  res.send('terceirarota')
})

app.listen(3000)