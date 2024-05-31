/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    const sum = x.toString().split('').reduce((a,b) => a + Number(b), 0);
    return x%sum ? -1 : sum;
};