const { Observable } = require('rxjs')

const obs = new Observable((subscriber) => {
  subscriber.next('RxJS')
  subscriber.next('é')
  subscriber.next('bem')
  subscriber.next('poderoso!')

  if (Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('Que problema?!?')
  }
})

obs.subscribe({
  next(valor) {
    console.log(`Valor: ${valor}`)
  },
  complete() {
    console.log('Fim!')
  },
  error(msg) {
    console.log(`Erro: ${msg}`)
  }
})
