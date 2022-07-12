/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    const reverseNum = n => parseInt(n.toString().split('').reverse().join(''));
    return num === reverseNum(reverseNum(num));
};