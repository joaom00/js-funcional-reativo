const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 }
]

const getTotal = (item) => item.qtde * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho.map(getTotal).reduce(somar)
console.log(totalGeral)

Array.prototype.myReduce = function (fn, initialValue) {
  let previousValue = initialValue || 0

  for (let i = 0; i < this.length; i++) {
    const result = fn(previousValue, this[i], i, this)
    previousValue = result
  }

  return previousValue
}

const notas = [1, 3, 6, 8, 10]

const notasSomadas = (acc, value) => {
  return acc + value
}

// const result = notas.reduce(notasSomadas, 10);

const result = notas.myReduce(notasSomadas, 10)

console.log(result)
