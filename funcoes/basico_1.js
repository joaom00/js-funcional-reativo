// Function Declaration
function bomDia() {
  console.log('Bom dia!')
}

bomDia()

// Function Expression
const boaTarde = function () {
  console.log('Boa tarde!')
}

boaTarde() // undefined

function somar(a, b) {
  return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3, 5, 5, 6, 7, 8)
console.log(resultado)

resultado = somar(3)
console.log(resultado)
