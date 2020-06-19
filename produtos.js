const produtos = [
  {id: 1, nome: 'cafeteira', quantidade: 30, valorunitario: 500 },
  {id: 2, nome: 'fogão', quantidade: 50, valorunitario: 700 },
  {id: 3, nome: 'lavadoura', quantidade: 30, valorunitario: 600 }
].map(({ id, nome, quantidade, valorunitario }) => {
  const produto = { id, nome, quantidade, valorunitario}
  produto.precototal = quantidade * valorunitario
  produto.precovenda = valorunitario * 1.2
  produto.lucro = valorunitario * 0.2

  if (quantidade < 50) {
    produto.situacao = 'estável'
  } else if (quantidade < 100) {
    produto.situacao = 'boa'
  } else {
    produto.situacao = 'excelente'
  }

  return produto
})

module.exports = produtos