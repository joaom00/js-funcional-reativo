function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch (err) {
      reject(err)
    }
  })
}

funcionarOuNao('Testando...', 0.1)
  .then((v) => console.log(`Valor: ${v}`))
  .catch((err) => console.log(`Error: ${err}`))
