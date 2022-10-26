const palindromes = function (strIN) {
    strIN = strIN.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const revStr = strIN.split('').reverse().join('');
    
    return strIN === revStr;
};

// Do not edit below this line
module.exports = palindromes;
