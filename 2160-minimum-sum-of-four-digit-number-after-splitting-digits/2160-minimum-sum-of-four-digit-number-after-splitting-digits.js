/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = num.toString().split('').sort().join("");
    const num1 = Number(num[0]+num[2]);
    const num2 = Number(num[1]+num[3]);
    return num1 + num2;
};