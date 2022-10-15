const sumAll = function(int01, int02) {

    if ((typeof int01 === 'number' && typeof int02 === 'number') &&
    (int01 >= 0 && int02 >= 0)){

        let minNum = Math.min(int01, int02);
        let maxNum = Math.max(int01, int02);
    
        let sumNum = 0;

        for (let i = minNum; i < maxNum + 1; i++) {
            sumNum += i;
        }
        return sumNum;
    } else {
        return 'ERROR';
    }
};
// Do not edit below this line
module.exports = sumAll;
