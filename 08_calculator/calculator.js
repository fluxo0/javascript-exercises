const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((acc, value) => acc + value, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, value) => acc * value, 1);
};

const power = function(x, y) {
  // return Math.pow(a, b);

  let result = 1;
	for (let i = y; i > 0; i--) {
    result *= x;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0) 1;

  let arr = [];
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }

  return arr.reduce((acc, value) => acc * value, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
