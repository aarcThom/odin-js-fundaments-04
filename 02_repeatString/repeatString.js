const repeatString = function(phrase, repeats) {
    if (repeats >= 0) {
        return phrase.repeat(repeats);
    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;
