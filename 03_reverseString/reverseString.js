const reverseString = function(inputString) {
    let strArray = inputString.split("");
    strArray.reverse();
    let revString = '';

    for (const letter of strArray) {
        revString += letter;
    }
    return revString;
};

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;
