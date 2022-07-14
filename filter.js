const filter = (callback) => {
  const array = [];

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i);
    if (result) {
      array.push(this[i]);
    }
  }

  return array;
};

const arr = [1, 2, 3];

const newArr = arr.filter((e) => {
  return e > 1;
});

[2, 3];
