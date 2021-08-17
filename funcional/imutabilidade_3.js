const pessoa = {
  nome: 'Maria',
  altura: 1.76,
  cidade: 'São Paulo',
  end: {
    rua: 'Feliz!'
  }
}

// Atribuição por Referência
// const novaPessoa = pessoa
// novaPessoa.nome = 'João'
// novaPessoa.cidade = 'Fortaleza'

// Passagem por Referência
function alteraPessoa(pessoa) {
  const novaPessoa = Object.assign(pessoa)
  novaPessoa.nome = 'João'
  novaPessoa.cidade = 'Fortaleza'
  novaPessoa.end.rua = 'ABC'
  return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a // Atribuição por valor (cópia!)

b++
console.log(a, b)
