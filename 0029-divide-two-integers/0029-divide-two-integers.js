/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(!dividend || !dividend) return 0;
    let num = dividend/divisor;
    if(num > Math.pow(2,31)-1) return Math.pow(2,31)-1;
    if(num < Math.pow(-2,31)) return Math.pow(-2,31);
    if(num > 0) return Math.floor(num);
    if(num < 0) return Math.ceil(num);
};