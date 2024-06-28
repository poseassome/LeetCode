/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let len = 1, range = 9, base = 1;
    while(n > len*range){
        n -= len*range;
        base *= 10;
        range *= 10;
        len++;
    }
    const num = base + Math.floor((n-1)/len);
    const str = num.toString();
    return str[(n-1)%len];
};