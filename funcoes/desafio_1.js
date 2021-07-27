function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

function calcular(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b)
    }
  }
}

let resultado = somar(3)(4)(5)
console.log(resultado)

function soma(a, b) {
  return a + b
}
resultado = calcular(3)(7)(soma)
console.log('Resultado da soma:', resultado)

function diminui(a, b) {
  return a - b
}
resultado = calcular(3)(7)(diminui)
console.log('Resultado da diferença:', resultado)

function multiplica(a, b) {
  return a * b
}
resultado = calcular(3)(7)(multiplica)
console.log('Resultado da multiplicação:', resultado)

function dividi(a, b) {
  return a / b
}
resultado = calcular(3)(7)(dividi)
console.log('Resultado da divisão:', resultado)
