const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 }
]

const getNome = (item) => item.nome
const qtdeMaiorQueZero = (item) => item.qtde > 0

const nomeItensValido = carrinho.filter(qtdeMaiorQueZero).map(getNome)
console.log(nomeItensValido)

Array.prototype.myFilter = function (fn) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this)

    if (result) {
      newArray.push(this[i])
    }
  }

  return newArray
}

const notas = [1, 3, 6, 8, 10]

const notasMaioresQue6 = (item) => item > 6

// const result = notas.filter(notasMaioresQue6);

const result = notas.myFilter(notasMaioresQue6)

console.log(result)
