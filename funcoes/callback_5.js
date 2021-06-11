Array.prototype.myReduce = function (fn, initialValue) {
  let previousValue = initialValue || 0;

  for (let i = 0; i < this.length; i++) {
    const result = fn(previousValue, this[i], i, this);
    previousValue = result;
  }

  return previousValue;
};

const notas = [1, 3, 6, 8, 10];

const notasSomadas = (acc, value) => {
  return acc + value;
};

// const result = notas.reduce(notasSomadas, 10);

const result = notas.myReduce(notasSomadas, 10);

console.log(result);
