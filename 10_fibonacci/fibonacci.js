const fibonacci = function(num) {
    let fibArr = [1,1];

    for (i = 2; i < num; i++){
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr[num-1] ?? 'OOPS';

};
// Do not edit below this line
module.exports = fibonacci;
