const removeFromArray = function(numbers, ...theArgs) {
    const result = [];

    nextNum:
    for (const number of numbers) {
        for (const arg of theArgs) {
            if (number === arg) continue nextNum;
        }

        result.push(number);
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
