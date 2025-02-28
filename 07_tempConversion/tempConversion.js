const convertToCelsius = function(num) {
  num = (num - 32) * (5 / 9);
  return +Number.parseFloat(num).toFixed(1);
};

const convertToFahrenheit = function(num) {
  num = num * (9 / 5) + 32;
  return +Number.parseFloat(num).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
