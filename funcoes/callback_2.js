const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dados.txt');

function showContent(_, content) {
  console.log(content.toString());
}

console.log('Inicio...');
fs.readFile(filePath, showContent);
console.log('Fim...');

console.log('Inicio...');
const content = fs.readFileSync(filePath);
console.log(content.toString());
console.log('Fim...');
