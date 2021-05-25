const mapToNegativize = (arr) => {
  const negArr = new Array();
  for (let val of arr) {
    if (val === 0) negArr.push(val);
    else negArr.push(-val);
  }
  return negArr;
};

const mapToNoChange = (arr) => {
  const newArr = new Array();
  for (let val of arr) {
    newArr.push(val);
  }
  return newArr;
};

const mapToDouble = (arr) => {
  const doubledArr = [];
  for (let i = 0; i < arr.length; i++) {
    doubledArr.push(arr[i] * 2);
  }
  return doubledArr;
};

const mapToSquare = (arr) => {
  const squaredArr = new Array();
  for (let val of arr) {
    squaredArr.push(val ** 2);
  }
  return squaredArr;
};

const reduceToTotal = (arr, start = 0) => {
  let total = start;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const reduceToAllTrue = (arr) => {
  for (let val of arr) {
    if (!val) return false;
  }
  return true;
};

const reduceToAnyTrue = (arr) => {
  for (let val of arr) {
    if (val) return true;
  }
  return false;
};
