const nums = [1, 2, 3, 4, 5]
const dobro = (n) => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = (texto) => texto[0]
console.log(nomes.map(primeiraLetra))

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 }
]

const getNome = (item) => item.nome
console.log(carrinho.map(getNome))

const getTotal = (item) => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

Array.prototype.myMap = function (fn) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this)
    newArray.push(result)
  }

  return newArray
}

const carrinho = [{ nome: 'John' }, { nome: 'Doe' }]

const getNome = (item) => console.log(item.nome)

carrinho.map(getNome)

carrinho.myMap(getNome)
