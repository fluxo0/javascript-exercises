const fibonacci = function(num) {
    num = +num;
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1) return 1;

    let firstNum = 0;
    let secondNum = 1;
    let acc = 0;
    for (let i = 2; i <= num; i++) {
        acc = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = acc;
    }
    return acc;
};

// Do not edit below this line
module.exports = fibonacci;
