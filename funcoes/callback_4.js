Array.prototype.myFilter = function (fn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);

    if (result) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const notas = [1, 3, 6, 8, 10];

const notasMaioresQue6 = (item) => item > 6;

// const result = notas.filter(notasMaioresQue6);

const result = notas.myFilter(notasMaioresQue6);

console.log(result);
