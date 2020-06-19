const express = require('express')
const bodyParser = require('body-parser')

const logs = require('./middleware/logs')
const produtos = require('./produtos')

const app = express()

app.use(logs)

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

app.post('/produtos', bodyParser.json(), function (req, res) {
  const { id, nome, quantidade, valorunitario, complemento } = req.body

  if ([id, nome, quantidade, valorunitario, complemento].every(el => typeof(el) === 'undefined')) {
    res.status = 400
    res.send("O campo id do produto ou nome do produto ou quantidade ou valor unitario ou complemento não existe no corpo da requisição.")
  } else if (produtos.find(el => el.id === id)) {
    res.status = 400
    res.send("O id já existe")
  } else {
    const produto = {
      id,
      nome,
      quantidade,
      valorunitario,
      complemento,
      precototal: quantidade * valorunitario,
      precovenda: valorunitario * 1.2,
      lucro: valorunitario * 0.2,
    }

    if (quantidade < 50) {
      produto.situacao = 'estável'
    } else if (quantidade < 100) {
      produto.situacao = 'boa'
    } else {
      produto.situacao = 'excelente'
    }

    produtos.push(produto)
    res.json(produto)
  }
})

app.listen(3000, function () {
  console.log("O servidor está no ar")
})