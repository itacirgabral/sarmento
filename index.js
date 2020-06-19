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

app.get('/produtos/:id', function (req, res) {
  const { id } = req.params

  const produto = produtos.find(function(el) {
    return el.id == id
  })

  if (produto) {
    res.json(produto)
  } else {
    res.status = 404
    res.send("Não existe Produto om este id.")
  }
})

app.listen(3000, function () {
  console.log("O servidor está no ar")
})