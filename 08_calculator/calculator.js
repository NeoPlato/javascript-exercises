const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.length === 0 ? 0 : numbers.reduce((a, b) => a + b);
};

const multiply = function(numbers) {
  return numbers.reduce((a, b) => a * b);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	F = 1;
  
  for (let i=1; i<=n; i++) {
    F *= i;
  }
  return F;
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
