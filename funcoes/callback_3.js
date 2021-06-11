Array.prototype.myMap = function (fn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);
    newArray.push(result);
  }

  return newArray;
};

const carrinho = [{ nome: 'John' }, { nome: 'Doe' }];

const getNome = (item) => console.log(item.nome);

carrinho.map(getNome);

carrinho.myMap(getNome);
