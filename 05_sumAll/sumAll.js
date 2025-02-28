const sumAll = function(num1, num2) {
    const numbers = [];
    let sum = 0;

    if (num1 < 0 || num2 < 0 ||
        !Number.isInteger(num1) || !Number.isInteger(num2) 
    ) return "ERROR";

    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            numbers.push(i);
        }
    } else {
        for (let i = num1; i <= num2; i++) {
            numbers.push(i);
        }
    }

    for (const number of numbers) {
        sum += number;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
