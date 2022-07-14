// map함수 : 배열을 수정해서 새로운 배열을 만들 때
const map = (callback) => {
  const array = [];
  // callback : 콜백함수
  //  this : 함수를 실행시킨 주체(arr)

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i);
    // -> 11,12,13
    array.push(result);
  }

  return array;
};

const arr = [1, 2, 3];

const callback = (e, i) => {
  console.log(e);
  return e + 10;
};

const newArr = arr.map(callback);

[11, 12, 13];
