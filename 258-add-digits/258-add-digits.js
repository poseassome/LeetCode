/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num.toString().split('').length !== 1){
        num = num.toString().split('').reduce((acc, cur) => {
            return Number(acc)+Number(cur);
        })
    }
    return num;
};