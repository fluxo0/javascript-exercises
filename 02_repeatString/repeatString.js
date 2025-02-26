const repeatString = function(string, num) {
    let finalString = "";

    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            finalString += string;
        } 
    } else {
        return 'ERROR';
    }
    
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
