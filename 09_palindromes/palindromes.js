const palindromes = function (str) {
    const regex = /[A-Z0-9]/g;
    const strUpcased = str.toUpperCase();
    let arr = strUpcased.match(regex);
    let arrReversed = arr.toReversed();

    str = arr.join("");
    const strReversed = arrReversed.join("");

    return str === strReversed;  
};

// Do not edit below this line
module.exports = palindromes;
