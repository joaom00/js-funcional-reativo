const path = require('path')
const fs = require('fs')

function readFile(filePath) {
  return new Promise((resolve) => {
    fs.readFile(filePath, (_, content) => {
      resolve(content.toString())
    })
  })
}

const filePath = path.join(__dirname, 'dados.txt')

readFile(filePath).then(console.log)
